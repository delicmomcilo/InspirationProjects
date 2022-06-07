import React from 'react';
import { useFeatureFlags } from 'src/app/helpers';
import { initVippsPayment } from '../clients/vipps';
import { inputBody } from '../config/vipps';

const VippsCheckoutButton = (): JSX.Element => {
  const handleVippsEcom = async () => {
    let { url } = await initVippsPayment(inputBody(window.location.href));
    url && (window.location.href = url);
  };

  return (
    <>
      <img
        alt="Vipps"
        onClick={handleVippsEcom}
        style={{ height: '2.5rem', cursor: 'pointer' }}
        src="https://raw.githubusercontent.com/vippsas/vipps-design-guidelines/master/vipps-buttons/NO%20-%20Pay%20with%20Vipps/Rectangular%20210px/pay_with_vipps_rect_210_NO%402x.png"
      />
    </>
  );
};

const FeatureWrapper = (): JSX.Element => {
  const { vippsCheckout } = useFeatureFlags();
  if (vippsCheckout) return <VippsCheckoutButton />;
  return <></>;
};

export default FeatureWrapper;
