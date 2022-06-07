import validate from '../../../../validate';

export default (data, translation) =>
  validate(data, {
    mail: {
      email: {
        message: translation('E-post ikke riktig'),
      },
      presence: {
        message: translation('E-post må være satt'),
        allowEmpty: false,
      },
    },
  });
