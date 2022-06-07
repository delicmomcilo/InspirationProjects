import Skeleton from 'react-loading-skeleton';
import React, { memo } from 'react';
import { Grid, Card } from '../../../components/atomic';
import { CardLogoLoader } from './benefitCard/benefitCard.styles';
import { SkeletonsContainer } from './benefits.styles';

const BenefitLoaders = memo(() => {
  const arr = new Array(12).fill(0);
  const content = arr.map((i, index) => (
    <Grid key={`loader_item_${i + index}`} item>
      <Card>
        <CardLogoLoader>
          <Skeleton width="2rem" height="2rem" circle />
        </CardLogoLoader>
        <SkeletonsContainer>
          {arr.map(
            (o, idx) =>
              Math.random() > 0.5 && (
                <Skeleton
                  key={`skeleton_item_loader_${o + idx}`}
                  height="0.75rem"
                />
              ),
          )}
        </SkeletonsContainer>
      </Card>
    </Grid>
  ));
  return <>{content}</>;
});

export default BenefitLoaders;
