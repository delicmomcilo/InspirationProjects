import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router';
import { watchSignOut as wSignOutAuth0 } from '../redux/modules/auth0/actions';
import Preferences from './me/Preferences';
import {
  Component,
  CardWrapper,
  StyledCardLinkList,
  FlatCardWrapper,
} from './me/me.styles';
import NavigationHeader from '../components/atomic/NavigationHeader';
import Profile from './me/Profile';
import { getAllUmbracos, Routes } from './me/helpers';
import { RouteShape } from '../router/helpers';
import Contact from './me/Contact';
import PreEmption from './me/PreEmption';
import PrivacyDeclaration from './me/PrivacyDeclaration';
import config from '../config';
import { HF_ROLES } from '../redux/modules/person/constants';
import MemberConditions from './me/MemberConditions';
import FAQ from './me/FAQ';
import NotImplementedYet from './me/NotImplementedYet';
import TermsAndConcepts from './me/TermsAndConcepts';
import {
  UMBRACO_COMING_SOON_PROPERTIES,
  UMBRACO_PROPERTIES,
} from '../redux/modules/umbraco/constants';
import { toggleModal } from '../redux/modules/ui/me/actions';
import ImageCard from '../components/ImageCard';
import {
  structureFindHome,
  structureMembership,
  structureMyHome,
  linkListQuickInfo,
} from './me/cardConfigs';
import { setComingSoonModal } from '../redux/modules/ui/app/actions';
import PATHS from '../router/paths';
import { useFeatureFlags } from '../app/helpers';
import ThirdPartyInformation from "./me/ThirdPartyInformation";

const Me = ({ routes, match }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { thirdPartyInformation: thirdPartyInformationFlag } = useFeatureFlags();
  const userAuth0 = useSelector((store) => store.auth0.user);
  const handleLogout = () => {
    dispatch(wSignOutAuth0());
  };
 
  const handleBack = () => {
    dispatch(push(PATHS.HOME));
  };
  const comingSoonUmbraco = useSelector(
    ({ umbraco }) => umbraco[UMBRACO_PROPERTIES.COMING_SOON] || {},
  );
  const isBoardPortalUser = () => !!userAuth0?.role?.includes(HF_ROLES.BOARD_PORTAL_USER);
  const handleBoardPortalClick = e => {
    window.open(e.currentTarget.getAttribute('data-href'), '_blank');
  };
  useEffect(() => {
    getAllUmbracos(dispatch);
  }, [dispatch]);
  const openModal = useSelector(state => state.ui.me.reducer.openModal);
  const handleComingSoon = key => () => {
    const found = comingSoonUmbraco?._embedded?.content?.find(u => u.name === key);
    if (!found) return;
    dispatch(
      setComingSoonModal({
        open: !!found,
        text: found?.props?.text?.value,
        title: found?.props?.title?.value,
      }),
    );
  };

  if (!match.isExact) return <Routes routes={routes} />;

  return (
    <NavigationHeader title={t('Meg')} onClick={handleBack} backButtonTitle={t('Tilbake')}>
      <Component>
        <CardWrapper>
          <ImageCard
            variant="rightOverlap"
            structure={structureMyHome(
              t,
              handleLogout,
              handleBoardPortalClick,
              config.boardPortalUrl,
              isBoardPortalUser,
              handleComingSoon(UMBRACO_COMING_SOON_PROPERTIES.MY_APARTMENT),
              thirdPartyInformationFlag
            )}
          />
        </CardWrapper>
        <FlatCardWrapper>
          <ImageCard variant="splitScreenFlat" structure={structureMembership(t)} />
        </FlatCardWrapper>
        <CardWrapper>
          <ImageCard
            variant="leftOverlap"
            structure={structureFindHome(
              t,
              handleComingSoon(UMBRACO_COMING_SOON_PROPERTIES.SAVED_SEARCH),
              handleComingSoon(UMBRACO_COMING_SOON_PROPERTIES.FAVORITES),
              handleComingSoon(UMBRACO_COMING_SOON_PROPERTIES.MY_PRE_EMPTIONS),
            )}
          />
        </CardWrapper>

        <CardWrapper>
          <StyledCardLinkList
            linkList={linkListQuickInfo(
              t,
              () => dispatch(toggleModal(UMBRACO_PROPERTIES.PRE_EMPTION_INFO)),
              () => dispatch(toggleModal(UMBRACO_PROPERTIES.MEMBER_CONDITIONS)),
              () => dispatch(toggleModal(UMBRACO_PROPERTIES.PRIVACY_DECLARATION)),
              () => dispatch(toggleModal(UMBRACO_PROPERTIES.CONTACT_INFO)),
              () => dispatch(toggleModal(UMBRACO_PROPERTIES.FAQ)),
              () => dispatch(toggleModal(UMBRACO_PROPERTIES.TERMS_AND_CONCEPTS)),
            )}
          />
        </CardWrapper>
        <Contact
          modal
          open={openModal === UMBRACO_PROPERTIES.CONTACT_INFO}
          onClose={() => dispatch(toggleModal(''))}
        />
        <PreEmption
          modal
          open={openModal === UMBRACO_PROPERTIES.PRE_EMPTION_INFO}
          onClose={() => dispatch(toggleModal(''))}
        />
        <PrivacyDeclaration
          modal
          open={openModal === UMBRACO_PROPERTIES.PRIVACY_DECLARATION}
          onClose={() => dispatch(toggleModal(''))}
        />
        <MemberConditions
          modal
          open={openModal === UMBRACO_PROPERTIES.MEMBER_CONDITIONS}
          onClose={() => dispatch(toggleModal(''))}
        />
        <TermsAndConcepts
          modal
          open={openModal === UMBRACO_PROPERTIES.TERMS_AND_CONCEPTS}
          onClose={() => dispatch(toggleModal(''))}
        />
        <FAQ
          modal
          open={openModal === UMBRACO_PROPERTIES.FAQ}
          onClose={() => dispatch(toggleModal(''))}
        />
        <NotImplementedYet
          modal
          open={openModal === UMBRACO_PROPERTIES.NOT_IMPLEMENTED_YET}
          onClose={() => dispatch(toggleModal(''))}
        />
      </Component>
    </NavigationHeader>
  );
};

Me.propTypes = {
  match: PropTypes.shape({ isExact: PropTypes.bool, path: PropTypes.string }).isRequired,
  routes: PropTypes.arrayOf(PropTypes.shape(RouteShape)).isRequired,
};

Me.Pages = {
  Profile,
  Preferences,
  ThirdPartyInformation
};

export default Me;
