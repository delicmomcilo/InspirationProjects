import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Icon } from 'src/components';
import actions from 'src/redux/actions';
import selectors from 'src/redux/selectors';
import { Grid, Typography, Accordion } from '@bob/core-components';
import moment from 'moment';
import Skeleton from 'react-loading-skeleton';
import FavoriteButton from './preemption/FavoriteButton';
import {
  StyledCard,
  MapContainer,
  IframeMap,
  SpecialContainer,
} from './preemption/preemption.styles';
import GOOGLE from '../../config/google';
import { RootState } from '../../redux/rootState';
import RegisterInterestButton from './preemption/RegisterInterestButton';
import {useMedia} from "../../app/app.styles";

const formatNumber = (value?: number) => Number((value ?? 0).toFixed(0)).toLocaleString('nb-NO');

const getGoogleMapsUrl = (place?: string) =>
  place &&
  `${GOOGLE.MAPS.EMBED.URL}/place?q=${encodeURIComponent(place)}&key=${GOOGLE.MAPS.EMBED.KEY}`;

const TODO_UMBRACO_SENIORITY_RULES = `
Det er vedtektene for det enkelte boligselskap som bestemmer hvilken forkjøpsrett som kan
benyttes. Reglene for hvem som kan kreve forkjøpsrett på denne boligen er listet opp under
i prioritert rekkefølge.
`;

const parseDate = (date?: string) => date && moment(date).format('LL');

const PreemptionCard = ({
  disabled,
  id = '',
  loading,
  expanded,
  hideActionButton,
}: {
  disabled?: boolean;
  id?: string;
  loading?: boolean;
  expanded?: boolean;
  hideActionButton?: boolean;
}) => {
  const myPreemptions = useSelector((s: RootState) => s.preemption.allPreemptions);
  const allPreemptions = useSelector((s: RootState) => s.preemption.allPreemptions);
  const preemption = allPreemptions[id] ? allPreemptions[id] : myPreemptions[id];

  const { t } = useTranslation();
  const { unit, pricing, clientName, seniorityRules, contact, viewing, deadline } = preemption || {};
  const dispatch = useDispatch();
  const { isMobile } = useMedia();
  const toggleShowDetails = () =>
    !loading && id && dispatch(actions.ui.apartments.toggleShowDetails({ id }));
  const showDetails = useSelector(selectors.ui.apartments.showDetails(id || ''));
  const formattedDeadline = moment(deadline).format('dddd D.MMMM, hh.mm');
  const isFixedPrice = !loading && Boolean(pricing?.totalPrice);
  return (
    <Grid item xs={12}>
      <StyledCard disabled={disabled}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Grid container justifyContent="space-between">
              <Grid item xs>
                {loading ? (
                  <Skeleton />
                ) : (
                  <Typography size="large" fontWeight="bold" color="violet" gutterBottom>
                    {unit?.address}
                  </Typography>
                )}
              </Grid>
              <Grid item xs>
                {loading ? (
                  <Skeleton />
                ) : (
                  <Typography
                    size="large"
                    fontWeight="bold"
                    textAlign="right"
                    color="violet"
                    gutterBottom
                  >
                    {isFixedPrice ? formatNumber(pricing?.fixedPrice) : t('Forhåndsavklaring')}
                  </Typography>
                )}
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item sm={8} xs={12}>
                <Grid container justifyContent="space-between" alignItems="center" spacing={2}>
                  <Grid item xs={12} sm={5}>
                    <Grid container spacing={2}>
                      <Grid item xs>
                        {loading ? <Skeleton /> : <Typography>{t('P-rom')}</Typography>}
                      </Grid>
                      <Grid item xs>
                        {loading ? (
                          <Skeleton />
                        ) : (
                          <Typography color="violet" textAlign="right">
                            {`${formatNumber(unit?.primaryRoom)} m\u00B2`}
                          </Typography>
                        )}
                      </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                      <Grid item xs>
                        {loading ? <Skeleton /> : <Typography>{t('Felleskostnader')}</Typography>}
                      </Grid>
                      <Grid item xs>
                        {loading ? (
                          <Skeleton />
                        ) : (
                          <Typography color="violet" textAlign="right">
                            {formatNumber(pricing?.jointCosts)}
                          </Typography>
                        )}
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} sm={5}>
                    <Grid container spacing={2}>
                      <Grid item xs>
                        {loading ? <Skeleton /> : <Typography>{t('Fellesgjeld')}</Typography>}
                      </Grid>
                      <Grid item xs>
                        {loading ? (
                          <Skeleton />
                        ) : (
                          <Typography color="violet" textAlign="right">
                            {formatNumber(pricing?.jointDebt)}
                          </Typography>
                        )}
                      </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                      <Grid item xs>
                        {loading ? <Skeleton /> : <Typography>{t('Totalpris')}</Typography>}
                      </Grid>
                      <Grid item xs>
                        {loading ? (
                          <Skeleton />
                        ) : (
                          <Typography color="violet" textAlign="right">
                            {isFixedPrice ? formatNumber(pricing?.totalPrice) : t('Ikke fastsatt')}
                          </Typography>
                        )}
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid container alignItems="center" spacing={2}>
                  <Grid item sm={12} xs={12}>
                    <Grid container>
                      <Grid item sm={4} xs={12}>
                        {loading ? <Skeleton /> : <Typography>{t('Meldefrist')}</Typography>}
                      </Grid>
                      <Grid item sm={8} xs={12}>
                        {loading ? (
                          <Skeleton />
                        ) : (
                          <Typography gutterBottom color="violet" textAlign="right">
                            {formattedDeadline}
                          </Typography>
                        )}
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              {!hideActionButton && (
                <Grid item xs={12} sm={4}>
                  <Grid container justifyContent="flex-end" spacing={0}>
                    <Grid item>
                      {loading ? <Skeleton /> : <RegisterInterestButton id={id || ''} />}
                    </Grid>
                  </Grid>
                </Grid>
              )}
            </Grid>
          </Grid>
          {!loading && (
            <Grid item xs={12}>
              <Accordion open={expanded || showDetails} noCard noButton>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <MapContainer>
                      <IframeMap src={getGoogleMapsUrl(unit?.geoLocation)} />
                    </MapContainer>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Grid container direction="column" spacing={1}>
                      <Grid item xs>
                        <Grid container spacing={2} alignItems="center">
                          <Grid item>
                            <Icon name="Location" />
                          </Grid>
                          <Grid item xs>
                            <Typography>{clientName}</Typography>
                          </Grid>
                        </Grid>
                      </Grid>

                      <Grid item xs>
                        <Typography>{unit?.buildingType}</Typography>
                      </Grid>
                      <Grid item xs>
                        <Grid container spacing={2}>
                          <Grid item>
                            <Typography>{t('P-rom')}</Typography>
                          </Grid>
                          <Grid item>
                            <Typography color="violet" textAlign="right">
                              {`${unit?.primaryRoom ?? 0} m\u00B2`}
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item xs>
                        <Grid container spacing={2}>
                          <Grid item>
                            <Typography>{t('Opprinnelig antall rom')}</Typography>
                          </Grid>
                          <Grid item>
                            <Typography color="violet" textAlign="right">
                              {unit?.numberOfRooms}
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <Grid container spacing={2} direction="column">
                          <Grid item xs={12}>
                            <Typography color="violet">{t('Visning')}</Typography>
                            <Typography>
                              {t('Visningsholder')}: {viewing?.info}
                            </Typography>
                            <Typography>{viewing?.text}</Typography>
                            <Typography>
                              {t('Tlf')} {contact?.agentPhone}
                            </Typography>
                          </Grid>
                          <Grid item xs={12}>
                            <Typography color="violet">{t('Meglerforetak')}</Typography>
                            <Typography>{contact?.agencyName}</Typography>
                          </Grid>
                          <Grid item xs={12}>
                            <Typography color="violet">{t('Annet')}</Typography>
                            <Typography>
                              {t('Overtagelsesdato er')} {parseDate(viewing?.date)}
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Typography color="violet">{t('Ansiennitetsregler')}</Typography>
                        <Typography gutterBottom>{TODO_UMBRACO_SENIORITY_RULES}</Typography>
                        {seniorityRules?.map((rule, idx, arr) => (
                          <Typography gutterBottom={idx === arr.length - 1}>
                            {rule.priority}. {rule.designation || rule.ruleText}
                          </Typography>
                        ))}
                        <Typography>
                          {t('Kontakt saksbehandler')} {contact?.caseworkerName}
                        </Typography>
                        <Typography> {viewing?.text}</Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Accordion>
            </Grid>
          )}
          <Grid item xs={12}>
            <SpecialContainer>
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={6} sm={3}>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item>{loading ? <Skeleton /> : <Icon name="Location" />}</Grid>
                    <Grid item>
                      {loading ? <Skeleton /> : <Typography>{unit?.subArea}</Typography>}
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={4} sm={3}>
                  {loading ? <Skeleton /> : <Typography>{unit?.buildingType}</Typography>}
                </Grid>
                <Grid item xs={6} sm={3}>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item>
                      {loading ? <Skeleton width="2rem" /> : <FavoriteButton id={id || ''} />}
                    </Grid>
                  </Grid>
                </Grid>
                {!expanded && (
                  <Grid item xs={6} sm={3} container justifyContent={isMobile ? 'flex-start' : 'flex-end'}>
                    {loading ? (
                      <Skeleton />
                    ) : (
                      <Button variant="tertiary" onClick={toggleShowDetails}>
                        {showDetails ? t('Lukk detaljer') : t('Se detaljer')}
                      </Button>
                    )}
                  </Grid>
                )}
              </Grid>
            </SpecialContainer>
          </Grid>
        </Grid>
      </StyledCard>
    </Grid>
  );
};

export default PreemptionCard;
