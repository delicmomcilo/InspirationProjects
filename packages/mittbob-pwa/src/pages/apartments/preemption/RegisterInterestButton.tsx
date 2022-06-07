import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'src/components';
import actions from 'src/redux/actions';
import selectors from 'src/redux/selectors';
import { push } from 'connected-react-router';
import PATHS from '../../../router/paths';
import { IProps } from './registerInterestButton/registerInterestButton.types';

const RegisterInterestButton: React.FC<IProps> = ({ id }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const interest = useSelector(selectors.preemption.interest(id));
  const isDeleting = useSelector(selectors.preemption.getDeletingInterestLoading(id));

  const handleRegisterInterest = () => {
    dispatch(push(PATHS.PREEMPTION.replace(':id', id)));
  };
  const handleUnregisterInterest = () =>
    dispatch(actions.preemption.deleteInterest({ id, interestId: interest?.id }));

  return interest?.active && !interest?.isFixedPrice ? (
    <Button loading={isDeleting} variant="secondary" showArrow={false} onClick={handleUnregisterInterest}>
      {t('Trekk forkjøp')}
    </Button>
  ) : (
    <Button onClick={handleRegisterInterest}>
      {t('Meld forkjøp')}
    </Button>
  );
};

export default React.memo(RegisterInterestButton);
