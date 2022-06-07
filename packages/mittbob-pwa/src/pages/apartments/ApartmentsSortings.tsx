import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Button } from 'src/components';
import selectors from 'src/redux/selectors';
import { SORT_ORDER_DESC, SORT_ORDER_ASC } from 'src/redux/modules/ui/apartments/constants';
import { ARROW_DIRECTION, ARROW_POSITION } from 'src/components/atomic/button/constants';
import actions from 'src/redux/actions';
import { Grid } from '@bob/core-components';

const getOppositeOrder = (order: typeof SORT_ORDER_ASC | typeof SORT_ORDER_DESC) => 
  (order === SORT_ORDER_DESC ? SORT_ORDER_ASC : SORT_ORDER_DESC);

const ApartmentsSortings: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const activeSorting = useSelector(selectors.ui.apartments.activeSorting);
  const possibleSortings = useSelector(selectors.ui.apartments.possibleSortings);

  const arrowDirection =
    activeSorting.order === SORT_ORDER_DESC ? ARROW_DIRECTION.DOWN : ARROW_DIRECTION.UP;

  const handleClick = (field: string) => () =>
    dispatch(
      actions.ui.apartments.setActiveSorting({
        sorting: {
          field,
          order:
            activeSorting.field === field ? getOppositeOrder(activeSorting.order) : SORT_ORDER_ASC,
          selector: possibleSortings[field],
        },
      }),
    );

  return (
    <Grid container justifyContent="space-around">
      {Object.keys(possibleSortings).map(field => (
        <Grid item key={field}>
          <Button
            className="bob-core-components-typography__regular--medium-1--violet"
            variant="septenary"
            arrowDirection={arrowDirection}
            arrowPosition={ARROW_POSITION.LEFT}
            showArrow={activeSorting.field === field}
            onClick={handleClick(field)}
          >
            {t(field)}
          </Button>
        </Grid>
      ))}
    </Grid>
  );
};

export default ApartmentsSortings;
