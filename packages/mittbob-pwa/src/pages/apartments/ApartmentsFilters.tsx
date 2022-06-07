import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import selectors from 'src/redux/selectors';
import actions from 'src/redux/actions';
import { Button, Grid, Typography, Checklist } from '@bob/core-components';
import { FilterGrid } from './apartmentsFilters/apartmentFilters.styles';
import * as types from '../../redux/modules/ui/apartments/types';

/**
 * Wrapper for `Object.keys` to get correct type checking.
 * This does __not__ guarantee that no other keys are returned.
 */
const getKeys = <T,>(obj: T) => Object.keys(obj) as Array<keyof T>;

const ApartmentsFilters: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const possibleFilters = useSelector(selectors.ui.apartments.possibleFilters);
  const activeFilters = useSelector(selectors.ui.apartments.activeFilters);

  const handleOnChange = (category: keyof typeof activeFilters, filter: string) => (event: {
    target: { checked: boolean };
  }) => {
    const copy = new Set(activeFilters[category]);
    if (event.target.checked) copy.add(filter);
    else copy.delete(filter);
    dispatch(
      actions.ui.apartments.setActiveFilters({ filters: { ...activeFilters, [category]: copy } }),
    );
  };

  const handleOnResetFilters = () => {
    const reset = Object.keys(activeFilters).reduce(
      (acc, curr) => ({ ...acc, [curr]: new Set() }),
      {},
    ) as types.ActiveFilters;
    dispatch(
      actions.ui.apartments.setActiveFilters({ filters: reset }),
    );
  };

  const hasFilters = Object.values(activeFilters).filter(v => v.size > 0).length > 0;
  return (
    <FilterGrid container spacing={2} direction="column">
      <Grid item>
        <Grid container justifyContent="space-between">
          <Grid item>
            <Typography
              as="label"
              htmlFor="clear-filters-btn"
              color={!hasFilters ? 'light-grey' : 'violet'}
            >
              Tilbakestill filter
            </Typography>
          </Grid>
          <Grid item>
            <Button
              onClick={handleOnResetFilters}
              disabled={!hasFilters}
              variant="icon"
              id="clear-filters-btn"
              iconName="Trash"
              iconProps={{ size: 'small' }}
            />
          </Grid>
        </Grid>
      </Grid>
      {getKeys(possibleFilters).map(category => (
        <Grid item key={category}>
          <Checklist
            title={t(category)}
            checkboxes={possibleFilters[category].map((filter: string) => ({
              id: `${category}/${filter}`,
              label: filter
                .split('')
                .reduce((acc, curr, idx) =>
                  idx === 0 ? curr.toUpperCase() : `${acc}${curr.toLowerCase()}`,
                ),
              checked: activeFilters[category].has(filter),
              value: filter,
              onChange: handleOnChange(category, filter),
            }))}
          />
        </Grid>
      ))}
    </FilterGrid>
  );
};

export default ApartmentsFilters;
