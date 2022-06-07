import styled from 'styled-components';
import { isForeclosed, isOverdue } from '../../helpers';

const bg = props => {
  if (isForeclosed(props.invoice) || isOverdue(props.invoice))
    return 'var(--bob-core-components-color-rosso20)';
  return 'var(--bob-core-components-color-snow)';
};

export const Component = styled.div.attrs(() => ({
  className: 'bob-core-components-typography__regular--large--coal',
}))`
  background-color: ${bg};
  width: 100%;
  align-items: center;
  display: flex;
  border-radius: 0.1875rem;
  padding: 2rem;

  justify-content: left;
  & > div {
    display: flex;
    align-items: center;
  }
`;

export const StatusText = styled.span.attrs(({ invoice }) => ({
  className:
    isForeclosed(invoice) || isOverdue(invoice)
      ? 'bob-core-components-typography__bold--large--rosso60'
      : 'bob-core-components-typography__semibold--large--violet',
}))`
  padding-left: 1rem;
  margin-top: 0.6rem;
`;

export const StatusWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
`;

// export const WarningIcon = styled(Icon)`
//   padding-left: 1rem;
//   margin-top: 0.6rem;
// `;
