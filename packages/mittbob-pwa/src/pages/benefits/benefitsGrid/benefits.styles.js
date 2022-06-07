import styled from 'styled-components';
import { Card } from '@bob/core-components';
import { media } from '../../../app/app.styles';
import { Grid } from '../../../components/atomic';

export const StyledLogo = styled.img`
  height: 3.75rem;
`;

export const Component = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const BenefitProvidersWrapper = styled.div`
  display: flex;
  flex-direction: row;
  ${media.app} {
    display: unset;
  }
`;

export const SkeletonsContainer = styled.div`
  display: flex;
  padding: 0 0 1rem 0;
  flex-direction: column;
  > span {
    margin: 0.5rem 0;
  }
`;

export const LinkToOldBenefitsContainer = styled.div`
  padding: 2rem;
  display: flex;
  justify-content: flex-end;
`;

export const MemberItem = styled(Grid).attrs(() => ({ item: true }))`
  grid-column-start: span 2;
  ${media.app} {
    grid-column-start: unset;
  }
`;

export const NotMemberCard = styled(Card)`
  background-color: var(--bob-core-components-color-violet-darker);
  grid-column-start: span 2;
  ${media.app} {
    grid-column-start: unset;
  }
`;

export const NotMemberCardTitle = styled(Card.Header)`
  color: ${({theme}) => theme.variables.colors.snow};
`;

export const NotMemberCardContent = styled.span.attrs(() => ({
  className: 'bob-core-components-typography__regular--medium--snow',
}))``;

export const StyledGrid = styled(Grid)`
  grid-template-columns: repeat(auto-fill, minmax(18rem, max-content));
  ${media.app} {
    grid-template-columns: repeat(auto-fill, minmax(20rem, max-content));
  }
`;
