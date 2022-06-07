import styled from 'styled-components';
import {Grid } from '@bob/core-components';

export const Container = styled(Grid)`
  padding: ${({theme}) => theme?.variables?.sizes.doublePadding };
`;