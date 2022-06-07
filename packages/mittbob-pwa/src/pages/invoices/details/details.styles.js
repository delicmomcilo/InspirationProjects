import styled from 'styled-components';
import { Button, BarDiagram, List, Icon } from '../../../components/atomic';
import { media } from '../../../app/app.styles';

export const MainPartWrapper = styled.div`
  background-color: white;
  margin-top: 1rem;
  padding: 1rem;
  ${media.app} {
    padding: unset;
  }
`;

export const InvoiceEmailWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  padding-left: 0.4rem;
  padding-top: 2rem;
`;

export const StyledBarDiagram = styled(BarDiagram)`
  margin-left: 3rem;
  margin-right: 3rem;
  margin-top: 2rem;
`;

export const Component = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 4rem;
  width: 90%;
  ${media.app} {
    width: 100%;
    padding-top: 1rem;
  }
`;

export const FlexMaxWidthRow = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: flex-end;
  ${media.app} {
    justify-content: center;
  }
`;

export const RoundFloatingContainer = styled.div.attrs(() => ({
  className: 'bob-core-components-typography__bold--x-large--violet',
}))`
  align-self: center;
  width: 8.75rem;
  height: 8.75rem;
  background: var(--bob-core-components-color-snow);
  border-radius: 50%;
  box-shadow: 0 0 1.875rem var(--bob-core-components-color-flow-button-shadow);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const WarningIcon = styled(Icon).attrs(() => ({
  name: 'Warning',
  variant: 'warning',
}))`
  vertical-align: bottom;
  fill: var(--bob-core-components-color-snow);
  stroke: var(--bob-core-components-color-coal);
`;

export const CalendarIcon = styled(Icon).attrs(() => ({
  name: 'CalendarOutlined',
  color: 'tertiary',
}))`
  background-color: var(--bob-core-components-color-snow);
`;

export const LowButton = styled(Button).attrs(() => ({
  size: 'medium',
}))`
  white-space: nowrap;
`;

export const Item = styled(List.Item)``;
export const SumItem = styled(List.Item)`
  * {
    font-weight: bold;
  }
  padding-bottom: 1rem;
`;
