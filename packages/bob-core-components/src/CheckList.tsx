import React from 'react';
import { Container, Heading, Checkbox } from './checkList/checkList.styles';
import { IProps } from './checkList/checkList.types';

const CheckList: React.FC<IProps> = ({ className, title, checkboxes }) => {
  return (
    <Container className={className}>
      <Heading>{title}</Heading>
      {checkboxes.map((props, index) => (
        <React.Fragment key={props.id || index}>
          <Checkbox {...props} />
        </React.Fragment>
      ))}
    </Container>
  );
};

export default CheckList;