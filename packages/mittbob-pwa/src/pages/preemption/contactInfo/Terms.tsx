import React, { useEffect } from 'react';
import { Accordion } from '@bob/core-components';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { watchGetPreemptionTerms } from '../../../redux/modules/umbraco/actions';
import { RootState } from '../../../redux/rootState';
import { ResponseNoChildren } from '../../../redux/modules/umbraco/types/sagas.types';
import Loader from './terms/Loader';
import parseUmbraco from './terms/parseUmbraco';

const Terms = (): JSX.Element => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const umbraco = useSelector((state: RootState) => state.umbraco);
  const terms = umbraco.preemptionTerms as unknown as ResponseNoChildren;

  useEffect(() => {
    dispatch(watchGetPreemptionTerms());
  }, [dispatch]);
  return (
    <Accordion open titleProps={{ color: 'violet' }} title={t('Betingelser')}>
      {umbraco.loading || !terms ? <Loader /> : parseUmbraco(terms)}
    </Accordion>
  );
};

export default Terms;
