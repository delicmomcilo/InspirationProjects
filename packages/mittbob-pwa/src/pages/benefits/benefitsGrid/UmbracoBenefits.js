import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import UmbracoBenefit from './UmbracoBenefit';

const UmbracoBenefits = React.memo(({ payload }) => {
  const { _embedded = {} } = payload;
  const content = _embedded?.content?.slice();

  const nonCampaign = [];
  const inCampaign = [];
  content.sort((a, b) => {
    if (moment(a.updateDate).isAfter(moment(b.updateDate))) return -1;
    return 1;
  });
  content.forEach(benefit => {
    const {
      props: { campaignFrom, campaignTo },
    } = benefit;
    if (
      campaignTo?.value &&
      campaignFrom?.value &&
      moment().isBetween(moment(campaignFrom.value), moment(campaignTo.value))
    ) {
      inCampaign.push(benefit);
    } else nonCampaign.push(benefit);
  });
  return [...inCampaign, ...nonCampaign].map(benefit => (
    <UmbracoBenefit key={benefit.id} benefit={benefit} />
  ));
});

UmbracoBenefits.propTypes = {
  payload: PropTypes.shape({
    _embedded: PropTypes.shape({ content: PropTypes.array }),
  }).isRequired,
};

export default UmbracoBenefits;
