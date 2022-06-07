import styled from 'styled-components';
import Input from '../Input';

export const Container = styled.div``;

export const Heading = styled.h3.attrs(() => ({
  className: 'bob-core-components-typography__regular--large--coal',
}))``;

export const Checkbox = styled(Input).attrs(() => ({
  type: 'checkbox',
}))`
  margin-top: 0.5rem;
`;
