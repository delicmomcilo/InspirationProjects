import { TFunction } from 'i18next';
import validate from '../../../../validate/index';
import { Errors } from '../../../../redux/modules/ui/preemption/contactInfo/types/actions';

export default (data: {name: string, mobile: string}, translation: TFunction): Errors =>
  validate(data, {
    name: {
      presence: {
        allowEmpty: false,
        message: translation('Navn må være satt'),
      },
    },
    mobile: {
      presence: {
        allowEmpty: false,
        message: translation('Mobilnummer må være satt'),
      },
    },
  });
