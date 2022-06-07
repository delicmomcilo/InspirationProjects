import styled from 'styled-components';
import Icon from '../Icon';

export const StyledTileSet = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(50%, 1fr));
  grid-auto-rows: minmax(5.625rem, auto);
  grid-auto-flow: dense;
  padding: 0.625rem;
`;

export const StyledTileMenu = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TileHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const TopCircle = styled.div`
  width: 3.625rem;
  height: 3.625rem;
  background: var(--bob-core-components-color-snow);
  border-radius: 50%;
  box-shadow: -0.125rem -0.188rem 0.5rem 0.188rem var(--bob-core-components-color-eggplant20);
  padding: 0.5rem;
  fill: var(--bob-core-components-color-violet-darker);
  position: relative;
`;

export const TilesetHeaderTitle = styled.h2`
  color: var(--bob-core-components-color-violet);
  margin-top: 0.5rem;
  padding-left: 0.5rem;
`;

export const StyledIcon = styled(Icon)`
  height: 3.313rem;
  width: 3.313rem;
  top: -0.313rem;
  left: -0.313rem;
  position: relative;
  padding: 0.313rem;
`;
