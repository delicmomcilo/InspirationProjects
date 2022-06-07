export default {
  unmask: true,
  mask: /^\+?\d*$/,
};

export const unused = {
  unmask: true,
  mask: [
    {
      mask: '{+}00 00 00 00 00',
      startsWith: '+47',
      lazy: false,
      country: 'Norway',
    },
    {
      mask: '{+}0000000000000',
      startsWith: '+',
      country: 'unknown',
    },
    {
      mask: '00000000',
      startsWith: '',
      lazy: false,
      country: 'unknown',
    },
  ],
  dispatch: (appended, dynamicMasked, flag) => {
    const value = dynamicMasked.value + appended;
    return dynamicMasked.compiledMasks.find(m => {
      return value.indexOf(m.startsWith) === 0;
    });
  },
};
