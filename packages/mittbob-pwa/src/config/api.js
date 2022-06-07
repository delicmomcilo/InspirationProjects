import { env } from './helpers';

const baseUrl = env.REACT_APP_API_BASE_URL;
export const nodefunctions1BaseUrl = env.REACT_APP_NF1_BASE_URL;

export const featureFlagsFunctionUrl = `${baseUrl}/functions1/FeatureFlagsFunction`

export default {
  baseUrl,
  featureFlagsFunctionUrl,
  nodefunctions1BaseUrl,
  invoiceBaseUrl: `${baseUrl}/invoice/v1`,
  personBaseUrl: `${baseUrl}/person/v1`,
  preemptionBaseUrl: `${baseUrl}/preemption/v1`,
  rewardBaseUrl: `${baseUrl}/reward/v1`,
  resetUserPw: `${nodefunctions1BaseUrl}/reset-user-pw`,
  housingBaseUrl: `${baseUrl}/housing/v1`,
};
