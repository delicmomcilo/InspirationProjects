import React, { useEffect, useState } from "react";
import { IProps } from "./progressIndicator/progressIndicator.types";
import {
  Container,
  BackgroundCircle,
  Circle
} from "./progressIndicator/progressIndicator.styles";
import { useSpring } from "framer-motion";

const ProgressIndicator = ({ circular = true, size = "medium", className = '' }: IProps) => {
  const [clockWise, setClockWise] = useState(1);
  const pathLength = useSpring(0, { stiffness: 100, damping: 25 });
  useEffect(() => {
    pathLength.set(1);
    const unsub = pathLength.onChange(() => {
      if (pathLength.get() === 0) {
        setClockWise(1);
        pathLength.set(1);
      } else if (pathLength.get() === 1) {
        pathLength.set(0);
        setClockWise(0);
      }
    });
    return () => {
      unsub();
    };
  }, [pathLength]);

  const path = `M 50 0 a 50 50 0 1 ${clockWise} 0 100 a 50 50 0 1 ${clockWise} 0 -100`;
  return (
    <Container size={size} viewBox="-18 -18 132 132" className={className}>
      <BackgroundCircle d={path} />
      <Circle d={path} style={{ pathLength }} />
    </Container>
  );
};

export default ProgressIndicator;
