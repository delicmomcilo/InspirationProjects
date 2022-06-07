import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import {
  StyledUse,
  StyledValidMember,
  StyledUseContainer,
} from './use/use.styles';
import { Button } from '../../../../components/atomic';

const transformTemplate = ({ x, y, rotateZ }) => {
  const xt = x ? `translateX(${x})` : '';
  const yt = y ? `translateY(${y})` : '';
  const rzt = rotateZ ? `rotateZ(${rotateZ})` : '';
  return `${rzt} ${xt} ${yt}`;
};
const Use = ({ onBack }) => {
  const [used, setUsed] = useState(false);
  const { t } = useTranslation();
  const handle = () => {
    setUsed(!used);
  };
  const container = {
    used: {
      originX: [0, 0, 0],
      originY: [0, 0, 0],
      y: [0, 8, -20],
      x: [0, 0, 6],
      rotateZ: [0, 6, 3],
    },
    unused: {
      y: 0,
    },
  };
  const validMember = {
    used: {
      y: -8,
    },
    unused: {
      y: -72,
    },
  };
  return (
    <StyledUseContainer>
      <StyledUse
        transformTemplate={transformTemplate}
        variants={container}
        initial={false}
        animate={used ? 'used' : 'unused'}
        transition={{
          duration: 0.35,
        }}
      >
        <Button
          variant="tertiary"
          onClick={onBack}
          arrowPosition={Button.arrowPosition.LEFT}
        >
          {t('Tilbake')}
        </Button>
        <Button variant="tertiary" showArrow={false} onClick={handle}>
          {t('Bruk')}
        </Button>
      </StyledUse>
      <StyledValidMember
        transformTemplate={transformTemplate}
        style={{ y: -72 }}
        initial={false}
        animate={used ? 'used' : 'unused'}
        variants={validMember}
        transition={{
          delay: 0.35,
          duration: 0.35,
        }}
      >
        {t('GYLDIG MEDLEM')}
      </StyledValidMember>
    </StyledUseContainer>
  );
};

Use.propTypes = {
  onBack: PropTypes.func.isRequired,
};

export default Use;
