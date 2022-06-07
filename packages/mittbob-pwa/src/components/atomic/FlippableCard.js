import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import {
  SideContainer,
  Frontside,
  Backside,
  Perspective,
  Container,
} from './flippableCard/flippableCard.styles';

const flipped = {
  rotateY: [0, 0, 220, 180],
  rotateZ: [0, -6, 3, 0],
  z: [0, 250, 0],
};

const notFlipped = {
  rotateY: [180, 220, 0, 0],
  rotateZ: [0, 3, -6, 0],
  z: [0, 250, 0],
};

const variants = { flipped, notFlipped };

const FLIPPED = 'flipped';
const NOT_FLIPPED = 'notFlipped';

const FlippableCard = ({
  flip,
  perspective,
  transitionDuration = 0.35,
  motionDivProps = {},
  backside,
  frontside,
  backsideRenderer,
  frontsideRenderer,
}) => {
  const prevAnimate = useRef();
  let animate;
  if (prevAnimate.current === FLIPPED || prevAnimate.current === NOT_FLIPPED) {
    animate = flip ? FLIPPED : NOT_FLIPPED;
  }
  animate = prevAnimate?.current !== animate && animate;
  prevAnimate.current = animate || NOT_FLIPPED;
  return (
    <Perspective perspective={perspective}>
      <Container
        animate={animate}
        variants={variants}
        transition={{ duration: transitionDuration }}
        {...motionDivProps}
      >
        <SideContainer>{frontsideRenderer(Frontside, frontside)}</SideContainer>
        <SideContainer backside>
          {backsideRenderer(Backside, backside)}
        </SideContainer>
      </Container>
    </Perspective>
  );
};

FlippableCard.propTypes = {
  flip: PropTypes.bool,
  perspective: PropTypes.number,
  transitionDuration: PropTypes.number,
  motionDivProps: PropTypes.shape({}),
  backside: PropTypes.node,
  frontside: PropTypes.node,
  backsideRenderer: PropTypes.func,
  frontsideRenderer: PropTypes.func,
};

FlippableCard.defaultProps = {
  flip: false,
  perspective: 2000,
  transitionDuration: 0.35,
  motionDivProps: {},
  backside: undefined,
  frontside: undefined,
  backsideRenderer: (Cont, content) => <Cont>{content}</Cont>,
  frontsideRenderer: (Cont, content) => <Cont>{content}</Cont>,
};

export default FlippableCard;
