import styled from 'styled-components';
import { media } from 'src/app/app.styles';
import { Button } from 'src/components';
import { ARROW_POSITION } from 'src/components/atomic/button/constants';

export const Container = styled.div`
  margin: 1rem;
  padding: 1rem;
  background-color: var(--bob-core-components-color-violet);
  display: flex;

  > section {
    margin: 0;
  }

  ${media.app} {
    flex-direction: column;
  }
`;

const ContentsContainer = styled.div``;

const ContentsTitle = styled.h2.attrs(() => ({
  className: 'bob-core-components-typography__bold--large--mint',
}))`
  margin-bottom: 1rem;
`;

const ContentsText = styled.p.attrs(() => ({
  className: 'bob-core-components-typography__regular--medium--snow',
}))``;

export const Contents = {
  Container: ContentsContainer,
  Title: ContentsTitle,
  Text: ContentsText,
};

const ActionsContainer = styled.div`
  margin: 1rem;
  display: flex;
  justify-content: space-around;
`;

const ActionsDecline = styled(Button).attrs(() => ({
  className: 'bob-core-components-typography__regular--medium-1--snow',
  size: 'medium',
  variant: 'secondary',
  arrowPosition: ARROW_POSITION.LEFT,
}))``;

const ActionsAccept = styled(Button).attrs(() => ({
  size: 'medium',
}))`
  margin-left: 1rem;
`;

export const Actions = {
  Container: ActionsContainer,
  Decline: ActionsDecline,
  Accept: ActionsAccept,
};
