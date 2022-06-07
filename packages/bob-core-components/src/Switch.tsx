import React, { SyntheticEvent, useEffect, useRef, useState } from "react";
import {
  Container,
  Button,
  ButtonContainer,
  OverlayButton
} from "./switch/switch.styles";
import { useTheme } from "styled-components";
import { IProps } from "./switch/switch.types";

const Switch = ({
  onChange,
  value,
  defaultValue,
  disabled,
  ...rest
}: IProps) => {
  const theme = useTheme();
  const initialToggled = defaultValue === "on" || value === "on";
  const btnRef = useRef<HTMLButtonElement>(null);
  const [toggled, setToggled] = useState(initialToggled);
  useEffect(() => {
    setToggled(value === "on");
  }, [value]);
  const buttonVariants = {
    on: {
      x: `calc(${theme.variables.sizes.switch.width} - ${theme.variables.sizes.utilityButton.width})`
    },
    off: {
      x: 0
    }
  };
  const containerVariants = {
    on: {
      backgroundColor: theme.variables.colors.violet
    },
    off: {
      backgroundColor: theme.variables.colors["light-grey"]
    }
  };
  const transition = {
    x: { type: "spring", stiffness: 200 },
    default: { duration: 0.2 }
  };
  const handleOverlayClick = () => {
    if (btnRef.current) {
      btnRef.current.click();
    }
  };
  const handleClick = (e: SyntheticEvent): void => {
    if (!value) {
      setToggled(!toggled);
    }
    const val = !toggled ? "on" : "off";
    if (onChange) {
      onChange(val, e);
    }
  };
  return (
    <Container
      disabled={disabled}
      initial="off"
      animate={toggled ? "on" : "off"}
      variants={containerVariants}
    >
      <OverlayButton onClick={handleOverlayClick} disabled={disabled} />
      <ButtonContainer
        initial="off"
        animate={toggled ? "on" : "off"}
        transition={transition}
        variants={buttonVariants}
      >
        <Button
          disabled={disabled}
          motion
          ref={btnRef}
          onClick={handleClick}
          initial="off"
          animate={toggled ? "on" : "off"}
          variants={containerVariants}
          {...rest}
        />
      </ButtonContainer>
    </Container>
  );
};

export default Switch;
