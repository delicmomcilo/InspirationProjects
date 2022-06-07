import styled from 'styled-components';
import { media } from '../../../app/app.styles';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;

  > button {
    margin: 0.25rem;
  }

  ${media.app} {
    flex-wrap: nowrap;
    overflow-y: auto;
    * {
      overflow-wrap: unset;
      word-break: normal;
    }
    > button:last-child {
      margin-right: 1rem;
    }
  }
`;

export default {
  Container,
};
