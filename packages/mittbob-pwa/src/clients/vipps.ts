import { IVippsEcommPayment, IVippsOrderDetails } from "./Vipps/types";

export const initVippsPayment = async (inputBody: any): Promise<IVippsEcommPayment> => {
  return fetch('https://dev-api.bob.no/functions1/VippsInitPayment',
  {
    headers: {
      'Content-Type': 'application/json'
    },
      method: 'POST',
      body: JSON.stringify(inputBody),
  })
  .then(function(res) {
      return res.json();
  });  
};

export const getOrderDetails= async (orderId: string): Promise<IVippsOrderDetails>  => {  
  return fetch(`https://dev-api.bob.no/functions1/order/${orderId}/userInfo`,
  {
    method: 'GET',
  })
  .then(function(res) {
      return res.json();
  })
};
