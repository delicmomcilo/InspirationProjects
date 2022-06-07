import React, { useRef, useLayoutEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Container, IconContainer, Inner, TextPadding } from './popover/popover.styles';
import Icon from './Icon';
// eslint-disable-next-line
const FitText = ({ children }) => {
  const ref = useRef();
  const isDone = useRef(false);
  const tries = useRef(0);
  const [fs, setFs] = useState(0);

  useLayoutEffect(() => {
    if (children && ref.current && !isDone.current && tries.current < 64) {
      tries.current += 1;
      const node = ref.current;
      const { parentNode } = node;
      const resizeText = () => {
        const parentRect = parentNode.getBoundingClientRect();
        const nodeRect = node.getBoundingClientRect();
        if (nodeRect.width < parentRect.width) {
          const fontSize = fs + 1;
          setFs(fontSize);
        } else {
          isDone.current = true;
          setFs(fs - 1);
        }
      };
      resizeText();
    }
  });
  return (
    <span ref={ref} style={{ fontSize: `${fs}px` }}>
      {children}
    </span>
  );
};

const Popover = ({ title, icon, success, warning, children, ...rest }) => {
  const text = title || (typeof children === 'string' && children);
  return (
    <Container {...rest}>
      <Inner>
        <TextPadding>
          <FitText>{text}</FitText>
        </TextPadding>
        <IconContainer>
          {success && <Icon name="Check" color="success" />}
          {warning && !success && <Icon name="Warning" color="warning" />}
          {!success && !warning && icon}
        </IconContainer>
      </Inner>
    </Container>
  );
};

Popover.propTypes = {
  children: PropTypes.string,
  icon: PropTypes.node,
  success: PropTypes.bool,
  warning: PropTypes.bool,
  title: PropTypes.string,
};
Popover.defaultProps = {
  title: '',
  children: '',
  icon: undefined,
  success: false,
  warning: false,
};

export default Popover;
