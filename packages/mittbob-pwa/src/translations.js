import pagesTranslations from './pages/translations';
import componentTranslations from './components/translations';

const appTranslations = {
  'nb-NO': {
    Ja: 'Ja',
    Nei: 'Nei',
    Medlem: 'Medlem',
    Faktura: 'Faktura',
    Boliger: 'Boliger',
    'Last opp': 'Last opp',
    Oppsummering: 'Oppsummering',
    Finansieringsbevis: 'Finansieringsbevis',
    Forrige: 'Forrige',
    Meg: 'Meg',
    'E-post': 'E-post',
    Passord: 'Passord',
    Bonus: 'Bonus',
    Profil: 'Profil',
    Hjem: 'Hjem',
    Avbryt: 'Avbryt',
    Senere: 'Senere',
    Lagre: 'Lagre',
    Bruk: 'Bruk',
    Kopiert: 'Kopiert',
    'Kopier lenke': 'Kopier lenke',
    'Henter bruker': 'Henter bruker',
    'Ta i bruk': 'Ta i bruk',
    'Hvis du velger å la være, vil den nye versjonen bli lastet neste gang du lukker og åpner appen igjen':
      'Hvis du velger å la være, vil den nye versjonen bli lastet neste gang du lukker og åpner appen igjen',
    'Hvis du velger å la være, vil den nye versjonen bli lastet neste gang du lukker og åpner appen igjen. Hvis du velger å la være, vil den nye versjonen bli lastet neste gang du lukker og åpner appen igjen':
      'Hvis du velger å la være, vil den nye versjonen bli lastet neste gang du lukker og åpner appen igjen. Hvis du velger å la være, vil den nye versjonen bli lastet neste gang du lukker og åpner appen igjen.',
    'Ny versjon av appen er klar': 'Ny versjon av appen er klar',
    'En ny versjon av appen er klar til bruk.': 'En ny versjon av appen er klar til bruk.',
    'Den nye versjonen bli lastet neste gang du lukker og åpner appen om du ikke tar den i bruk nå.':
      'Den nye versjonen bli lastet neste gang du lukker og åpner appen om du ikke tar den i bruk nå.',
    'Legg til på Hjem skjerm': 'Legg til på Hjem skjerm',
    WEB_APP_MESSAGE:
      'Mitt BOB støtter web apps. Legg siden til på din hjem skjerm for å bruke den med fullskjerm.',
    WEB_APP_SHARE: "1) Trykk på 'Dele' knappen.",
    WEB_APP_ADD: "2) Trykk på 'Legg til på Hjem-skjermen'",
    INSTALL_APP_MESSAGE:
      'Kopier lenken til nettsiden og åpne den i Safari-nettleseren. Følg så instruksjonene for å installere appen.',
    'Preferanser og samtykker': 'Preferanser og samtykker',
  },
};

const translations = {
  'nb-NO': {
    ...appTranslations['nb-NO'],
    ...pagesTranslations['nb-NO'],
    ...componentTranslations['nb-NO'],
  },
};

export default translations;
