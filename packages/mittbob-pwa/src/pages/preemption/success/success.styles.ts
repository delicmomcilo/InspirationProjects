import styled from 'styled-components';
import { ReactComponent as C } from './confetti.svg';

export const Container = styled.div`
  width: 40rem;
  height: 100%;
  overflow: hidden;
`;

export const Confetti = styled(C)`
  background-color: ${({ theme }) => theme.variables.colors.snow};
  position: fixed;
  width: 100%;
  height: 100%;
  g {
    path {
      &:nth-child(1n) {
        fill: ${({ theme }) => theme.variables.colors.forest60};
      }
      &:nth-child(2n) {
        fill: ${({ theme }) => theme.variables.colors.violet};
      }
      &:nth-child(3n) {
        fill: ${({ theme }) => theme.variables.colors.grain60};
      }
      &:nth-child(5n) {
        fill: ${({ theme }) => theme.variables.colors['violet60']};
      }
    }
  }
`;
