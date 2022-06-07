import styled from 'styled-components';
import Button from '../Button';
import { media } from '../../../app/app.styles';

export const Container = styled.div`
  height: 100%;
`;

export const ButtonContainer = styled.div`
  display: none;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  background: white;
  height: 2rem;
  overflow: hidden;
  box-shadow: 0rem 0.4rem 1rem 0rem var(--bob-core-components-color-eggplant10);

  ${media.app} {
    display: flex;
  }
`;

export const TabButton = styled(Button)`
  flex: 1;
  border-right: 0.0625rem solid #e9e8ff;
  &:last-child {
    border-right: 0;
  }
  font-size: 10pt;
`;

export const BodyArea = styled.div`
  overflow: auto;
  min-height: 100%;
  display: flex;
  flex-wrap: wrap;
  ${media.app} {
    display: unset;
    height: calc(100% - 2rem);
  }
`;

export default Container;
