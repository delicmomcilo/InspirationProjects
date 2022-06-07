import styled from 'styled-components';
import { media } from '../../../../app/app.styles';
import Input from '../../../../components/atomic/Input';

export const Component = styled.div.attrs(() => ({
  className: 'bob-core-components-typography__regular--medium--coal',
}))`
  display: flex;
  flex-wrap: wrap;
`;

export const StatusMessage = styled.span.attrs(() => ({
  className: 'bob-core-components-typography__semibold--medium--coal',
}))`
  height: 2rem;
  width: 100%;
`;

export const InputWrapper = styled.div`
  height: 3rem;
  width: 50%;
  ${media.app} {
    width: 100%;
    padding: 1rem 1rem 4rem;
  }
`;

export const ButtonWrapper = styled.div`
  height: 3rem;
  width: 50%;
  padding: 0.5rem;
  display: flex;
  ${media.app} {
    width: 100%;
    padding: 1rem;
    justify-content: center;
  }
`;

export const StyledInput = styled(Input)`
  padding-bottom: 0.4rem;
  margin-top: 0.3rem;
  input {
    height: 2.5rem;
  }
`;
