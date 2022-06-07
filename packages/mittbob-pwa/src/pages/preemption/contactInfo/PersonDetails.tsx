import React from 'react';
import { Icon, Typography } from '@bob/core-components';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { RootState } from '../../../redux/rootState';
import { InlineFlexDiv, Info } from './contactInfo.styles';

const PersonDetails = () => {
  const { t } = useTranslation();

  const person = useSelector((store: RootState) => store.person.person);
  const _seniorityDate = useSelector((store: RootState) => store.person.seniority.seniorityDate);

  const getFormattedSeniorityDate = (): string => {
    if (!_seniorityDate) return '';
    return moment(_seniorityDate).format('DD.MMMM YYYY');
  };

  const givenName = person?.firstName;
  const sn = person?.lastName;
  const memberNumber = person?.memberNumber;
  const mobile = person?.mobile;
  const seniorityDate = getFormattedSeniorityDate();

  let date = 'Not found';
  if (seniorityDate) {
    const [day, month, year] = seniorityDate.split('.');
    date = moment()
      .day(day)
      .month(month)
      .year(parseInt(year, 10))
      .format('D.MMMM YYYY');
  }

  return (
    <InlineFlexDiv>
      <Icon name="Profile" />
      <Info>
        <Typography>{`${givenName} ${sn}`}</Typography>
        <Typography gutterBottom>{t('MOBILE_PERSON_DETAILS', { mobile })}</Typography>
        <Typography>{t('MEMBER_NO_PERSON_DETAILS', { memberNo: memberNumber })}</Typography>
        <Typography>{t('SENIORITY_PERSON_DETAILS', { date })}</Typography>
      </Info>
    </InlineFlexDiv>
  );
};

export default PersonDetails;
