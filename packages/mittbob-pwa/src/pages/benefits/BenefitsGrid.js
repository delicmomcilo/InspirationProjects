import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Button, Card } from '../../components/atomic';
import { watchGetMemberBenefits } from '../../redux/modules/umbraco/actions';
import BenefitLoaders from './benefitsGrid/BenefitLoaders';
import UmbracoBenefits from './benefitsGrid/UmbracoBenefits';
import {
  NotMemberCardContent,
  NotMemberCard,
  MemberItem,
  NotMemberCardTitle,
  StyledGrid as Grid,
} from './benefitsGrid/benefits.styles';
import {HF_ROLES} from '../../redux/modules/person/constants';
import bbl from '../../config/bbl';

const BenefitsGrid = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(watchGetMemberBenefits());
  }, [dispatch]);
  const { t } = useTranslation();
  const memberBenefits = useSelector(({ umbraco }) => umbraco.memberBenefits);
  const loading = useSelector(({ umbraco }) => umbraco.loading);
  const userAuth0 = useSelector((store) => store.auth0.user);

  const isMember = () => !!userAuth0?.role?.includes(HF_ROLES.MEMBER_PORTAL_USER);

  return (
    <div>
      <Grid container>
        {!isMember() && (
          <MemberItem>
            <NotMemberCard>
              <NotMemberCardTitle>{t('Medlemsfordeler på rekke og rad')}</NotMemberCardTitle>
              <NotMemberCardContent>{t('NOT_MEMBER_CONTENT')}</NotMemberCardContent>
              <Card.Actions>
                <Button as="a" href={bbl.becomeMemberUrl} fitContent>
                  {t('Bli medlem')}
                </Button>
              </Card.Actions>
            </NotMemberCard>
          </MemberItem>
        )}
        {loading || !memberBenefits ? (
          <BenefitLoaders />
        ) : (
          <UmbracoBenefits payload={memberBenefits} />
        )}
      </Grid>
    </div>
  );
};

export default BenefitsGrid;
