import React from 'react';
import ModalDialog from 'src/components/ModalDialog';
import { Typography, Card, Button, Icon } from '@bob/core-components';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router';
import moment from 'moment';
import PATHS from '../../router/paths';
import { Confetti, Container } from './success/success.styles';
import { RootState } from '../../redux/rootState';

const Success = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const handleRedirect = (path: string) => () => {
    dispatch(push(path));
  };
  const preemption = useSelector((state: RootState) => state.ui.preemption.shared.preemption);
  const formattedDeadline = `${moment(preemption?.deadline).format('dddd D.MMMM')} kl ${moment(
    preemption?.deadline,
  ).format('hh.mm')}`;

  return (
    <Container>
      <ModalDialog
        beforeContent={<Confetti />}
        alignChildren="center"
        justifyChildren="center"
        open
        onClose={handleRedirect(PATHS.APARTMENTS)}
      >
        <Icon size="xx-large" name="Signature" />
        <Typography component="h2" color="violet" size="xx-large" gutterBottom>
          {t('Forkjop er meldt')}
        </Typography>
        <Typography>{t('PREEMPTION_SUCCESS_MESSAGE', { date: formattedDeadline })}</Typography>
        <Card.Actions>
          <Button variant="primary" onClick={handleRedirect(PATHS.APARTMENTS_INTERESTS)}>
            {t('Vis mine meldte forkjøp')}
          </Button>
          <Button variant="tertiary" onClick={handleRedirect(PATHS.APARTMENTS)}>
            {t('Tilbake til søk')}
          </Button>
        </Card.Actions>
      </ModalDialog>
    </Container>
  );
};

export default Success;
