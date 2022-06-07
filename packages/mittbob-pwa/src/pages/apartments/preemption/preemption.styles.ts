import styled, { css } from 'styled-components';
import { Card } from '@bob/core-components';

export const QueueNumber = styled.span`
  background-color: ${({ theme }) => theme.variables.colors.violet};
  color: ${({ theme }) => theme.variables.colors.snow};
  padding: ${({ theme }) => theme.variables.sizes.halfPadding} ${({ theme }) => theme.variables.sizes.padding};
  border-radius: 3rem;
  margin-left: ${({ theme }) => theme.variables.sizes.halfPadding};
`;
export const MapContainer = styled.div`
  position: relative;
  height: 100%;
  min-height: 20rem;
`;

export const StyledCard = styled(Card)`
  ${({ disabled }) => disabled && css`
    pointer-events: none;
    opacity: 0.5;
  `}
`;

export const IframeMap = styled.iframe.attrs(() => ({
  frameBorder: '0',
}))`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const SpecialContainer = styled.div`
  background-color: ${({ theme }) => theme.variables.colors.mint};
  margin-bottom: -${({ theme }) => theme.variables.sizes.doublePadding};
  padding: 1rem ${({ theme }) => theme.variables.sizes.doublePadding};
  margin-left: -${({ theme }) => theme.variables.sizes.doublePadding};
  width: calc(100% + 4rem);
  height: calc(100% + ${({ theme }) => theme.variables.sizes.doublePadding});
`;
