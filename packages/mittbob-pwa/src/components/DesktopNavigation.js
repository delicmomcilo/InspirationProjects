import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router';
import { Nav, NavWrapper } from './desktopNavigation/desktopNavigation.styles';
import { Button, Icon } from './atomic';
import PATHS from '../router/paths';
import { useFeatureFlags } from '../app/helpers';
import { watchSignIn } from '../redux/modules/auth0/actions';

const DesktopNavigation = ({ handleFindApartmentComingSoon }) => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(store => store.auth0.isAuthenticated);
  const { t } = useTranslation();
  const { findHome } = useFeatureFlags();
  const handleNavigate = ({ currentTarget }) => {
    const { path } = currentTarget.dataset;
    if (path) dispatch(push(path));
  };
  const handleFindApartment = e => {
    if (findHome) {
      const { path } = e.currentTarget.dataset;
      if (path) dispatch(push(path));
    } else {
      handleFindApartmentComingSoon(e);
    }
  };
  const handleLogin = () => {
    dispatch(watchSignIn())
  }
  return (
    <NavWrapper>
      <Link to={PATHS.HOME}>
        <Icon name="BobHorizontalLogo" size="xx-large" />
      </Link>
      <Nav>
        {!isAuthenticated ? (
          <Button
            disabled
            iconSize="large"
            iconName="ProfileOutlined"
            data-path={PATHS.LOGIN}
            variant="tertiary"
            onClick={handleLogin}
          >
            {t('Logg inn')}
          </Button>
        ) : (
          <Button
            disabled
            iconSize="large"
            iconName="ProfileOutlined"
            data-path={PATHS.ME}
            variant="tertiary"
            onClick={handleNavigate}
          >
            {t('Meg')}
          </Button>
        )}
        <Button
          disabled
          iconSize="large"
          iconName="DocumentOutlined"
          data-path={PATHS.INVOICES}
          variant="tertiary"
          onClick={handleNavigate}
        >
          {t('Faktura')}
        </Button>
        <Button
          iconSize="large"
          iconName="PiggyBankOutlined"
          data-path={PATHS.BENEFITS}
          variant="tertiary"
          onClick={handleNavigate}
          disabled
        >
          {t('Fordeler')}
        </Button>
        <Button
          iconSize="large"
          iconName="SearchOutlined"
          data-path={PATHS.APARTMENTS}
          variant="tertiary"
          onClick={handleFindApartment}
          disabled
        >
          {t('Finn bolig')}
        </Button>
        {/* <Button */}
        {/*  iconSize="large" */}
        {/*  iconName="speakingBubble" */}
        {/*  variant="tertiary" */}
        {/*  onClick={handleNavigate} */}
        {/*  disabled */}
        {/* > */}
        {/*  {t('Meldinger')} */}
        {/* </Button> */}
      </Nav>
    </NavWrapper>
  );
};

DesktopNavigation.propTypes = {
  handleFindApartmentComingSoon: PropTypes.func.isRequired,
};

export default DesktopNavigation;
