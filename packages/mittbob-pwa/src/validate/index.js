import validate from 'validate.js';

validate.formatters.custom = errors =>
  errors.reduce(
    (acc, error) =>
      errors.length > 0 && {
        ...acc,
        [error.attribute]: { message: error.options.message },
      },
    {},
  );

validate.validators.isValidMomentDateOfBirth = value => {
  let error;
  try {
    error = value.isValid() ? null : true;
  } catch {
    error = true;
  }
  return error;
};

validate.validators.isBooleanTrue = value => value !== true ? true : null;

export default (data, constraints, options = {}) =>
  validate(data, constraints, { format: 'custom', ...options });
