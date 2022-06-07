import styled from 'styled-components';
import Typography from '../Typography';

const buttonWidth = '7.5rem';

export const IconContainer = styled.span`
  svg {
    //fill: var(--bob-core-components-color-ash);
    //> * {
    //  fill: var(--bob-core-components-color-ash);
    //}
  }
`;

export const Number = styled.span`
  font-size: 2.5rem;
  font-weight: bold;
  color: var(--bob-core-components-color-violet-darker);
`;

export const GreenDot = styled.div`
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 1.25rem;
  position: absolute;
  right: 0;
  top: 1rem;
  background-color: var(--bob-core-components-color-forest);
`;

export const LowerRightIconContainer = styled.span`
  svg {
    height: auto;
    fill: var(--bob-core-components-color-violet-darker);
    position: absolute;
    width: 2.5rem;
    right: -0.5rem;
    bottom: 0;
  }
`;

export const Label = styled(Typography).attrs(() => ({
  textAlign: 'center',
  component: 'label',
  color: 'violet'
}))`
  max-width: ${buttonWidth};
  cursor: pointer;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0; //safari bug
`;

export const Button = styled.button`
  padding: 1rem;
  border: none;
  width: ${buttonWidth};
  height: ${buttonWidth};
  background: var(--bob-core-components-color-snow);
  border-radius: 50%;
  position: relative;
  box-shadow: 0 0 1.875rem var(--bob-core-components-color-flow-button-shadow);
  cursor: pointer;
  transition: transform 250ms cubic-bezier(0.78, 0.02, 0.58, 1),
    box-shadow 250ms cubic-bezier(0.78, 0.02, 0.58, 1);
  &:hover,
  &:active,
  &:focus {
    transform: translateY(-0.125rem);
    box-shadow: 0 0.25rem 1.875rem
      var(--bob-core-components-color-flow-button-shadow);
  }
  &:disabled {
    cursor: default;
    pointer-events: none;
    box-shadow: 0 0 1.875rem var(--bob-core-components-color-ash);
    ${Label} {
      color: var(--bob-core-components-color-ash);
    }
    ${IconContainer}, ${LowerRightIconContainer} {
      svg {
        fill: var(--bob-core-components-color-ash);
        > * {
          fill: var(--bob-core-components-color-ash);
        }
      }
    }
  }
`;
