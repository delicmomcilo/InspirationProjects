import { TFunction } from 'i18next';
import validate from '../../../validate';
import { MemberData } from '../types';

export default (data: MemberData, translation: TFunction) =>
  validate(data, {
    birthDate: function(value: any) {
      if (!!value) {
        return {
          format: {
            pattern: /^([0-2][0-9]|(3)[0-1])(.)(((0)[0-9])|((1)[0-2]))(.)\d{4}$/,
            message: translation('Fødselsdato er på feil format'),
          },
        };
      }
      return {
        presence: {
          allowEmpty: false,
          message: translation('Fødselsdato må være satt'),
        },
      };
    },
    postCode: {
      presence: {
        allowEmpty: false,
        message: translation('Postnummer må være satt'),
      },
      length: {
        is: 4,
        message: translation('Postnummer må bestå av fire tall'),
      },
    },
    address: {
      presence: {
        allowEmpty: false,
        message: translation('Addresse må være satt'),
      },
    },
    firstName: {
      presence: {
        allowEmpty: false,
        message: translation('Fornavn må være satt'),
      },
    },
    lastName: {
      presence: {
        allowEmpty: false,
        message: translation('Etternavn må være satt'),
      },
    },
    email: {
      presence: {
        allowEmpty: false,
        message: translation('E-post må være satt'),
      },
    },
    mobile: {
      length: {
        is: 8,
        message: translation('Telefonnummer må bestå av åtte tall'),
      },
      presence: {
        allowEmpty: false,
        message: translation('Telefonnummer må være satt'),
      },
    },
  });
