import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import validation from './invoiceEmail/validation';
import { LowButton } from './details.styles';

import {
  Component,
  StatusMessage,
  InputWrapper,
  ButtonWrapper,
  StyledInput,
} from './invoiceEmail/invoiceEmail.styles';
import {
  watchPostInvoiceEmail,
  postInvoiceResetStatus,
} from '../../../redux/modules/invoices/actions';
import { RootState } from '../../../redux/rootState';
import { Params } from '../../../router/types';

const InvoiceEmail = (): JSX.Element => {
  const attemptedEmailSend = useSelector((store: RootState) => store.invoices.attemptedEmailSend);
  const isAuthenticated = useSelector((store: RootState) => store.auth0.isAuthenticated);
  const person = useSelector((store: RootState) => store.person.person);
  const userEmail = person?.email;
  const [email, setEmail] = useState(isAuthenticated ? userEmail : undefined);
  const [touched, setTouched] = useState(false);
  const loading = useSelector((store: RootState) => store.invoices.loadingDetails);
  const successFulEmailSend = useSelector((store: RootState) => store.invoices.successFulEmailSend);
  const dispatch = useDispatch();
  const match = useRouteMatch();
  const { t } = useTranslation();

  useEffect(() => {
    if (successFulEmailSend) {
      setTimeout(() => {
        dispatch(postInvoiceResetStatus());
      }, 5000);
    }
  }, [dispatch, successFulEmailSend]);

  const validateEmailText = (mailAddress?: string): string => {
    const validState = validation({ mail: mailAddress }, t);
    return validState && touched ? validState.mail.message : '';
  };

  const emailIsValid = (mailAddress?: string): boolean => {
    const valid = validation({ mail: mailAddress }, t);
    return valid !== undefined;
  };

  const getStatusMessage = (): string => {
    if (loading) return t('Sender...');
    if (attemptedEmailSend && successFulEmailSend && !loading) {
      return t('E-post ble sendt');
    }

    if (attemptedEmailSend && !successFulEmailSend && !loading) {
      return t('Noe gikk galt');
    }
    return '';
  };


  const handleInputChange = (e: React.SyntheticEvent<HTMLInputElement>): void => {
    setEmail(e.currentTarget.value)
  };
  const handleEmailClick = (): void => {
    const { id } = match.params as Params;
    if (id && email) {
      dispatch(watchPostInvoiceEmail(parseInt(id, 10), email));
    }
  };

  return (
    <Component>
      <InputWrapper>
        <StyledInput
          onChange={handleInputChange}
          value={email}
          label={t('E-post')}
          error={validateEmailText(email)}
          onBlur={() => setTouched(true)}
        />
        <StatusMessage>{getStatusMessage()}</StatusMessage>
      </InputWrapper>
      <ButtonWrapper>
        <LowButton variant="secondary" onClick={handleEmailClick} disabled={emailIsValid(email)}>
          {t('Send faktura på epost')}
        </LowButton>
      </ButtonWrapper>
    </Component>
  );
};

export default InvoiceEmail;
