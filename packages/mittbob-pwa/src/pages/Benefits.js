import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import BenefitsGrid from './benefits/BenefitsGrid';
import NavigationHeader from '../components/atomic/NavigationHeader';
import CategoryFilter from './benefits/CategoryFilter';
import { Container } from './benefits/benefits.styles';

const Benefits = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const goBack = () => dispatch(push('/'));

  return (
    <NavigationHeader
      title={t('Fordeler')}
      onClick={goBack}
      backButtonTitle={t('Tilbake')}
    >
      <Container>
        <CategoryFilter />
        <BenefitsGrid />
      </Container>
    </NavigationHeader>
  );
};

export default Benefits;
