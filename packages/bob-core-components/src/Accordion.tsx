import React, { useEffect, useState } from "react";
import { IProps } from "./accordion/types";
import {
  Card,
  Details,
  Summary,
  AnimationContainer,
  ButtonAnimation
} from "./accordion/accordion.styles";
import Button from "./Button";
import Typography from "./Typography";

const variants = {
  open: {
    height: "auto"
  },
  closed: {
    height: 0
  }
};

export const Accordion = (props: IProps): JSX.Element => {
  const {
    children,
    title,
    titleProps = {},
    noCard = false,
    open: openProp = false,
    noButton = false,
    ...rest
  } = props;

  const [open, setOpen] = useState(openProp);
  useEffect(() => {
    setOpen(openProp);
  }, [openProp]);
  const handleOnOpen = (): void => {
    setOpen(!open);
  };

  const Wrapper = noCard ? React.Fragment : Card;

  return (
    <Wrapper {...rest}>
      <AnimationContainer>
        <Summary>
          {title && (
            <Typography component="h2" {...titleProps}>
              {title}
            </Typography>
          )}
          {!noButton && (
            <ButtonAnimation open={open}>
              <Button
                variant="icon"
                iconName="Chevron"
                onClick={handleOnOpen}
              />
            </ButtonAnimation>
          )}
        </Summary>
        <Details
          initial={false}
          variants={variants}
          animate={open ? "open" : "closed"}
        >
          {children}
        </Details>
      </AnimationContainer>
    </Wrapper>
  );
};

export default Accordion;
