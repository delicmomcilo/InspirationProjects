import apartmentsTranslations from './apartments/translations';
import homeTranslations from './home/translations';
import helpTranslations from './help/translations';
import invoicesTranslations from './invoices/translations';
import loginTranslations from './auth/translations';
import benefitsTranslations from './benefits/translations';
import meTranslations from './me/translations';
import preemptionTranslations from './preemption/translations';

export default {
  'nb-NO': {
    ...apartmentsTranslations['nb-NO'],
    ...helpTranslations['nb-NO'],
    ...homeTranslations['nb-NO'],
    ...invoicesTranslations['nb-NO'],
    ...loginTranslations['nb-NO'],
    ...benefitsTranslations['nb-NO'],
    ...meTranslations['nb-NO'],
    ...preemptionTranslations['nb-NO'],
  },
};
