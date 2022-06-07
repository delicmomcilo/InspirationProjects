import React from 'react';
import PropTypes from 'prop-types';
import {
  Content,
  Header,
  Container,
} from './navigationHeader/navigationHeader.styles';
import { ArrowButton } from './index';

const NavigationHeader = React.forwardRef((props, ref) => {
  const { onClick, title, children, backButtonTitle } = props;
  return (
    <Container>
      <Header>
        <ArrowButton
          direction={ArrowButton.DIRECTION.LEFT}
          arrowLength={ArrowButton.LENGTH.MEDIUM}
          color="secondary"
          onClick={onClick}
          title={backButtonTitle}
        />
        <h1 className="bob-core-components-typography__bold--large--snow">
          {title}
        </h1>
      </Header>
      <Content ref={ref}>{children}</Content>
    </Container>
  );
});

NavigationHeader.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  backButtonTitle: PropTypes.string,
};
NavigationHeader.defaultProps = {
  backButtonTitle: 'Back',
};

export default NavigationHeader;
