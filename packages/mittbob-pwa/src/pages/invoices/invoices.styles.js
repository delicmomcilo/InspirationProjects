import styled from 'styled-components';
import { Icon } from '../../components/atomic';
import { media } from '../../app/app.styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Component = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: ${props => (props.loading ? 'flex-start' : 'center')};
  ${media.app} {
    flex-direction: column;
    align-items: center;
  }
`;

export const InvoiceList = styled.div`
  width: 28rem;
  height: calc(100vh - 11.5rem);
  overflow: auto;
  ul {
    background-color: var(--bob-core-components-color-snow);
  }
  ${media.app} {
    width: 100%;
    height: unset;
    overflow: unset;
    ul {
      background-color: unset;
    }
  }
`;

export const InvoiceDetails = styled.div`
  display: flex;
  width: 70%;
  min-width: 40rem;
  top: 0;
  ${media.app} {
    display: none;
  }
`;

export const Buttons = styled.div`
  flex-shrink: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 3rem;
  padding-bottom: 6rem;
  > {
    &:first-child {
      margin-bottom: 1.5rem;
    }
  }
`;

export const StyledInvoiceIcon = styled(Icon).attrs(() => ({
  name: 'Document',
  size: 'xxx-large',
}))``;

export const CalendarIcon = styled(Icon).attrs(() => ({
  name: 'CalendarOutlined',
}))`
  .primarytint {
    fill: var(--bob-core-components-color-light-grey);
  }
`;

export const NoInvoices = styled.div`
  padding-top: 5rem;
  display: flex;
  ${media.app} {
    flex-direction: column;
  }
`;

export const NoInvoiceTextSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;

export const IconWrapper = styled.div`
  display: flex;
  width: 100%;
`;

export const YearHeader = styled.div`
  color: var(--bob-core-components-color-violet);
  padding-left: 3rem;
  padding-bottom: 1rem;
  padding-top: 1rem;
  background-color: var(--bob-core-components-color-mist20);
`;

export const NoInvoicesHeader = styled.div.attrs(() => ({
  className: 'bob-core-components-typography__bold--large-2--violet',
}))`
  text-align: left;
`;

export const NoInvoicesBody = styled.div.attrs(() => ({
  className: 'bob-core-components-typography__regular--medium-1--coal',
}))`
  padding-top: 1.7rem;
  padding-bottom: 1rem;
  text-align: left;
  width: 19rem;
`;

export const LoaderWrapper = styled.div`
  background-color: var(--bob-core-components-color-snow);
`;

export const LoaderContainer = styled.div`
  display: flex;
  > div {
    padding-left: 1rem;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;
