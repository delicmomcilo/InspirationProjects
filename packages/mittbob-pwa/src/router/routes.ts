import Auth from 'src/pages/Auth';
import Home from 'src/pages/Home';
import Apartments, { ApartmentsPages } from 'src/pages/Apartments';
import Invoices from 'src/pages/Invoices';
import Benefits from 'src/pages/Benefits';
import Me from 'src/pages/Me';
import { colors } from '@bob/core-components';
import Preemption from 'src/pages/Preemption';
import PATHS from './paths';
import Profile from '../pages/me/Profile';
// import { isDev, isDevHosted } from '../config/helpers';
import { Routes } from './types';
import BankID from '../components/BankID';
import Help from '../pages/Help';
import PaymentCompleted from '../pages/PaymentCompleted'

const routes: Routes = [
  {
    path: PATHS.LOGIN,
    component: Auth.Login,
    browserThemeColor: (colors as { [key: string]: string }).mint60,
  },
  {
    path: PATHS.CALLBACK_AUTH0,
    component: Auth.CallbackAuth0,
  },
  {
    path: PATHS.BANK_ID_CALLBACK,
    component: BankID.Callback,
  },
  {
    path: PATHS.HELP,
    component: Help,
  },
  {
    path: PATHS.HOME,
    component: Home,
    browserThemeColor: (colors as { [key: string]: string }).mint60,
  },
  {
    path: PATHS.BENEFITS,
    component: Benefits,
  },
  {
    path: PATHS.APARTMENTS,
    component: Apartments,
    protected: true,
    routes: [
      {
        path: PATHS.APARTMENTS_INTERESTS,
        protected: true,
        component: ApartmentsPages.MyPreemptions,
      },
      {
        path: PATHS.APARTMENTS_FAVORITES,
        protected: true,
        component: ApartmentsPages.Favorites,
      },
      {
        path: PATHS.APARTMENTS, // Must be defined last in list
        protected: true,
        component: ApartmentsPages.AllPreemptions,
      },
    ],
  },
  {
    path: PATHS.PREEMPTION,
    component: Preemption,
    protected: true,
    routes: [
      {
        path: PATHS.PREEMPTION_BANK_ID,
        protected: true,
        component: Preemption.Pages.BankId,
      },
      {
        path: PATHS.PREEMPTION_CONTACT_INFO,
        protected: true,
        component: Preemption.Pages.ContactInfo,
      },
      {
        path: PATHS.PREEMPTION_OVERVIEW,
        protected: true,
        component: Preemption.Pages.Overview,
      },
      {
        path: PATHS.PREEMPTION_PROOF,
        protected: true,
        component: Preemption.Pages.Proof,
      },
      {
        path: PATHS.PREEMPTION_SUCCESS,
        protected: true,
        component: Preemption.Pages.Success,
      },
      {
        path: PATHS.PREEMPTION_SUMMARY,
        protected: true,
        component: Preemption.Pages.Summary,
      },
      {
        path: PATHS.PREEMPTION, // Must be defined last in list
        protected: true,
        component: Preemption.Pages.Preview,
      },
    ],
  },
  {
    path: PATHS.INVOICES,
    component: Invoices,
    protected: true,
    routes: [
      {
        path: PATHS.INVOICES_INVOICE,
        protected: true,
        component: Invoices.Pages.Details,
      },
    ],
  },
  {
    path: PATHS.ME,
    protected: true,
    component: Me,
    routes: [
      {
        path: PATHS.ME_PROFILE,
        protected: true,
        component: Profile,
      },
      {
        path: PATHS.ME_PREFERENCES,
        protected: true,
        component: Me.Pages.Preferences,
      },
      {
        path: PATHS.ME_THIRDPARTYINFORMATION,
        protected: true,
        component: Me.Pages.ThirdPartyInformation,
      },
    ],
  },
  {
    path: PATHS.MESSAGES,
    protected: true,
    component: (): string => 'Messages',
    routes: [],
  },
];

export default routes;
