export default {
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
      mask: '0000000000000',
      startsWith: '',
      country: 'unknown',
    },
    {
      mask: /^\S*@?\S*$/,
    },
  ],
  dispatch: (appended, dynamicMasked, flag) => {
    const value = dynamicMasked.value + appended;
    const string = value.replace(/\d/g, '');
    return dynamicMasked.compiledMasks.find(m => {
      if (typeof m.startsWith === 'string' && (!string || string[0] === '+')) {
        return value.indexOf(m.startsWith) === 0;
      }
      if (m.startsWith === undefined && string.length > 0) {
        return m; // Returns emailmask.
      }
      return undefined;
    });
  },
};
