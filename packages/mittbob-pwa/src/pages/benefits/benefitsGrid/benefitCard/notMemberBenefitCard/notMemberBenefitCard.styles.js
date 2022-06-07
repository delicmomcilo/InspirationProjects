import styled from 'styled-components';
import { Card } from '../../../../../components/atomic';

export const StyledCard = styled(Card)`
  overflow-y: unset;
`;

export const MembersOnly = styled.span.attrs(() => ({
  className: 'bob-core-components-typography__light--medium--violet',
}))`
  align-self: center;
`;
