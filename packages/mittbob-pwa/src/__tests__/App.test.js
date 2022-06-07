import React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import '../__mocks__/matchMedia.mock'; // Import before App
import App from '../App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import createRootReducer from '../redux/rootReducer';
import { history } from '../redux/store';

const mockStore = createStore(createRootReducer(history));

const reactRedux = require('react-redux');

reactRedux.useDispatch = () => jest.fn();
reactRedux.useSelector = jest.fn(fn =>
  fn({
    ui: {
      theme: { mode: 'dark' },
      app: { featureFlags: {}, comingSoonModal: {} },
      confirmContactInfo: {}
    },
    auth: {},
    auth0: {},
    app: {},
    person: {},
    umbraco: {},
  }),
);

jest.mock('react-i18next', () => ({
  useTranslation: jest.fn(() => ({
    t: jest.fn(() => `Translated unique text ${Math.random()}`),
  })),
}));

describe('App', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should render without crashing', () => {
    const { container } = render(
      <Provider store={mockStore}>
        <App />
      </Provider>,
    );

    expect(container).toBeTruthy();
  });

  it('should not have basic accessibility issues', async () => {
    const { container } = render(
      <Provider store={mockStore}>
        <App />
      </Provider>,
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
