import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion } from './framerMotion'
import { Container, Aside, CloseButton, CloseButtonContainer } from "./drawer/drawer.styles";
import {
  staggerChildrenVariants,
  childrenVariants,
  closeButton
} from "./drawer/animations";
import { LIBRARY_NAME } from "./constants";
import { IProps } from "./drawer/drawer.types";

const NAME = `${LIBRARY_NAME}__drawer`;
const CONTAINER_NAME = `${NAME}-container`;

const Drawer = ({
  open: propOpen,
  staggerChildren = true,
  children: childrenProp,
  direction = "left",
  onClose
}: IProps): JSX.Element | null => {
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
  const children = React.Children.map(childrenProp, child => {
    if (staggerChildren) {
      return <motion.div variants={childrenVariants}>{child}</motion.div>;
    }
    return child;
  });

  const width = "20rem";
  const handleClose = () => {
    setOpen(false);
    if (onClose) {
      onClose();
    }
  };

  const dynamicSidebarVariants = {
    open: {
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      },
      [direction]: "0rem"
    },
    closed: {
      transition: {
        delay: 0.25,
        type: "spring",
        stiffness: 400,
        damping: 40
      },
      [direction]: `-${width}`
    }
  };

  const content = (
    <Aside
      initial={false}
      key={`${NAME}_key_direction_${direction}`}
      animate={open ? "open" : "closed"}
      variants={dynamicSidebarVariants}
    >
      <Container>
        <CloseButtonContainer direction={direction} variants={closeButton}>
          <CloseButton onClick={handleClose}  />
        </CloseButtonContainer>
        <motion.div variants={staggerChildrenVariants}>{children}</motion.div>
      </Container>
    </Aside>
  );

  return createPortal(content, container);
};

export default Drawer;
