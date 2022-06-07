export interface Preemption {
  id: string;
  trialNo: number;
  clientNo: number;
  clientName: string;
  status: string;
  accept: string;
  deadline: string;
  handover: string;
  received: string;
  advertisement: string;
  calculatedDeadline: string;
  clarificationInAdvance: boolean;
  newOwnerReportedToBbl: string;
  newOwnerApproved: string;
  processingDeadline: string;
  boardApprovalDeadline: string;
  unit: {
    id: string;
    indexNo: number;
    primaryRoom: number;
    useArea: number;
    grossArea: number;
    numberOfRooms: number;
    subAreaId: number;
    subArea: string;
    area: string;
    address: string;
    zipcode: string;
    city: string;
    buildingCode: string;
    buildingType: string;
    geoLocation: string;
  };
  contact: {
    agencyNameId: number;
    agencyName: string;
    agencyPhone: string;
    agencyEmail: string;
    agentNameId: number;
    agentName: string;
    agentPhone: string;
    agentEmail: string;
    caseworkerId: number;
    caseworkerName: string;
    caseworkerPhone: string;
    caseworkerEmail: string;
  };
  viewing: {
    date: string;
    text: string;
    dateString: string;
    info: string;
    telephone: string;
    url: string;
  };
  clarificationType: 'ManagedFixedPrice' | string
  pricing: {
    askingPrice: number;
    fixedPrice: number;
    totalPrice: number;
    jointDebt: number;
    jointCosts: number;
    addedJointCost: number;
    addedJointDebt: number;
    preemptionFee: number;
  };
  seniorityRules: Array<{
    priority: number;
    designation: string;
    ruleText: string;
  }>;
}

export interface Interest {
  id: string;
  active: boolean;
  preemptionId: PreemptionId;
  nameId: string;
  registered: string;
  received: string;
  lastChanged: string;
  isFixedPrice: boolean;
}

export type PreemptionId = Preemption['id'];
export type InterestId = Interest['id'];
export type Preemptions = Record<PreemptionId, Preemption>;
export type Interests = Record<PreemptionId, Interest>;
