import React, { useRef } from 'react';
// import { SVG } from '@svgdotjs/svg.js';
import { createPortal } from 'react-dom';
import {
  BackgroundSvg,
  ExtendSvg,
  Fixed,
  Flex,
  ExtendedContainer,
  Relative,
  TransparentAppContainer,
} from './background/background.styles';

const Background = () => {
  const bgRef = useRef();
  const rightExtendedRef = useRef();
  const leftExtendedRef = useRef();
  /*
  * Animation performance issues. Visit some other time and consider using another library.
  * This code may also be incorrect use of the library
  useEffect(() => {
    if (!bgRef.current || !leftExtendedRef.current || !rightExtendedRef.current)
      return;
    const left = SVG(leftExtendedRef.current);
    const right = SVG(rightExtendedRef.current);
    const bg = SVG(bgRef.current);
    window.bg = bg;
    try {
      left.flip('x');
      left.find('#road')[0].remove();
      right.find('#road')[1].remove();
      bg.find('#sol')[0]
        .animate({ duration: 10000, swing: true })
        .scale(1.2)
        .loop(true, true);
      bg.find('#balloon')[0]
        .animate({ duration: 10000, swing: true })
        .move(100, 100)
        .loop(true, true);
      bg.find('#cloud').forEach(c => {
        const randomX = Math.floor(Math.random() * 100);
        const randomY = Math.floor(Math.random() * 100);
        c.animate({ duration: 15000, swing: true, delay: randomY * 100 })
          .dmove(50 + randomX, 50 + randomY)
          .loop(true, true);
      });
    } catch (e) {
      console.error('[Background] Svg manipulation failed: ', e); // eslint-disable-line
    }
  }, []);
  */
  const content = (
    <Fixed>
      <TransparentAppContainer />
      <Flex>
        <ExtendedContainer>
          <ExtendSvg ref={leftExtendedRef} />
        </ExtendedContainer>
        <Relative>
          <BackgroundSvg ref={bgRef} />
        </Relative>
        <ExtendedContainer>
          <ExtendSvg ref={rightExtendedRef} />
        </ExtendedContainer>
      </Flex>
    </Fixed>
  );
  const container = document.getElementById('app-background-container');
  if (!container) return null;
  return createPortal(content, container);
};

export default Background;
