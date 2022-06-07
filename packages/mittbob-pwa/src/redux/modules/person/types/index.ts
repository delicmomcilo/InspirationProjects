import { PreemptionId } from '../../preemption/types';

export type Seniority = Partial<{
  seniorityDays: number;
  seniorityDate: string;
}>;

export type Configuration = Partial<{
  username: string;
  frontPageWidgets: Record<string, unknown>;
  favoritePreemptions: Record<PreemptionId, boolean>;
  savedSearch: string;
  infoPrompts: {
    onboarded: string;
    confirmContactInfo: string;
    showIntroTutorial: boolean;
    showPreemptionInfo: boolean;
  };
  communicationPreferences: {
    acceptMembershipInformationByPush?: boolean,
    acceptMembershipInformationByEmail?: boolean,
    acceptMembershipInformationBySMS?: boolean,
    acceptMembershipOfferCommunicationByPush?: boolean,
    acceptMembershipOfferCommunicationByEmail?: boolean,
    acceptMembershipOfferCommunicationBySMS?: boolean
  }
}>;

export interface Person {
  nameId: string;
  memberNumber: number;
  bblId: string;
  lastUpdatedHf: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  email: string;
  mobile: string;
  acceptElectronicCommunication: number;
  acceptElectronicCommunicationChangedDate: string;
  bblIdMobile: string;
  bblIdEmail: null | string;
  address: {
    line1: string;
    line2: null | string;
    line3: null | string;
    zip: string;
    city: string;
    country: string;
    countryCode: string;
  };
  magazineCode: string;
  numberOfMagazines: number;
  gender: string;
  lastLoggedIn: string;
  iamMailVerified: boolean;
  iamMobileVerified: boolean;
}
