import React, { createRef, useLayoutEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Popover from './Popover';
import { Container, Bar, Bars, Label, Labels, Line, sizes } from './barDiagram/barDiagram.styles';

const getLeft = (bar, container) => {
  const left =
    bar.current.getBoundingClientRect().left + bar.current.getBoundingClientRect().width / 2;
  const containerLeft = container.current.getBoundingClientRect().left;
  return Math.round(left - containerLeft);
};

const BarDiagram = ({ list, onClick, selectedIndex, className, size }) => {
  const maxY = list.reduce((max, bar) => (max > bar.value ? max : bar.value), 0);
  const [popoverLeft, setPopoverLeft] = useState(null);
  const containerRef = createRef();
  const barRefs = new Array(list.length).fill(0).map(() => createRef());
  useLayoutEffect(() => {
    if (selectedIndex > -1) setPopoverLeft(getLeft(barRefs[selectedIndex], containerRef));
  }, [selectedIndex, barRefs, containerRef]);
  const { icon, value, displayValue, success, warning } = list[selectedIndex] || {};
  return (
    <Container ref={containerRef} className={className} size={size}>
      {list[selectedIndex] && (
        <Popover left={popoverLeft} icon={icon} success={success} warning={warning}>
          {displayValue || value}
        </Popover>
      )}
      <Bars>
        {list.map((bar, i) => (
          <Bar
            id={`bob-bar-diagram--bar_index_${i}`}
            key={`bob-bar-diagram--bar_index_${bar.id}`}
            ref={barRefs[i]}
            {...bar}
            data-index={i}
            onClick={onClick}
            maxY={maxY}
          />
        ))}
      </Bars>
      <Line />
      <Labels>
        {list.map((bar, i) => (
          <Label
            htmlFor={`bob-bar-diagram--bar_index_${bar.id}`}
            key={`bob-bar-diagram--label_index_${bar.id}`}
          >
            {bar.label}
          </Label>
        ))}
      </Labels>
    </Container>
  );
};

BarDiagram.propTypes = {
  size: PropTypes.oneOf(Object.keys(sizes)),
  list: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      displayValue: PropTypes.string,
      label: PropTypes.string,
      variant: PropTypes.oneOf(['regular', 'blank', 'warning', undefined]),
    }),
  ),
  onClick: PropTypes.func,
  selectedIndex: PropTypes.number,
  className: PropTypes.string,
};

BarDiagram.defaultProps = {
  size: 'small',
  list: [],
  selectedIndex: -1,
  onClick: f => f,
  className: undefined,
};

export default BarDiagram;
