import styled from 'styled-components';
import { Icon } from '..';

export const Container = styled.div`
  border-radius: 0.5rem;

  cursor: pointer;
  border-style: solid;
  border: 0.0625rem solid var(--bob-core-components-color-violet60);
  box-shadow: 0 0.25rem 1rem rgba(50, 14, 59, 0.08);
  color: var(--bob-core-components-color-sonic);

  padding-left: 1rem;
  font-size: 0.875rem;
`;

export const Dropdown = styled.div`
  display: ${({ showing }) => (showing ? 'block' : 'none')};
  padding: 1rem;
`;

export const Header = styled.div`
  padding: 1rem;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const StyledChevron = styled(Icon).attrs(() => ({
  name: 'Chevron',
  size: 'large',
}))`
  transform: rotate(${({ showing }) => (showing ? '270' : '90')}deg);
  justify-content: flex-end;
  margin-top: 0.5rem;
`;
