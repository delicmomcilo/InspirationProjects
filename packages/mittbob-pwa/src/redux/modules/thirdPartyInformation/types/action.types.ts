import { Id, ThirdPartyInformation } from "./index";

export type SuccessPayload = Array<ThirdPartyInformation>;
export type DownloadPayload = string;
export type Error = { error: string };
export type ThirdPartyInformationId = Id;
