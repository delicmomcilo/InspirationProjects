import React from "react";
import moment from "moment";
import {useTranslation} from "react-i18next";
import {useDispatch} from "react-redux";
import {browserName} from "detect-browser";
import {Grid, Icon, Typography} from "@bob/core-components";
import {IProps} from "./thirdpartyinformation.types";
import {ListItemAnchorStyled} from "./thirdpartyinformation.styles";
import {useMedia} from "../../../app/app.styles";
import { watchGetThirdPartyInformationFile } from "../../../redux/modules/thirdPartyInformation/actions";
import {unsupportedBrowser} from "./helpers";

const ThirdPartyInformationListItem = ({thirdPartyInformation}: IProps): JSX.Element => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { isMobile } = useMedia();
  const browser = browserName(window.navigator.userAgent);

  const handleThirdPartyInformationClick = (id: number): void => {
    if (id) {
      dispatch(watchGetThirdPartyInformationFile(id));
    }
  };

  return (
    <ListItemAnchorStyled
      onClick={() => handleThirdPartyInformationClick(thirdPartyInformation.id)}
      read={!thirdPartyInformation.isRead}
      disabled={!thirdPartyInformation.availableForDownload || unsupportedBrowser(browser)}
      dense
      icon={<Icon name="Binder" />}
    >
      <Grid container alignItems="center">
        <Grid item>
          <Grid container direction="column">
            <Grid item xs={12}>
              <Typography fontWeight='semibold' size='large' color="violet">
                {`${thirdPartyInformation.year} - ${thirdPartyInformation.unitAddress} ${!isMobile ? (`(Registrert: ${moment(thirdPartyInformation.registered).format('DD.MM.yyyy')})`) : ''}`}
              </Typography>
              {isMobile && (
                <Typography gutterBottom size='medium' color="violet">
                  {`Registrert: ${moment(thirdPartyInformation.registered).format('DD.MM.yyyy')}`}
                </Typography>
              )}
              {(!thirdPartyInformation.availableForDownload || unsupportedBrowser(browser)) ? (
                <Typography size="medium" color="light-grey">
                  {t('Denne filen er ikke tilgjengelig')}
                </Typography>
              ) : (
                <Typography size="medium" color="light-grey">
                  {t('Klikk her for å laste ned')}
                </Typography>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </ListItemAnchorStyled>
  );
  }

  export default ThirdPartyInformationListItem;