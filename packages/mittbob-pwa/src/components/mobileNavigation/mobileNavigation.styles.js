import styled, { css } from 'styled-components';
import { media } from '../../app/app.styles';

const active = css`
  svg {
    &:first-child {
      display: none;
    }
    &:nth-child(2) {
      display: initial;
    }
  }
  color: var(--bob-core-components-color-violet);
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  //position: absolute;
  bottom: 0;
  background-color: transparent;
  height: 4.625rem;
  width: 100%;
  transition: 250ms;
  ${({ animationState }) => {
    if (animationState === 'entering' || animationState === 'entered')
      return 'transform: translateY(0)';
    return 'transform: translateY(210%)';
  }};

  &:before {
    content: '';
    width: 100%;
    z-index: -1;
    top: -1.75rem;
    position: absolute;
    height: 4.625rem;
    left: 0;
    background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.3) 0%, transparent 100%);
  }
`;

export const NavigationButton = styled.button`
  cursor: pointer;
  outline: none;
  flex-grow: 1;
  border: none;
  background-color: var(--bob-core-components-color-snow);
  position: relative;
  width: 20%;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--bob-core-components-color-ash);
  svg {
    &:nth-child(2) {
      display: none;
    }
  }
  ${({ selected }) =>
    selected && 'box-shadow: inset 0 -0.5rem 0 0 var(--bob-core-components-color-grain);'}
  ${({ selected }) => selected && active};

  &:active,
  &:hover {
    box-shadow: inset 0 -0.5rem 0 0 var(--bob-core-components-color-grain);
    ${active}
  }
  &:first-child {
    border-top-left-radius: 0.5rem;
  }
  &:last-child {
    border-top-right-radius: 0.5rem;
  }
  &:disabled {
    color: var(--bob-core-components-color-light-grey);
    pointer-events: none;
    svg {
      fill: var(--bob-core-components-color-light-grey);
    }
  }
`;

export const OuterContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 6.75rem;
  display: none;
  align-items: flex-end;
  bottom: 0;
  overflow: hidden;
  ${({ animationState }) => animationState !== 'entered' && 'pointer-events: none'};

  ${media.app} {
    display: flex;
  }
`;

export const HomeButtonContainer = styled.div`
  width: 20%;
  min-width: 6.2rem;
  display: flex;
  cursor: pointer;
  ${({ selected }) =>
    selected && 'border-bottom: solid 0.5rem var(--bob-core-components-color-grain);'}
  &:hover {
    border-bottom: solid 0.5rem var(--bob-core-components-color-grain);
  }
`;
export const LeftPadding = styled.div`
  flex-grow: 1;
  background-color: white;
`;
export const RightPadding = styled(LeftPadding)``;

export const RadialContainer = styled.div`
  border: none;
  max-width: 5.5rem;
  height: 100%;
  position: relative;
  width: 100%;
  border-top-right-radius: 2rem;
  border-top-left-radius: 2rem;
  background-color: transparent;
  background-image: radial-gradient(circle at 50% 0, rgba(222, 0, 0, 0) 2.25rem, white 2.25rem);
  &:after {
    content: '';
    position: absolute;
    width: calc(50% - 2rem);
    height: 100%;
    right: -0.1875rem;
    border-top-left-radius: 0.625rem;
    box-shadow: inset 0 0 0 1rem white;
    background-color: white;
  }

  &:before {
    content: '';
    position: absolute;
    width: calc(50% - 2rem);
    height: 100%;
    left: -0.1875rem;
    border-top-right-radius: 0.625rem;
    box-shadow: inset 0 0 0 1rem white;
    background-color: white;
  }
`;

export const HomeButton = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  width: 3.5rem;
  height: 3.5rem;
  background-color: var(--bob-core-components-color-violet);
  border-radius: 50%;
  position: absolute;
  left: 50%;
  top: 0;
  transform: translate3d(-50%, -50%, 0);

  svg {
    .primarytint {
      fill: var(--bob-core-components-color-snow);
    }
  }
`;
