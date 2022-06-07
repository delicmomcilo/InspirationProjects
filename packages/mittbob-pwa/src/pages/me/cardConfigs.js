import PATHS from '../../router/paths';

export const structureMyHome = (
  t,
  logOutFunc,
  boardPortalFunc,
  boardPortalUrl,
  hasBoardRole,
  handleMyApartmentClick,
  displayThirdPartyInformation
) => {
  const links = [
    { text: t('Min profil'), url: PATHS.ME_PROFILE },
    { text: t('Min bolig'), onClick: handleMyApartmentClick },
    { text: t('Mine preferanser'), url: PATHS.ME_PREFERENCES },
  ];

  if (displayThirdPartyInformation) {
    links.push({
      text: t('Ligningsoppgaver'),
      url: PATHS.ME_THIRDPARTYINFORMATION,
    });
  }

  if (hasBoardRole) {
    links.push({
      text: t('Styreportal'),
      onClick: boardPortalFunc,
      url: boardPortalUrl,
    })
  }

  links.push({ text: t('Logg ut'), onClick: logOutFunc })

  return {
    linkList: {
      title: t('Meg'),
      links,
    },
    image: 'kitchen',
  };
};

export const structureFindHome = (t, handleSavedSearch, handleFavorites, handleMyPreemptions) => {
  return {
    linkList: {
      title: t('Finn bolig'),
      links: [
        { text: t('Lagrede søk'), onClick: handleSavedSearch },
        { text: t('Favoritter'), onClick: handleFavorites },
        { text: t('Mine meldte forkjøp'), onClick: handleMyPreemptions },
      ],
    },
    image: 'sofa',
  };
};

export const structureMembership = (t) => {
  return {
    linkList: {
      title: '',
      links: [
        { text: t('Fordeler'), url: PATHS.BENEFITS },
      ],
    },
    title: 'Medlem',
    desc:
      'Et medlemskap i BOB gir deg gode fordeler, enten du eier eller leier en bolig. Vi jobber for å skaffe våre medlemmer de beste fordelene og betingelsene, slik at du kan gjøre litt mer for litt mindre',
  };
};

export const linkListQuickInfo = (
  t,
  preemtionFunc,
  memberConditionsFunc,
  privDeclFunc,
  contactInfoFunc,
  faqFunc,
  termsAndConceptsFunc,
) => {
  return {
    title: t('Kort fortalt'),
    links: [
      { text: t('Kontakt oss'), onClick: contactInfoFunc },
      { text: t('Spørsmål og svar'), onClick: faqFunc },
      { text: t('Ord og begreper'), onClick: termsAndConceptsFunc },
      { text: t('Om forkjøpsrett'), onClick: preemtionFunc },
      { text: t('Medlemsvilkår'), onClick: memberConditionsFunc },
      { text: t('Personvernerklæring'), onClick: privDeclFunc },
    ],
  };
};
