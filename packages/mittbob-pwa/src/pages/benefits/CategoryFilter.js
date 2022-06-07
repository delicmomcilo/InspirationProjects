import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { setFilter } from '../../redux/modules/ui/benefits/actions';
import { Container } from './categoryFilter/categoryFilter.styles';
import { Button } from '../../components/atomic';

const CategoryFilter = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { categories, filter } = useSelector(state => state.ui.benefits);

  const handleClick = category => () => dispatch(setFilter(category));
  const getVariant = category =>
    category === filter ? 'primary' : 'secondary';

  return (
    <Container>
      <Button onClick={handleClick('')} variant={getVariant('')}>
        {t('Alle fordeler')}
      </Button>
      {Object.keys(categories)
        .sort()
        .map(category => (
          <React.Fragment key={category}>
            <Button
              onClick={handleClick(category)}
              variant={getVariant(category)}
            >
              {t(category)}
            </Button>
          </React.Fragment>
        ))}
    </Container>
  );
};

export default CategoryFilter;
