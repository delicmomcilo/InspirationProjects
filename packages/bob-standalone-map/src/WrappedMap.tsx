import { GoogleApiWrapper, InfoWindow, Map } from "google-maps-react";
import { Typography, ThemeProvider } from "@bob/core-components";
import { styles } from "./mapConfig";
import { Dialog, Card } from "./styles";
import React, { useEffect, useState } from "react";
import { IWrappedMap } from "./types";

const INITIAL_BERGEN_POS = {
  lat: 60.3913,
  lng: 5.3221
};

const INFO_CARD_ID = "bob-standalone-map-info-card";

const WrappedMap = ({
  onReady,
  google,
  map,
  markers,
  selectedMarker,
  infoWindowVisible,
  infoWindowImageError,
  infoWindowImageLoaded,
  selectedClient,
  onCloseInfoWindow,
  theme
}: IWrappedMap): JSX.Element => {
  let phone = window.matchMedia("(max-width: 600px)").matches;
  const clientImageUrl = selectedClient?.metadata?.pictureUrls[0];
  const [dialogImageLoaded, setDialogImageLoaded] = useState(false);
  const [dialogImaageLoadError, setDialogImageLoadError] = useState(false);
  useEffect(() => {
    setDialogImageLoaded(false);
    setDialogImageLoadError(false);
  }, [clientImageUrl]);
  const handleOnDialogImageLoaded = (e: React.SyntheticEvent<HTMLImageElement>) => {
    if (e.currentTarget.naturalWidth <= 0) {
      setDialogImageLoadError(true);
    } else {
      setDialogImageLoaded(true);
    }
  };
  return (
    <>
      <Map
        disableDefaultUI
        styles={styles as google.maps.MapTypeStyle[]}
        google={google}
        initialCenter={INITIAL_BERGEN_POS}
        zoom={14}
        onReady={onReady}
      >
        {markers}
        {!phone && (
          <InfoWindow
            google={google}
            map={map}
            visible={infoWindowVisible}
            marker={selectedMarker}
            mapCenter={INITIAL_BERGEN_POS}
          >
            <ThemeProvider theme={theme}>
              <Card id={INFO_CARD_ID} onClose={onCloseInfoWindow}>
                <Card.Header>{selectedClient?.clientName}</Card.Header>
                {clientImageUrl && (
                  <Card.Image
                    fullWidth
                    style={{
                      display: infoWindowImageLoaded ? "initial" : "none",
                      maxHeight: "11.25rem"
                    }}
                    objectFit="cover"
                    alt="Illustrasjonsbilde av bygget"
                    src={clientImageUrl}
                  />
                )}
                {(infoWindowImageError || !clientImageUrl) && (
                  <Card.ImagePlaceholder
                    fullWidth
                    height="11.25rem"
                    title="Bilde ikke tilgjengelig for denne boligen."
                  />
                )}
                {!infoWindowImageError &&
                  clientImageUrl &&
                  !infoWindowImageLoaded && (
                    <Card.ImagePlaceholder
                      fullWidth
                      height="11.25rem"
                      title="Boligens bilde lastes..."
                    />
                  )}
                <Typography color="coal" size="medium" fontWeight="regular">
                  Innflyttingsår: {selectedClient?.foundedDate.split("-")[0]}
                </Typography>
              </Card>
            </ThemeProvider>
          </InfoWindow>
        )}
      </Map>
      {phone && (
        <Dialog
          open={infoWindowVisible}
          onClose={onCloseInfoWindow}
        >
          <Card.Header>{selectedClient?.clientName}</Card.Header>
          {clientImageUrl && (
            <Card.Image
              fullWidth
              style={{
                maxHeight: "11.25rem"
              }}
              objectFit="cover"
              onError={() => console.log("eerr")}
              onLoad={handleOnDialogImageLoaded}
              alt="Illustrasjonsbilde av bygget"
              src={clientImageUrl}
            />
          )}
          {(dialogImaageLoadError || !clientImageUrl) && (
            <Card.ImagePlaceholder
              fullWidth
              height="11.25rem"
              title="Bilde ikke tilgjengelig for denne boligen."
            />
          )}
          {!dialogImaageLoadError &&
            clientImageUrl &&
            !dialogImageLoaded && (
              <Card.ImagePlaceholder
                fullWidth
                height="11.25rem"
                title="Boligens bilde lastes..."
              />
            )}
          <Typography color="coal" size="medium" fontWeight="regular">
            Innflyttingsår: {selectedClient?.foundedDate.split("-")[0]}
          </Typography>
        </Dialog>
      )}
    </>
  );
};

export default GoogleApiWrapper(({ googleApiProps }) => ({
  apiKey: googleApiProps.apiKey,
  version: googleApiProps.version
}))(WrappedMap);
