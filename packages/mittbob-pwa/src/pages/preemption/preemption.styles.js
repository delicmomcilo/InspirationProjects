import styled from 'styled-components';
import { Button } from '../../components';

export const NavigationButtons = styled.div`
  display: flex;
  justify-content: space-between;
`;

NavigationButtons.Cancel = styled(Button).attrs(() => ({
  arrowPosition: Button.arrowPosition.LEFT,
  variant: 'tertiary',
}))``;

NavigationButtons.Continue = styled(Button).attrs(() => ({
  size: 'medium',
}))``;

export const Container = styled.div`
  padding: ${({ theme }) => theme.variables.sizes.doublePadding};
`;

export const InnerContainer = styled.div`
  max-width: 40rem;
  width: 100%;
  margin: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
