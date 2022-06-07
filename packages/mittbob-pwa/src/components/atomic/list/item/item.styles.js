import styled from 'styled-components';
import { reset } from '../list.styles';
import Icon from '../../Icon';

export const IconContainer = styled.div`
  padding-right: ${({ dense }) => (dense ? '0' : '1rem')};
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    height: auto;
    max-width: 2rem;
  }
`;
export const TitleContainer = styled.div``;
export const Title = styled.div.attrs(({ dense }) => ({
  className: dense
    ? 'bob-core-components-typography__regular--medium--coal'
    : 'bob-core-components-typography__semibold--large--coal',
}))``;
export const Subtitle = styled.div.attrs(() => ({
  className: 'bob-core-components-typography__regular--small--light-grey',
}))``;
export const RightContent = styled.div.attrs(({ dense }) => ({
  className: dense
    ? 'bob-core-components-typography__regular--medium--coal'
    : 'bob-core-components-typography__semibold--large--coal',
}))`
  flex-grow: 1;
  text-align: end;
  display: flex;
  flex-direction: column;
  justify-content: center;
  && {
    ${({ warning }) => warning && 'color: var(--bob-core-components-color-rosso60)'}
  }
`;

export const StyledLi = styled.li`
  ${reset}
  &:nth-of-type(even) {
    background-color: var(--bob-core-components-color-mist20);
  }
`;

export const Content = styled.div`
  /* in case if it becomes an anchor*/
  text-decoration: none;
  color: inherit;
  &:hover {
    color: inherit;
  }
  /*end*/
  padding: ${({ dense }) => (dense ? '0.5rem 1rem' : '1rem')};
  display: flex;
  ${({ selected }) =>
    selected &&
    ` background-color: var(--bob-core-components-color-eggplant10);
      box-shadow: inset 3rem 0rem 0rem -2.7rem var(--bob-core-components-color-violet-darker);
    `}
`;

export const WarningIcon = styled(Icon).attrs(() => ({
  name: 'Warning',
  color: 'warning',
}))``;
