import Skeleton from 'react-loading-skeleton';
import React from 'react';
import { List } from '../../../components/atomic';
import {
  LoaderHeader,
  LoaderStatus,
  LoaderContainer,
  LoaderItem,
  LoaderWrapper,
} from './loader/loader.styles';

const Loader = () => (
  <LoaderWrapper>
    <List>
      <List.Item>
        <LoaderStatus>
          <Skeleton height="0.875rem" width="16.25rem" />
        </LoaderStatus>
      </List.Item>
      <List.Item dense>
        <LoaderHeader>
          <Skeleton height="0.625rem" width="3.75rem" />
          <Skeleton height="1rem" width="12.5rem" />
        </LoaderHeader>
      </List.Item>
      <LoaderContainer>
        {Array.from(Array(12).keys()).map(value => (
          <List.Item dense key={value}>
            <LoaderItem>
              <Skeleton height="0.5rem" width="12.5rem" />
            </LoaderItem>
          </List.Item>
        ))}
      </LoaderContainer>
    </List>
  </LoaderWrapper>
);

export default Loader;
