import { ThirdPartyInformation } from '../../../redux/modules/thirdPartyInformation/types';

export interface IProps {
  thirdPartyInformation: ThirdPartyInformation
}

export interface IListItemAnchorStyled {
  disabled?: boolean,
  read?: boolean,
}