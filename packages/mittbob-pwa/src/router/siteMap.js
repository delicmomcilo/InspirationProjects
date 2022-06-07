import i18n from '../i18n';

const siteMap = [
  {
    title: i18n.t('Hjem'),
    routeId: 'home',
    routes: [
      {
        title: i18n.t('Fordeler'),
        routeId: 'benefits',
        // routeId: 'member.overview',
        // routes: [
        //   {
        //     title: i18n.t('Bonus'),
        //     routeId: 'member.bonus.overview',
        //     routes: [],
        //   },
        // ],
      },
      {
        title: i18n.t('Meg'),
        routeId: 'me',
        routes: [
          {
            title: i18n.t('Profil'),
            routeId: 'me.profile',
            routes: [],
          },
          {
            title: i18n.t('Medlemskap'),
            routeId: 'me.membership',
            routes: [],
          },
          {
            title: i18n.t('Preferanser og samtykker'),
            routeId: 'me.preferences',
            routes: [],
          },
        ],
      },
      {
        title: i18n.t('Faktura'),
        routeId: 'invoices',
        routes: [
          {
            title: i18n.t('Fakturadetaljer'),
            routeId: 'invoices.invoice',
            routes: [],
          },
        ],
      },
    ],
  },
];

export default siteMap;
