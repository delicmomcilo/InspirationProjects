import React from "react";
import {useTranslation} from "react-i18next";
import {useSelector} from "react-redux";
import {browserName} from "detect-browser";
import Skeleton from "react-loading-skeleton";
import {Grid, Unhappy, Typography, List } from "@bob/core-components";
import {RootState} from "../../../redux/rootState";
import { XSHiddenGrid } from "./thirdpartyinformation.styles";
import {unsupportedBrowser} from "./helpers";
import ThirdPartyInformationListItem from "./ThirdPartyInformationListItem";

const ThirdPartyInformationGrid = (): JSX.Element => {
  const { t } = useTranslation();
  const loading = useSelector((s: RootState) => s.thirdPartyInformation.loading);
  const thirdPartyInformations = useSelector((s: RootState) => s.thirdPartyInformation.allThirdPartyInformation);
  const browser = browserName(window.navigator.userAgent);

  return (
    <Grid xs={12} item>
      <Grid container spacing={2} alignItems="flex-end">
        <Grid xs={12} item>
          <Grid container spacing={2}>
            <XSHiddenGrid item xs={12}>
              <Typography as="h1" color="violet" size="x-large">
                {t('Ligningsoppgaver')}
              </Typography>
            </XSHiddenGrid>
            <Grid item xs={12}>
              {unsupportedBrowser(browser)
                ? (
                  <>
                    <Typography as="p" color="rosso60">
                      {t('Åpne denne siden i en annen nettleser for å laste ned lignigsoppgave. Denne nettleseren støtter ikke nedlastning.')}
                    </Typography>
                  </>
                ) : (
                  <Typography as="p">
                    {t('På denne siden har du tilgang til din ligningsoppgave. Trykk på filen du ønsker å laste ned i listen under.')}
                  </Typography>
                )}
              {loading ? (
                <>
                  <Skeleton height="2.5rem" />
                  <Skeleton height="2.5rem" />
                  <Skeleton height="2.5rem" />
                </>
              ) : (
                thirdPartyInformations.length > 0
                  ?
                    (
                      <List>
                        {thirdPartyInformations.map(thirdPartyInformation => (
                          <ThirdPartyInformationListItem
                            key={thirdPartyInformation.id} 
                            thirdPartyInformation={thirdPartyInformation} 
                          />
                        ))}
                      </List>
                    )
                  : (
                    <Unhappy
                      iconName="Document"
                      iconProps={{ size: "xx-large" }}
                      title={t('Du har ingen ligningsoppgaver')}
                    />
                  )
              )}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    );
};

export default ThirdPartyInformationGrid;