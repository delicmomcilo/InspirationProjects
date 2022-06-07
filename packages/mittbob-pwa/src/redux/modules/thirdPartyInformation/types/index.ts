export interface ThirdPartyInformation {
  id: number;
  year: number;
  registered: string;
  unitId: string;
  unitAddress: string;
  availableForDownload: boolean;
  isRead: boolean;
  unitNo: number;
}

export type Id = ThirdPartyInformation['id'];