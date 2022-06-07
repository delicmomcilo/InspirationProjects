import { TFunction } from 'i18next';
import validate from '../../../validate/index';
import { Errors } from '../../../redux/modules/ui/preemption/summary/types/actions';

export default (data: {bindingContractChecked: boolean, seniorityChecked: boolean}, translation: TFunction): Errors =>
  validate(data, {
    bindingContractChecked: {
      isBooleanTrue: {
        message: translation('Du må være enig i betingelsene for å fortsette'),
      },
    },
    seniorityChecked: {
      isBooleanTrue: {
        message: translation('Du må være enig i betingelsene for å fortsette'),
      },
    }
  });
