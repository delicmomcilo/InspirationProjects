import React from 'react';
import Icon from './Icon';
import Grid from './Grid';
import { Container, Title, Text } from './unhappy/unhappy.styles';
import { IProps } from './unhappy/unhappy.types';

const Unhappy: React.FC<IProps> = ({ title, text, iconName, iconProps, children }) => {
  return (
    <Grid item xs={12}>
      <Container>
        {iconName && <Icon name={iconName} {...iconProps} />}
        <Title>{title}</Title>
        {text && <Text>{text}</Text>}
        {children}
      </Container>
    </Grid>
  );
};

export default Unhappy;