import Skeleton from 'react-loading-skeleton';
import React from 'react';
import { InvoiceList, LoaderContainer, LoaderWrapper } from './invoices.styles';
import { List } from '../../components/atomic';

const Loader = () => (
  <InvoiceList>
    <LoaderWrapper>
      <List>
        {Array.from(Array(12).keys()).map(value => (
          <List.Item key={value}>
            <LoaderContainer>
              <Skeleton height="2rem" width="2rem" />
              <div>
                <Skeleton height="0.625rem" width="7.5rem" />
                <Skeleton height="0.5rem" width="3.75rem" />
              </div>
            </LoaderContainer>
          </List.Item>
        ))}
      </List>
    </LoaderWrapper>
  </InvoiceList>
);

export default Loader;
