/* globals IMask */
/* IMask is undefined in iOS 11*/
import 'react-imask';

export default {
  unmask: true,
  pattern: 'dmY',
  lazy: false,
  mask: Date,
  format(date) {
    let day = date.getDate();
    let month = date.getMonth() + 1;
    const year = date
      .getFullYear()
      .toString()
      .substr(-2);
    if (day < 10) day = `0${day}`;
    if (month < 10) month = `0${month}`;
    return `${day}${month}${year}`;
  },
  parse(str) {
    const d = parseInt(str.substring(0, 2), 10);
    const m = parseInt(str.substring(2, 4), 10);
    const y = parseInt(str.substring(4, 6), 10);
    return new Date(y, m - 1, d);
  },
  blocks: {
    d: {
      mask: IMask.MaskedRange,
      placeholderChar: 'd',
      from: 1,
      to: 31,
      maxLength: 2,
    },
    m: {
      mask: IMask.MaskedRange,
      placeholderChar: 'm',
      from: 1,
      to: 12,
      maxLength: 2,
    },
    Y: {
      mask: '00',
      placeholderChar: 'å',
      from: 0,
      to: 99,
      maxLength: 3,
    },
  },
};
