/* Handles the actual preemption process for an aparatment with ID */
import React, { useEffect } from 'react';
import { Switch, useHistory, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { Grid } from '@bob/core-components';
import { push } from "connected-react-router";
import Preview from './preemption/Preview';
import ContactInfo from './preemption/ContactInfo';
import Proof from './preemption/Proof';
import Summary from './preemption/Summary';
import BankId from './preemption/BankId';
import Overview from './preemption/Overview';
import Success from './preemption/Success';
import RouteWithSubRoutes from '../router/RouteWithSubRoutes';
import NavigationHeader from '../components/atomic/NavigationHeader';
import { Container } from './preemption/preemption.styles';
import { RouteShape } from '../router/helpers';
import InvalidMembership from './preemption/InvalidMembership';
import { init } from '../redux/modules/ui/preemption/shared/actions';
import { IProps } from './preemption/preemption.types';
import PATHS from '../router/paths';
import { useFeatureFlags } from '../app/helpers';

/*
const getTitleAndPaths = (pathname, id, t) => {
  const stages = {
    PREEMPTION: PATHS.PREEMPTION.replace(':id', id),
    PREEMPTION_BANK_ID: PATHS.PREEMPTION_BANK_ID.replace(':id', id),
    PREEMPTION_CONTACT_INFO: PATHS.PREEMPTION_CONTACT_INFO.replace(':id', id),
    PREEMPTION_PROOF: PATHS.PREEMPTION_PROOF.replace(':id', id),
    PREEMPTION_SUCCESS: PATHS.PREEMPTION_SUCCESS.replace(':id', id),
  };

  let nextButtonTitle = t('Neste');
  let backButtonTitle = t('Avbryt');
  let backButtonPath = '';
  let nextButtonPath = '';

  switch (pathname) {
    case stages.PREEMPTION:
      {
        nextButtonTitle = t('Sjekk din kontaktinfo');
        nextButtonPath = stages.PREEMPTION_CONTACT_INFO;
      }
      break;
    // case stages.PREEMPTION_BANK_ID:
    //   console.log('PREEMPTION_BANK_ID');
    //   break;
    case stages.PREEMPTION_CONTACT_INFO:
      console.log('PREEMPTION_CONTACT_INFO');
      break;
    // case stages.PREEMPTION_PROOF:
    //   console.log('PREEMPTION_PROOF');
    //   break;
    // case stages.PREEMPTION_SUCCESS:
    //   console.log('PREEMPTION_SUCCESS');
    //   break;
    default:
      throw new Error('Pathname not supported');
  }
  return [nextButtonTitle, backButtonTitle, nextButtonPath, backButtonPath];
};*/

const Preemption = ({ routes }: IProps) => {
  const { id } = useParams();
  const { t } = useTranslation();
  // const pathname = useSelector((state: RootState) => state.router.location.pathname);
  const dispatch = useDispatch();
  const isMembershipValid = true; // TODO: Fetch from API
  const history = useHistory();
  const { findHome } = useFeatureFlags();


  if (!id) throw new Error('Id missing in params');

  useEffect(() => {
    dispatch(init({ preemptionId: id }));
  }, [dispatch, id]);

  const handleNavigationHeaderClick = () => {
    history.goBack();
  };
  if (!findHome) {
    dispatch(push(PATHS.HOME))
  }
  return (
    <NavigationHeader
      title={t('Interessert i forkjøp')}
      onClick={handleNavigationHeaderClick}
      backButtonTitle={t('Tilbake')}
    >
      <Container>
        <Grid container spacing={2}>
          <Switch>
            {!isMembershipValid && <RouteWithSubRoutes path="*" component={InvalidMembership} />}
            {routes.map(route => (
              <RouteWithSubRoutes key={route.path} {...route} />
            ))}
          </Switch>
        </Grid>
      </Container>
    </NavigationHeader>
  );
};

Preemption.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.shape(RouteShape)).isRequired,
};

Preemption.Pages = {
  BankId,
  ContactInfo,
  Overview,
  Preview,
  Proof,
  Success,
  Summary
};

export default Preemption;
