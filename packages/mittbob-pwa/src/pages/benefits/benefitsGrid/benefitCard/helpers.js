import React from 'react';
import parse from 'html-react-parser';
import {
  BacksideContainer,
  CardActions,
  CardHeader,
  CardLogo,
  FrontsideContainer,
} from './benefitCard.styles';
import { Button } from '../../../../components/atomic';
import Kicker from './Kicker';
import Use from './Use';

export const frontsideRenderer = ({
  onCallToAction,
  title,
  logo,
  textFrontpage,
  callToActionURL,
  callToActionText,
  kicker,
}) => Frontside => {
  return (
    <FrontsideContainer>
      <Frontside>
        <CardLogo>
          <img alt={title.value} src={logo.value.url} />
        </CardLogo>
        <CardHeader>{title && parse(title.value)}</CardHeader>
        {textFrontpage && parse(textFrontpage.value)}
        <CardActions kicker={kicker.value}>
          <Button
            fitContent
            variant={kicker.value ? 'tertiary' : 'primary'}
            data-href={callToActionURL.value}
            onClick={onCallToAction}
          >
            {callToActionText.value}
          </Button>
        </CardActions>
      </Frontside>
      {kicker.value && <Kicker>{kicker.value}</Kicker>}
    </FrontsideContainer>
  );
};

export const backsideRenderer = ({
  title,
  logo,
  textLandingPage,
  onBack,
}) => Backside => {
  return (
    <BacksideContainer>
      <Backside>
        <CardLogo>
          <img alt={title.value} src={logo.value.url} />
        </CardLogo>
        <CardHeader>{title && parse(title.value)}</CardHeader>
        {textLandingPage && parse(textLandingPage.value)}
      </Backside>
      <Use onBack={onBack} />
    </BacksideContainer>
  );
};
