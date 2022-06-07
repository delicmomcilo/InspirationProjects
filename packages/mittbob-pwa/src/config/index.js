import api from './api';
import bankId from './bankId';
import bbl from './bbl';
import featureFlags from './featureFlags';
import sw from './sw';
import auth0 from './auth0';
import umbraco from './umbraco';
import { env } from './helpers';

export { api, bankId, featureFlags, sw, umbraco };

export default {
  api,
  auth0,
  bankId,
  bbl,
  boardPortalUrl: env.REACT_APP_BOARD_PORTAL_URL || 'https://bobtest.test.bbl.no/',
  featureFlags,
  gitVersion: env.REACT_APP_GIT_SHA,
  minSideUrl: env.REACT_APP_MIN_SIDE_URL || 'https://minside.stage.bbl.no/BOBSTAGETEST/',
  sw,
  umbraco,
};
