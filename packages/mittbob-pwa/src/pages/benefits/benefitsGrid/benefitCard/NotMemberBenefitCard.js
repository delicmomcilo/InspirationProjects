import parse from 'html-react-parser';
import React from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { Button, Card } from '../../../../components/atomic';
import { CardActions, CardHeader, CardLogo } from './benefitCard.styles';
import {
  StyledCard,
  MembersOnly,
} from './notMemberBenefitCard/notMemberBenefitCard.styles';
import bbl from '../../../../config/bbl';

const NotMemberBenefitCard = ({ title, logo, textFrontpage }) => {
  const { t } = useTranslation();
  return (
    <StyledCard>
      <CardLogo>
        <img alt={title.value} src={logo.value.url} />
      </CardLogo>
      <CardHeader>{title && parse(title.value)}</CardHeader>
      {textFrontpage && parse(textFrontpage.value)}
      <CardActions>
        <Card.Actions>
          <MembersOnly>{t('Kun for medlemmer')}</MembersOnly>
          <Button
            variant="secondary"
            as="a"
            href={bbl.becomeMemberUrl}
            fitContent
          >
            {t('Bli medlem i BOB')}
          </Button>
        </Card.Actions>
      </CardActions>
    </StyledCard>
  );
};

NotMemberBenefitCard.propTypes = {
  title: PropTypes.shape({
    value: PropTypes.string,
  }).isRequired,
  logo: PropTypes.shape({
    value: PropTypes.shape({
      url: PropTypes.string,
    }),
  }).isRequired,
  textFrontpage: PropTypes.shape({
    value: PropTypes.string,
  }).isRequired,
};

export default NotMemberBenefitCard;
