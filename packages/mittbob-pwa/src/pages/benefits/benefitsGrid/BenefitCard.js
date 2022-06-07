import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { CALL_TO_ACTION } from './constants';
import FlippableCard from '../../../components/atomic/FlippableCard';
import { backsideRenderer, frontsideRenderer } from './benefitCard/helpers';
import NotMemberBenefitCard from './benefitCard/NotMemberBenefitCard';
import {HF_ROLES} from "../../../redux/modules/person/constants";

const BenefitCard = props => {
  const [flip, setFlipped] = useState(false);
  const userAuth0 = useSelector((store) => store.auth0.user);

  const isMember = () => !!userAuth0?.role?.includes(HF_ROLES.MEMBER_PORTAL_USER);

  const handleCallToAction = e => {
    if (props.callToActionFunction.value === CALL_TO_ACTION.DEEPLINK) {
      setFlipped(!flip);
    } else {
      window.open(e.currentTarget.getAttribute('data-href'), '_blank');
    }
  };
  if (!isMember()) return <NotMemberBenefitCard {...props} />;
  return (
    <FlippableCard
      flip={flip}
      frontsideRenderer={frontsideRenderer({
        ...props,
        onCallToAction: handleCallToAction,
      })}
      backsideRenderer={backsideRenderer({
        ...props,
        onBack: () => setFlipped(!flip),
      })}
    />
  );
};

BenefitCard.propTypes = {
  callToActionFunction: PropTypes.shape({ value: PropTypes.string }).isRequired,
};
export default BenefitCard;
