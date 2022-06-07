import * as actions from '../actions';
import {ThirdPartyInformation} from "./index";

export interface State {
  allThirdPartyInformation: Array<ThirdPartyInformation>;
  downloadUrl: string;
  error?: string;
  loading: boolean;

}

export type Action =
  | ReturnType<typeof actions['get']>
  | ReturnType<typeof actions['getSuccess']>
  | ReturnType<typeof actions['getFailure']>
  | ReturnType<typeof actions['getThirdPartyInformationFile']>
  | ReturnType<typeof actions['getThirdPartyInformationFileSuccess']>
  | ReturnType<typeof actions['getThirdPartyInformationFileFailure']>
  | ReturnType<typeof actions['watchGet']>;
