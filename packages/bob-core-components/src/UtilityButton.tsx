import { Component, MotionComponent } from "./utilityButton/utilityButton.styles";
import React, { forwardRef } from "react";
import { IProps } from "./utilityButton/utilityButton.types";

// This button is used in Slider and Switch
const UtilityButton = forwardRef<HTMLButtonElement, IProps>(
  (props, ref) =>
    props.motion ? (
      <MotionComponent ref={ref} {...props}/>
    ) : (
      <Component ref={ref} {...props}>
        {/*<InnerCircle />*/}
      </Component>
    )
);

export default UtilityButton;
