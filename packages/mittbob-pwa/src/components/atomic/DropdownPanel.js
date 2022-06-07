import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Dropdown,
  Header,
  StyledChevron,
  HeaderWrapper,
} from './dropdownPanel/dropdownPanel.styles';

const DropdownPanel = ({ children, showing, ...rest }) => {
  return (
    <Container {...rest}>
      <HeaderWrapper>
        <Header>Betingelser</Header>
        <div>
          <StyledChevron showing={showing} />
        </div>
      </HeaderWrapper>
      <Dropdown showing={showing}>{children}</Dropdown>
    </Container>
  );
};

DropdownPanel.propTypes = {
  showing: PropTypes.bool,
  children: PropTypes.shape({}),
};

DropdownPanel.defaultProps = {
  showing: false,
  children: undefined,
};

export default DropdownPanel;
