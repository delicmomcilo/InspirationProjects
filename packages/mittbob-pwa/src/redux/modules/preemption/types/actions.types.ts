import * as types from '.';

export type Preemptions = { preemptions: types.Preemptions };
export type Interests = { interests: types.Interests };
export type Error = { error: AnyError };
export type Id = { id: types.PreemptionId};
export type InterestId = Id & { interestId: types.InterestId };
export type PostInterestPayload = Id & { data?: { files?: File[], bankIdToken?: string}}
// TODO: Define filter types
export type Filters = { filters: any }; // eslint-disable-line @typescript-eslint/no-explicit-any
