import React, {useEffect} from "react";
import {useTranslation} from "react-i18next";
import {useDispatch} from "react-redux";
import {push} from "connected-react-router";
import {useRouteMatch} from "react-router-dom";
import NavigationHeader from "../../components/atomic/NavigationHeader";
import { watchGet } from "../../redux/modules/thirdPartyInformation/actions";
import {
  Container,
} from "./thirdPartyInformation/thirdpartyinformation.styles";
import {useFeatureFlags} from "../../app/helpers";
import PATHS from "../../router/paths";
import ThirdPartyInformationGrid from "./thirdPartyInformation/ThirdPartyInfomationGrid";

const ThirdPartyInformation = (): JSX.Element => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { thirdPartyInformation: thirdPartyInformationFlag } = useFeatureFlags();
  const match = useRouteMatch();

  const goBack = () =>
    dispatch(
      push(
        `${match.path
          .split('/')
          .slice(0, -1)
          .join('/')}`,
      ),
    );

  useEffect(() => {
    dispatch(watchGet());
  }, [dispatch]);

  if (!thirdPartyInformationFlag) {
    dispatch(push(PATHS.HOME))
  }
  return (
    <NavigationHeader
      title={t(`Ligningsoppgaver`)}
      onClick={goBack}
      backButtonTitle={t('Tilbake')}
    >
      <Container container spacing={2} justifyContent="flex-start">
        <ThirdPartyInformationGrid />
      </Container>
    </NavigationHeader>
  );
};

export default ThirdPartyInformation;