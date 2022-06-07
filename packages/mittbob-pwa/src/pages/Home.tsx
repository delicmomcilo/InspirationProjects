import React, {SyntheticEvent} from 'react';
import {useTranslation} from 'react-i18next';
import {useSelector, useDispatch} from 'react-redux';
import parse from 'html-react-parser';
import {push} from 'connected-react-router';
import {Grid, ShortcutButton, Typography, ProgressIndicator, Card, Anchor} from '@bob/core-components';
import moment from 'moment';
import VippsCheckout from 'src/components/VippsCheckout';
import {useLocation, useParams} from 'react-router-dom';
import VippsCheckoutButton from 'src/components/VippsCheckoutButton';
import {Button, Icon} from '../components/atomic';
import {
    Container,
    UmbracoContent,
    MemberInfoCard,
    MobileContainer,
    DesktopContainer,
    ButtonsContainer,
    ShortcutAlignEnd,
    ShortcutAlignStart,
    SpacingForScrollBugBecauseOfBottomNav,
} from './home/home.styles';
import Background from '../components/Background';
import {HF_ROLES} from '../redux/modules/person/constants';
import bbl from '../config/bbl';
import {watchGetWelcomeText} from '../redux/modules/umbraco/actions';
import {UMBRACO_PROPERTIES} from '../redux/modules/umbraco/constants';
import config from '../config';
import PATHS from '../router/paths';
import {RootState} from '../redux/rootState';
import {ResponseNoChildren} from '../redux/modules/umbraco/types/sagas.types';
import {getSeniority} from '../redux/modules/person/actions';
import {watchSignIn} from '../redux/modules/auth0/actions';

const Home = () => {
    const {id} = useParams<any>();
    const {t} = useTranslation();
    const dispatch = useDispatch();
    const isAuthenticated = useSelector((store: RootState) => store.auth0.isAuthenticated);
    const userAuth0 = useSelector((store: RootState) => store.auth0.user);
    const person = useSelector((store: RootState) => store.person.person);
    const seniority = useSelector((store: RootState) => store.person.seniority);
    const loading = useSelector((store: RootState) => store.auth0.loading);
    const handleLogin = (): void => {
        dispatch(watchSignIn());
    };
    const handleClick = (e: SyntheticEvent<HTMLButtonElement>): void => {
        const target = e.currentTarget as HTMLButtonElement;
        const path = target.dataset?.path;
        if (path) {
            dispatch(push(path));
        }
    };

    const isBoardPortalUser = (): boolean => {
        return !!userAuth0?.role?.includes(HF_ROLES.BOARD_PORTAL_USER);
    };
    const isOwnerPortalUser = (): boolean => {
        return !!userAuth0?.role?.includes(HF_ROLES.OWNER_PORTAL_USER);
    };

    const shouldDisplayMemberInfo = () => {
        if (memberNumber === 0) return false;
        return isAuthenticated && memberNumber && seniority?.seniorityDate;
    };

    const handleExternalClick = (e: SyntheticEvent<HTMLButtonElement>) => {
        const target = e.currentTarget as HTMLButtonElement;
        const href = target.getAttribute('data-href');
        if (href) {
            window.open(href, '_blank');
        }
    };

    const handleLoginClick = (): void => {
        dispatch(watchSignIn());
    };
    const nameId = person?.nameId;
    const userName = person?.firstName;
    const memberNumber = person?.memberNumber;
    const welcomeText = useSelector((state: RootState): string => {
        const obj = state.umbraco[UMBRACO_PROPERTIES.WELCOME_TEXT] as Partial<ResponseNoChildren>;
        return obj?.props?.text.value || '';
    });

    React.useEffect(() => {
       const inter = setInterval(() => {
           const elMob = document.getElementById("counter-redirect-mob");
           const el = document.getElementById("counter-redirect");
           let val = el ? parseInt(el?.innerText, 10) : 10;
           if (Number.isNaN(val)) val = 10;
           if(el) el.innerText = `${--val}`;
           if(elMob) elMob.innerText = `${--val}`;
       }, 1000);
       return () => clearInterval(inter)
    });

    React.useEffect(() => {
        dispatch(watchGetWelcomeText());
    }, [dispatch]);
    React.useEffect(() => {
        if (memberNumber && nameId) dispatch(getSeniority(nameId));
    }, [dispatch, memberNumber, nameId]);

    const getMemberButton = (): JSX.Element => {
        if (memberNumber)
            return (
              <Button fitContent data-href={bbl.giftMembershipUrl} onClick={handleExternalClick}>
                {t('Gi et BOB-medlemskap i gave')}
              </Button>
            );
        return isAuthenticated ? (
          <></>
        ) : (
          <>
            <Button fitContent onClick={handleLoginClick}>
              {t('Gå til innlogging')}
            </Button>
          </>
        );
    };

    const getFormattedSeniorityDate = (): string => {
        if (!seniority) return '';
        return moment(seniority.seniorityDate).format('DD.MMMM YYYY');
    };

    return (
      <Container container spacing={2}>
        <Background />
        <Grid item xs={12}>
          <MobileContainer container direction="column" alignItems="center" justifyContent="center">
            <Grid item xs={12}>
              <Icon name="BobHorizontalLogo" size="xxx-large" />
            </Grid>
            {loading ? (
              <ProgressIndicator size="x-large" />
                    ) : (
                      <>
                        <Grid xs={12} item>
                          <Typography size="large">
                            Vi legger om systemene våre og denne siden er satt
                            ut av drift som følge av dette.
                          </Typography>
                        </Grid>
                        <Grid xs={12} item>
                          <Typography size="large">
                            Om du har lastet ned MittBOB-appen anbefaler vi deg å slette denne nå.
                          </Typography>
                        </Grid>
                        <Grid xs={12} item>
                          <Typography>
                            Vi sender deg videre til informasjonssidene om...{" "}
                            <span id="counter-redirect-mob">10</span>
                          </Typography>
                        </Grid>
                        <Grid xs={12} item>
                          <Anchor
                            href="https://bob.no"
                          >
                            Klikk om du ikke blir sendt videre.
                          </Anchor>
                        </Grid>
                      </>
                        // <>
                        //   {isAuthenticated && (
                        //   <>
                        //     <Grid item xs={12}>
                        //       <Typography fontWeight="bold" size="large-2" color="violet">
                        //         {`${t('Hei')}!`}
                        //       </Typography>
                        //     </Grid>
                        //     <Grid item xs={12}>
                        //       <Typography color="violet">{userName}</Typography>
                        //     </Grid>
                        //   </>
                        //       )}
                        //   {shouldDisplayMemberInfo() && (
                        //   <Grid item xs={12}>
                        //     <MemberInfoCard>
                        //       <Grid container>
                        //         <Grid xs={6}>{`${t('Medlemsnummer')}:`}</Grid>
                        //         <Grid xs={6}>{memberNumber}</Grid>
                        //         <Grid xs={6}>{`${t('Ansiennitet fra')}:`}</Grid>
                        //         <Grid xs={6}>{getFormattedSeniorityDate()}</Grid>
                        //       </Grid>
                        //     </MemberInfoCard>
                        //   </Grid>
                        //       )}
                        //   {!isAuthenticated && (
                        //   <>
                        //     <Grid item xs={12}>
                        //       <Grid container spacing={4}>
                        //         <Grid item xs={12}>
                        //           <Grid container alignItems="center" justifyContent="center">
                        //             <Button variant="tertiary" onClick={handleLogin}>
                        //               {t('Logg inn')}
                        //             </Button>
                        //           </Grid>
                        //         </Grid>
                        //         <Grid item xs={12}>
                        //           <Grid container alignItems="center" justifyContent="center">
                        //             <VippsCheckoutButton />
                        //           </Grid>
                        //         </Grid>
                        //       </Grid>
                        //     </Grid>
                        //   </>
                        //       )}
                        // </>
                    )}
          </MobileContainer>
        </Grid>
        <Grid item xs={12}>
          <DesktopContainer container spacing={4}>
            {/* {loading ? ( */}
            {/*  <Grid container justifyContent="center"> */}
            {/*    <ProgressIndicator size="xx-large" /> */}
            {/*  </Grid> */}
            {/* ) : ( */}
            <Grid xs={12}>
              <Grid container justifyContent="space-between">
                <Grid xs={6}>
                  <Grid container spacing={4}>
                    <Grid xs={12} item>
                      <Typography component="h1" fontWeight="bold" size="xxx-large" color="violet">
                        {isAuthenticated ? `${t('Hei')}, ${userName}!` : `${t('Velkommen')}!`}
                      </Typography>
                    </Grid>
                    {/* <Grid xs={12} item> */}
                    {/*  <UmbracoContent>{parse(welcomeText)}</UmbracoContent> */}
                    {/* </Grid> */}
                    <Grid xs={12} item>
                      <Typography size="large">
                        Vi legger om systemene våre og denne siden er satt
                        ut av drift som følge av dette.
                      </Typography>
                    </Grid>
                    <Grid xs={12} item>
                      <Typography size="large">
                        Om du har lastet ned MittBOB-appen anbefaler vi deg å slette denne nå.
                      </Typography>
                    </Grid>
                    <Grid xs={12} item>
                      <Typography>
                        Vi sender deg videre til informasjonssidene om...{" "}
                        <span id="counter-redirect">10</span>
                      </Typography>
                    </Grid>                  
                    <Grid xs={12} item>
                      <Anchor
                        href="https://bob.no"
                      >
                        Klikk om du ikke blir sendt videre.
                      </Anchor>
                    </Grid>
                    {/* <Grid container item> */}
                    {/*  <Grid xs={4} item> */}
                    {/*    {getMemberButton()} */}
                    {/*  </Grid> */}
                    {/* </Grid> */}
                  </Grid>
                </Grid>
                {/* <Grid xs={3}> */}
                {/*  <Grid item xs={12}> */}
                {/*    <VippsCheckout /> */}
                {/*  </Grid> */}
                {/* </Grid> */}
                {/* <Grid xs={4}> */}
                {/*  {shouldDisplayMemberInfo() && ( */}
                {/*    <MemberInfoCard> */}
                {/*      <Grid container> */}
                {/*        <Grid xs={6}>{`${t('Medlemsnummer')}:`}</Grid> */}
                {/*        <Grid xs={6}>{memberNumber}</Grid> */}
                {/*        <Grid xs={6}>{`${t('Ansiennitet fra')}:`}</Grid> */}
                {/*        <Grid xs={6}>{getFormattedSeniorityDate()}</Grid> */}
                {/*      </Grid> */}
                {/*    </MemberInfoCard> */}
                {/*  )} */}
                {/* </Grid> */}
              </Grid>
            </Grid>
            {/* )} */}
          </DesktopContainer>
        </Grid>
        {isAuthenticated && (
        <Grid item xs={12}>
          <Grid container justifyContent="flex-end">
            <Grid item xs={12} md={8}>
              <ButtonsContainer container justifyContent="flex-end">
                <Grid item xs={12} md={3}>
                  <ShortcutAlignEnd container>
                    <Grid item>
                      <ShortcutButton
                        disabled={!isAuthenticated}
                        iconName="DocumentOutlined"
                                                // showGreenDot
                                                // number={11}
                                                // lowerRightIcon={<CityIcon />}
                        label={t('Faktura')}
                        data-path={PATHS.INVOICES}
                        onClick={handleClick}
                      />
                    </Grid>
                  </ShortcutAlignEnd>
                </Grid>
                <Grid item xs={12} md={3}>
                  <ShortcutAlignStart container>
                    <Grid item>
                      <ShortcutButton
                        disabled={!isAuthenticated}
                        iconName="PiggyBankOutlined"
                        label={t('Fordeler')}
                        data-path={PATHS.BENEFITS}
                        onClick={handleClick}
                      />
                    </Grid>
                  </ShortcutAlignStart>
                </Grid>
                {(isBoardPortalUser() || isOwnerPortalUser()) && (
                <Grid item xs={12} md={3}>
                  <ShortcutAlignEnd container>
                    <Grid item>
                      <ShortcutButton
                        disabled={!isAuthenticated}
                        iconName="HouseOutlined"
                        label={t('Årsmøte')}
                        data-href={config.minSideUrl}
                        onClick={handleExternalClick}
                      />
                    </Grid>
                  </ShortcutAlignEnd>
                </Grid>
                                )}

                {isBoardPortalUser() && (
                <Grid item xs={12} md={3}>
                  <ShortcutAlignStart container>
                    <Grid item>
                      <ShortcutButton
                        disabled={!isAuthenticated}
                        iconName="BoardPortalOutlined"
                        label={t('Styreportal')}
                        data-href={config.boardPortalUrl}
                        onClick={handleExternalClick}
                      />
                    </Grid>
                  </ShortcutAlignStart>
                </Grid>
                                )}
                <SpacingForScrollBugBecauseOfBottomNav item xs={12} md={3} />
              </ButtonsContainer>
            </Grid>
          </Grid>
        </Grid>
            )}
      </Container>
    );
};

export default Home;
