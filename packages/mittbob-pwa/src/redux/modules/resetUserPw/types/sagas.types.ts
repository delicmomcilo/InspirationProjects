import { watchGetPin, watchPostPassword } from '../actions';

export type GetPinAsyncPayload = ReturnType<typeof watchGetPin>;
export type PostPasswordAsyncPayload = ReturnType<typeof watchPostPassword>;

export type PinResponse = { response: Response };
