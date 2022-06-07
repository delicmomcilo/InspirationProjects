import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  ButtonContainer,
  TabButton,
  BodyArea,
} from './tabs/tabs.styles';
import Button from './Button';

const Tabs = ({ tabs, children, onClick }) => {
  return (
    <Container>
      <ButtonContainer>
        {tabs.map(tabItem => (
          <TabButton
            key={tabItem.id}
            className={tabItem.selected && `${Button.NAME}--selected`}
            data-id={tabItem.id}
            onClick={e => onClick(e, { tabItem })}
            variant="quaternary"
            {...tabItem}
          >
            {tabItem.title}
          </TabButton>
        ))}
      </ButtonContainer>
      <BodyArea>{children}</BodyArea>
    </Container>
  );
};

Tabs.propTypes = {
  onClick: PropTypes.func.isRequired,
  onScrollToChange: PropTypes.func,
  children: PropTypes.node.isRequired,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      selected: PropTypes.bool.isRequired,
      path: PropTypes.string,
      hash: PropTypes.string,
    }),
  ).isRequired,
};

Tabs.defaultProps = {
  onScrollToChange: undefined,
};

export default Tabs;
