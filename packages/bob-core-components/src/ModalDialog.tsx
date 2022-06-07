import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Transition } from "react-transition-group";
import {
  ChildrenContainer,
  ModalDialogBackdrop,
  StyledModalDialog,
  ModalDialogHeader
} from "./modalDialog/modalDialog.styles";
import { LIBRARY_NAME } from "./constants";
import Icon from "./Icon";
import { withDefaultTheme } from "./ThemeProvider";
import { IProps } from "./modalDialog/modalDialog.types";
import { TransitionStatus } from "react-transition-group/Transition";

const NAME = `${LIBRARY_NAME}__modal-dialog`;
const CONTAINER_NAME = `${NAME}-container`;

const ModalDialog = ({
  open: propOpen,
  title,
  icon,
  onClose,
  iconSize = "x-large",
  children,
  justifyChildren,
  alignChildren,
  childrenDirection,
  beforeContent,
  ...rest
}: IProps) => {
  const [open, setOpen] = useState(propOpen);
  const [container, setContainer] = useState(
    document.getElementById(CONTAINER_NAME)
  );

  useEffect(() => {
    setOpen(propOpen);
  }, [propOpen]);

  useEffect(() => {
    if (!container) {
      const c = document.createElement("div");
      c.setAttribute("id", CONTAINER_NAME);
      document.body.appendChild(c);
      setContainer(c);
    }
  }, [container]);

  if (!container) return null;

  const handleCloseClick = () => {
    setOpen(false);
    if (onClose) {
      onClose();
    }
  };

  const stopPropagation = (e: Event) => e.stopPropagation();

  const content = (
    <Transition in={open} timeout={250}>
      {(state: TransitionStatus) => (
        <ModalDialogBackdrop
          {...rest}
          animationState={state}
          onClick={onClose && handleCloseClick}
        >
          {beforeContent}
          <StyledModalDialog
            onClick={stopPropagation}
            onClose={onClose && handleCloseClick}
          >
            <ModalDialogHeader>
              {title}
              {icon && <Icon size={iconSize} name={icon} />}
            </ModalDialogHeader>
            <ChildrenContainer
              childrenDirection={childrenDirection}
              justifyChildren={justifyChildren}
              alignChildren={alignChildren}
            >
              {children}
            </ChildrenContainer>
          </StyledModalDialog>
        </ModalDialogBackdrop>
      )}
    </Transition>
  );
  return createPortal(content, container);
};

export default withDefaultTheme(ModalDialog);
