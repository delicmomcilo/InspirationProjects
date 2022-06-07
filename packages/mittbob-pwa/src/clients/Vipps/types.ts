
export interface IVippsEcommPayment {
    orderId: string,
    url: string
}
   
export interface IVippsOrder {
    orderId: string,
    sub: string,
    transactionLogHistory: any ,
    transactionSummary: TransactionSummary
} 

export interface IVippsOrderDetails{
    orderResponse: IVippsOrder;
    userInfo: IVippsUserInfo;
}

export interface Campaign {
    campaignPrice: number;
    start: Date;
    end: Date;
}


export interface TransactionSummary {
    bankIdentificationNumber: number;
    capturedAmount: number;
    refundedAmount: number;
    remainingAmountToCapture: number;
    remainingAmountToRefund: number;

}


export interface Address {
    address_type: string;
    country: string;
    formatted: string;
    postal_code: string;
    region: string;
    street_address: string;
}

export interface IVippsUserInfo {
    address: Address;
    email: string;
    email_verified: boolean;
    family_name: string;
    given_name: string;
    name: string;
    other_addresses: any[];
    sid: string;
    sub: string;
}