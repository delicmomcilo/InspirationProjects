export interface Errors {
  email: ErrorMessage;
  firstName: ErrorMessage;
  lastName: ErrorMessage;
  mobile: ErrorMessage;
  postCode: ErrorMessage;
  birthDate: ErrorMessage;
  address: ErrorMessage;
}

interface ErrorMessage {
  message: string;
}

export interface MemberData {
  email: string;
  firstName: string;
  lastName: string;
  mobile: string;
  postCode: string;
  birthDate: string;
  address: string;
  postalAddress: string;
}
