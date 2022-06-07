import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { Transition } from 'react-transition-group';
import {
  ModalDialogBackdrop,
  StyledModalDialog,
  ModalDialogHeader,
} from './modalDialog/modalDialog.styles';
import { LIBRARY_NAME } from './constants';
import Icon from './Icon';

const NAME = `${LIBRARY_NAME}__modal-dialog`;
const CONTAINER_NAME = `${NAME}-container`;

const ModalDialog = ({
  open: propOpen,
  title,
  icon,
  onClose,
  iconSize = 'x-large',
  children,
  ...rest
}) => {
  const [open, setOpen] = useState(propOpen);
  const [container, setContainer] = useState(document.getElementById(CONTAINER_NAME));

  useEffect(() => {
    setOpen(propOpen);
  }, [propOpen]);

  useEffect(() => {
    if (!container) {
      const c = document.createElement('div');
      c.setAttribute('id', CONTAINER_NAME);
      document.body.appendChild(c);
      setContainer(c);
    }
  }, [container]);

  if (!container) return null;

  const handleCloseClick = e => {
    setOpen(false);
    onClose(e);
  };

  const content = (
    <Transition in={open} timeout={250}>
      {state => (
        <ModalDialogBackdrop {...rest} animationState={state} onClick={handleCloseClick}>
          <StyledModalDialog
            onClick={e => e.stopPropagation()}
            onClose={onClose && handleCloseClick}
          >
            <ModalDialogHeader>
              {title}
              {icon && <Icon size={iconSize} name={icon} />}
            </ModalDialogHeader>
            {children}
          </StyledModalDialog>
        </ModalDialogBackdrop>
      )}
    </Transition>
  );
  return createPortal(content, container);
};

ModalDialog.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
};

ModalDialog.defaultProps = {
  onClose: n => n,
};

export default ModalDialog;
