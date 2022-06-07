import { v4 as uuidv4 } from 'uuid';

const id = uuidv4();

export const inputBody = (url: string) => ({
  customerInfo: {},
  merchantInfo: {
    authToken: '',
    callbackPrefix: 'https://dev-api.bob.no/functions1',
    fallBack: `${url}?orderId=${id}`,
    isApp: false,
    merchantSerialNumber: '217521',
    paymentType: 'eComm Regular Payment',
  },
  transaction: {
    amount: 30000,
    orderId: id,
    timeStamp: new Date().toISOString(),
    transactionText: 'BOB Medlemskap',
    skipLandingPage: false,
    scope: 'address name email birthDate phoneNumber',
    useExplicitCheckoutFlow: true,
  },
});