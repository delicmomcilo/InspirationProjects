import mobileNavigation from './mobileNavigation/translations';
import onBoardingDialog from './onBoardingDialog/translations';
import desktopNavigation from './desktopNavigation/translations';
import bankID from './bankID/translations';
import confirmContactInfoDialog from './confirmContactInfoDialog/translations';
import preferenceContent from './preferenceContent/translations';
import memberTranslations from './MemberForm/translations';

export default {
  'nb-NO': {
    ...bankID['nb-NO'],
    ...desktopNavigation['nb-NO'],
    ...mobileNavigation['nb-NO'],
    ...onBoardingDialog['nb-NO'],
    ...confirmContactInfoDialog['nb-NO'],
    ...preferenceContent['nb-NO'],
    ...memberTranslations['nb-NO'],
  },
};
