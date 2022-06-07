import styled, { css } from 'styled-components';
import { Card } from '../../../../components/atomic';

export const CardLogo = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--bob-core-components-color-snow);
  margin-left: -2rem;
  margin-right: -2rem;
  margin-top: -2rem;
  img {
    max-width: 100%;
  }
`;

export const CardLogoLoader = styled.div`
  display: flex;
  justify-content: center;
`;
export const CardHeader = styled.div.attrs(() => ({
  className: 'bob-core-components-typography__bold--large--snow',
}))`
  margin-left: -2rem;
  margin-right: -2rem;
  margin-bottom: 1rem;
  padding: 0.5rem 2rem;
  text-align: center;
  background-color: var(--bob-core-components-color-violet-darker);
`;

export const FrontsideContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  > * {
    width: 100%;
  }
`;

export const BacksideContainer = styled.div`
  position: relative;
  width: 100%;
  > * {
    &:first-child {
      z-index: 1;
      color: var(--bob-core-components-color-snow);
      background-color: var(--bob-core-components-color-violet-darker);
      a {
        color: var(--bob-core-components-color-snow);
      }
    }
  }
`;
export const CardActions = styled(Card.Actions)`
  margin-bottom: -1rem;
  > button,
  a {
    align-self: center;
  }
  ${({ kicker }) =>
    kicker &&
    css`
      > button,
      a {
        align-self: flex-end;
        //padding-left: 4rem;
      }
    `};
`;
