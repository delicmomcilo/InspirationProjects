import React, { useState } from 'react';
import Card from './Card';
import { IProps } from './accordion/types';
import {
  Details,
  Summary,
  AnimationContainer,
  ButtonAnimation,
} from './accordion/accordion.styles';
import Button from './Button';

export const Accordion = (props: IProps): JSX.Element => {
  const [open, setOpen] = useState(false);
  const { children, title, ...rest } = props;
  const handleOnOpen = (): void => {
    setOpen(!open);
  };

  return (
    <Card onClose={undefined} {...rest}>
      <AnimationContainer>
        <Summary>
          <h2 className="bob-core-components-typography__regular--medium-1--coal">{title}</h2>
          <ButtonAnimation open={open}>
            <Button variant="icon" iconName="Chevron" onClick={handleOnOpen} />
          </ButtonAnimation>
        </Summary>
        <Details open={open}>{children}</Details>
      </AnimationContainer>
    </Card>
  );
};

export default Accordion;
