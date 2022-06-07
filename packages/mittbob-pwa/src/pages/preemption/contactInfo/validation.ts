import { TFunction } from 'i18next';
import validate from '../../../validate/index';
import { Errors } from '../../../redux/modules/ui/preemption/contactInfo/types/actions';

export default (data: {termsChecked: boolean}, translation: TFunction): Errors =>
  validate(data, {
    termsChecked: {
      isBooleanTrue: {
        message: translation('Du må være enig i betingelsene for å fortsette'),
      },
    }
  });
