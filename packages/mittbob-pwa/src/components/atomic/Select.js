/* import PropTypes from 'prop-types';
import React, { forwardRef, useRef, useState } from 'react';
import {
  Clear,
  Placeholder,
  StyledSelect,
  SelectError,
  SelectContainer,
  SelectLabel,
  ChevronContainer,
} from './select/select.styled';
import { LIBRARY_NAME, THEMES } from './constants';
import { Close, ChevronDown } from './icon/';

const PLACEHOLDER_VALUE = 'placeholder';
const NAME = `${LIBRARY_NAME}__select`;
const Select = forwardRef(
  (
    { onChange, clearable, error, className, label, id, children, theme, variant, ...rest },
    ref,
  ) => {
    const inputId =
      id || `${NAME}--id-${btoa(JSON.stringify({ label, className, variant, ...rest }))}`;
    const themeProps = { theme, variant };
    const hookRef = useRef();
    const selectRef = ref || hookRef;
    const [isPlaceholderSelected, setIsPlaceholderSelected] = useState(true);
    const handleChange = e => {
      if (isPlaceholderSelected !== (e.currentTarget.value === PLACEHOLDER_VALUE))
        setIsPlaceholderSelected(!isPlaceholderSelected);
      onChange(e);
    };
    const handleClear = e => {
      e.preventDefault();
      selectRef.current.value = PLACEHOLDER_VALUE;
      setIsPlaceholderSelected(true);
    };

    return (
      <SelectContainer {...themeProps} {...rest}>
        <StyledSelect
          {...themeProps}
          ref={selectRef}
          clearable={clearable}
          onChange={handleChange}
          id={inputId}
          error={error}
          {...rest}
        >
          <Placeholder defaultSelected hidden value={PLACEHOLDER_VALUE} />
          {children}
        </StyledSelect>
        {label && (
          <SelectLabel
            isPlaceholderSelected={isPlaceholderSelected}
            {...themeProps}
            htmlFor={inputId}
          >
            {label}
          </SelectLabel>
        )}
        {error && <SelectError {...themeProps}>{error}</SelectError>}
        {clearable && (
          <Clear {...themeProps} onClick={handleClear} type="button">
            <Close />
          </Clear>
        )}
        <ChevronContainer {...themeProps}>
          <ChevronDown />
        </ChevronContainer>
      </SelectContainer>
    );
  },
);

Select.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  clearable: PropTypes.bool,
  error: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  theme: PropTypes.shape({}),
  variant: PropTypes.string,
};

Select.defaultProps = {
  children: undefined,
  clearable: false,
  className: '',
  error: '',
  id: undefined,
  label: '',
  onChange: noop => noop,
  theme: {
    mode: THEMES.LIGHT,
  },
  variant: 'default',
};

export default Select;
*/

export default notimplemented => notimplemented;
