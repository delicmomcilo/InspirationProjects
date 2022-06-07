import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { Transition } from 'react-transition-group';
import { Message, StyledBanner, Actions } from './banner/banner.styles';
import { LIBRARY_NAME } from './constants';
import Button from './Button';

const NAME = `${LIBRARY_NAME}__banner`;
const CONTAINER_NAME = `${NAME}-container`;

const Banner = ({
  show: propShow,
  dismissTitle,
  okTitle,
  onOk,
  onDismiss,
  children,
  ...rest
}) => {
  const [show, setShow] = useState(propShow);
  const [container, setContainer] = useState(
    document.getElementById(CONTAINER_NAME),
  );

  useEffect(() => {
    setShow(propShow);
  }, [propShow]);

  useEffect(() => {
    if (!container) {
      const c = document.createElement('div');
      c.setAttribute('id', CONTAINER_NAME);
      document.body.appendChild(c);
      setContainer(c);
    }
  }, [container]);

  if (!container) return null;

  const handleDismiss = () => {
    setShow(false);
    onDismiss();
  };
  const handleOk = () => {
    setShow(false);
    onOk();
  };

  const content = (
    <Transition in={show} timeout={250}>
      {state => (
        <StyledBanner animationState={state} {...rest}>
          <Message>{children}</Message>
          <Actions>
            <Button
              variant="tertiary"
              fitContent
              onClick={handleDismiss}
              title={dismissTitle}
            />
            <Button fitContent onClick={handleOk} title={okTitle} />
          </Actions>
        </StyledBanner>
      )}
    </Transition>
  );
  return createPortal(content, container);
};

Banner.propTypes = {
  children: PropTypes.node.isRequired,
  onDismiss: PropTypes.func,
  onOk: PropTypes.func,
  show: PropTypes.bool.isRequired,
  variant: PropTypes.string,
};
Banner.defaultProps = {
  variant: 'primary',
  onDismiss: n => n,
  onOk: n => n,
};

export default Banner;
