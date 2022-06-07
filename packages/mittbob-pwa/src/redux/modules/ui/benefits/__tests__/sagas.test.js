import { testSaga } from 'redux-saga-test-plan';
import { setCategories } from '../actions';
import sagas, { getCategoriesFromBenefits } from '../sagas';

describe('modules/ui/benefits/sagas', () => {
  it('default', () => {
    testSaga(sagas)
      .next()
      .next()
      .isDone();
  });

  it.each([
    {
      payload: {
        umbracoProperty: 'memberBenefits',
        json: {
          _embedded: {
            content: [
              {
                props: { category: { value: ['Familie', 'Venner'] } },
              },
              {
                props: { category: { value: ['Venner'] } },
              },
            ],
          },
        },
      },
      categories: {
        Familie: 1,
        Venner: 2,
      },
    },
    {
      payload: {
        umbracoProperty: 'somethingElse',
        json: {},
      },
    },
  ])('getCategoriesFromBenefits', ({ payload, categories }) => {
    const saga = testSaga(getCategoriesFromBenefits, { payload });

    if (categories) saga.next().put(setCategories(categories));

    saga.next().isDone();
  });
});
