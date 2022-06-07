import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledLi,
  Content,
  IconContainer,
  RightContent,
  Subtitle,
  TitleContainer,
  Title,
} from './item/item.styles';
import Icon from '../Icon';

const Item = ({
  children,
  dense: denseAsBoolean,
  icon,
  subtitle,
  title,
  text,
  success,
  warning,
  ...rest
}) => {
  const dense = denseAsBoolean ? 'true' : undefined;
  const iconContainer = icon && <IconContainer dense={dense}>{icon}</IconContainer>;
  const successContainer = success && (
    <IconContainer dense={dense}>
      <Icon name="Check" color="success" />
    </IconContainer>
  );
  const warningContainer = warning && (
    <IconContainer dense={dense}>
      <Icon name="Warning" color="warning" />
    </IconContainer>
  );
  const titleContainer = title && (
    <TitleContainer>
      <Title dense={dense}>{title}</Title>
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
    </TitleContainer>
  );
  const rightContainer = text && (
    <RightContent dense={dense} warning={warning}>
      {text}
    </RightContent>
  );
  return (
    <StyledLi>
      <Content dense={dense} {...rest}>
        {warningContainer || successContainer || iconContainer}
        {titleContainer}
        {rightContainer}
        {children}
      </Content>
    </StyledLi>
  );
};

Item.Link = props => <Item as={props.as || 'a'} href={props.to} {...props} />; //eslint-disable-line

Item.propTypes = {
  children: PropTypes.node,
  dense: PropTypes.bool,
  icon: PropTypes.node,
  subtitle: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  success: PropTypes.bool,
  warning: PropTypes.bool,
};
Item.defaultProps = {
  children: undefined,
  dense: false,
  icon: undefined,
  subtitle: undefined,
  title: undefined,
  text: undefined,
  success: undefined,
  warning: undefined,
};

export default Item;
