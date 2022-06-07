import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Grid } from '../../../components/atomic';
import BenefitCard from './BenefitCard';

const UmbracoBenefit = ({ benefit = {} }) => {
  const { filter } = useSelector(state => state.ui.benefits);
  if (filter && !benefit.props.category.value.includes(filter)) return null;

  return (
    <Grid item>
      <BenefitCard {...benefit.props} />
    </Grid>
  );
};

UmbracoBenefit.propTypes = {
  benefit: PropTypes.shape({
    props: PropTypes.shape({
      logo: PropTypes.shape({
        value: PropTypes.shape({ url: PropTypes.string }),
      }),
      title: PropTypes.shape({ value: PropTypes.string }),
      textFrontpage: PropTypes.shape({ value: PropTypes.string }),
      textLandingPage: PropTypes.shape({ value: PropTypes.string }),
      callToActionText: PropTypes.shape({ value: PropTypes.string }),
      callToActionFunction: PropTypes.shape({ value: PropTypes.string }),
      callToActionUrl: PropTypes.shape({ value: PropTypes.string }),
    }),
  }).isRequired,
};

export default UmbracoBenefit;
