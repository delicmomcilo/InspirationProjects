import validate from '../../../validate';

export default (data, translation) =>
  validate(data, {
    mail: {
      email: {
        message: translation('E-post ikke riktig'),
      },
      presence: {
        allowEmpty: false,
        message: translation('E-post må være satt'),
      }
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
