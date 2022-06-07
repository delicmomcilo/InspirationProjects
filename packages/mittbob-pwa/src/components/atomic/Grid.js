import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useDebouncedCallback } from 'use-debounce';
import { Container, Item } from './grid/grid.styles';

// eslint-disable-next-line
const ItemComponent = ({ children, ...other }) => {
  const ref = useRef();
  const [span, setSpan] = useState([0, 0]);
  const [computeSpan] = useDebouncedCallback(() => {
    if (ref.current && ref.current.children[0]) {
      const item = ref.current.children[0];
      const container = ref.current.parentNode;
      const rowGap = parseInt(
        window.getComputedStyle(container).getPropertyValue('grid-row-gap'),
        10,
      );
      const spanHeight = Math.ceil(
        (item.getBoundingClientRect().height + rowGap) / rowGap,
      );
      const spanWidth = Math.ceil(
        (item.getBoundingClientRect().width + rowGap) / rowGap,
      );
      setSpan([spanHeight, spanWidth]);
    }
  }, 250);

  useEffect(() => {
    computeSpan();
    window.addEventListener('resize', computeSpan);
    return () => window.removeEventListener('resize', computeSpan);
  }, [computeSpan]);

  return (
    <Item ref={ref} span={span} {...other}>
      {children}
    </Item>
  );
};

const Grid = ({ container, item, children, ...other }) => {
  if (container) {
    return <Container {...other}>{children}</Container>;
  }
  if (item) {
    return <ItemComponent {...other}>{children}</ItemComponent>;
  }
  return null;
};

Grid.propTypes = {
  container: PropTypes.bool,
  item: PropTypes.bool,
  children: PropTypes.node,
};
Grid.defaultProps = {
  container: undefined,
  item: undefined,
  children: undefined,
};

export default Grid;
