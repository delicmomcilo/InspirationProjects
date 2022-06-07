import React from 'react';
import { useTranslation } from 'react-i18next';
import { Actions, Container, Contents } from './preemptionWon/preemptionWon.styles';
import { IProps } from './preemptionWon/preemptionWon.types';

const PreemptionWon: React.FC<IProps> = ({ children, enabled }) => {
  const { t } = useTranslation();

  if (!enabled) return <>{children}</>;

  return (
    <Container>
      <Contents.Container>
        <Contents.Title>{t('Du har høyest ansiennitet!')}</Contents.Title>
        <Contents.Text>
          {t('Nå må du raskest mulig takke ja til boligen for å sikre at den blir din')}
        </Contents.Text>
        <Actions.Container>
          <Actions.Decline>{t('Takk nei')}</Actions.Decline>
          <Actions.Accept>{t('Kjøp boligen')}</Actions.Accept>
        </Actions.Container>
      </Contents.Container>
      {children}
    </Container>
  );
};

export default PreemptionWon;
