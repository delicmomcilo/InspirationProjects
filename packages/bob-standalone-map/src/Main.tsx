import React, { useEffect, useMemo, useState } from "react";
import {
  Marker,
  IMarkerProps,
  GoogleAPI,
  mapEventHandler
} from "google-maps-react";
import {
  Container,
  Controls,
  Footer,
  Slider,
  RangeControl,
  StatusWrapper,
  FootNote
} from "./styles";
import {
  Autocomplete,
  Grid,
  ThemeProvider,
  Typography
} from "@bob/core-components";
import { useDebouncedCallback, useDebounce } from "use-debounce";
import point from "./point.png";
import WrappedMap from "./WrappedMap";
import { Client, IMain, IWrappedMap, YearRange } from "./types";
import { useFetchClients, INFO_CARD_ID } from "./helpers";
import { Option } from "@bob/core-components/src/autocomplete/autocomplete.types";
// TODO: Figure out how GlobalStyles and ThemeProvider work with mittbob-pwa which already have it in place.

const defaultTheme = {
  variables: {
    sizes: {
      mapSizes: {
        sliderWidth: 160,
        sliderLabelWidth: 112,
        footerHeight: 72,
        controlsMaxWidth: 480
      }
    }
  }
};

const Main = (props: IMain): JSX.Element => {
  const {
    maxWidth,
    maxHeight,
    height,
    width,
    googleApiProps,
    api,
    theme
  } = props;
  const [selectedMarker, setSelectedMarker] = useState<google.maps.Marker>(
    null!
  );
  const [selectedClient, setSelectedClient] = useState<Client>(null!);
  const [yearRange, setYearRange] = useState<YearRange>({ min: 0, max: 0 });
  const [infoWindowVisible, setInfoWindowVisible] = useState<boolean>(false);
  const [infoWindowImageLoaded, setInfoWindowImageLoaded] = useState<boolean>(
    false
  );
  const [infoWindowImageError, setInfoWindowImageError] = useState<boolean>(
    false
  );
  const [google, setGoogle] = useState<GoogleAPI>(null!);
  const [map, setMap] = useState<google.maps.Map>(null!);
  const [data, error, isLoading] = useFetchClients(api.clientsEndpoint);

  // const { data, error } = useSWR(api.clientsEndpoint, fetcher);
  const [list, uniqueFoundedYears] = useMemo(() => {
    if (data && data?.length > 0) {
      const sorted = data.slice().sort((a: Client, b: Client) => {
        const aYear = parseInt(a.foundedDate.split("-")[0], 10);
        const bYear = parseInt(b.foundedDate.split("-")[0], 10);
        if (aYear < bYear) {
          return -1;
        }
        if (aYear > bYear) {
          return 1;
        }
        return 0;
      });

      const uniqueFY = new Set<number>(
        sorted.map((s: Client) => parseInt(s.foundedDate.split("-")[0], 10))
      );
      return [sorted, [...uniqueFY]];
    }
    return [[], []];
  }, [data]);

  useEffect(() => {
    setYearRange({
      min: uniqueFoundedYears[0],
      max: uniqueFoundedYears[uniqueFoundedYears.length - 1]
    });
  }, [uniqueFoundedYears]);

  const handleOnMarkerClick = (
    props?: IMarkerProps,
    marker?: google.maps.Marker
  ) => {
    if (props) {
      setInfoWindowVisible(true);
      if (marker) setSelectedMarker(marker);
      const client = list.find((i: Client) => props.name === i.clientName);
      if (client) {
        setSelectedClient(client);
      } else {
        console.error("Could not find client with name ", props.name);
      }
    }
  };

  const [handleOnSliderChange] = useDebouncedCallback(
    ({ left, right }) => {
      const min =
        uniqueFoundedYears[Math.floor(left * (uniqueFoundedYears.length - 1))];
      const max =
        uniqueFoundedYears[Math.floor(right * (uniqueFoundedYears.length - 1))];
      setYearRange({ min, max });
    },
    250,
    { maxWait: 250 }
  );
  const getOptionLabel = (o: Option) => {
    const client = o as Client;
    return client.clientName;
  };

  const handleOnAutocompleteChange = (
    inputValue: string,
    value?: Option | null
  ) => {
    const item = value as Client;
    const marker = document.querySelector(
      `[title="marker_${item.id}"]`
    ) as HTMLDivElement;
    if (marker) {
      marker.click();
    }
  };

  const [filteredList, memoizedMarkers] = useMemo(() => {
    if (google && list) {
      const filteredList = list.filter((l: Client) => {
        const year = parseInt(l.foundedDate.split("-")[0], 10);
        return l.geoLocation && year >= yearRange.min && year <= yearRange.max;
      });
      const mems = filteredList.map((l: Client) => (
        <Marker
          title={`marker_${l.id}`}
          onClick={handleOnMarkerClick}
          name={l.clientName}
          position={{
            lat: parseFloat(l.geoLocation.split(",")[0]),
            lng: parseFloat(l.geoLocation.split(",")[1])
          }}
          icon={{
            url: point,
            anchor: new google.maps.Point(32, 32),
            scaledSize: new google.maps.Size(24, 24)
          }}
        />
      ));
      return [filteredList, mems];
    }
    return [[], []];
  }, [google, list, yearRange.max, yearRange.min]);
  const handleCloseInfoWindow = () => {
    setInfoWindowVisible(false);
  };

  const handleMapReady: mapEventHandler = (data, map) => {
    if (data?.google) setGoogle(data.google);
    if (map) setMap(map);
  };
  const markers = useDebounce<IWrappedMap["markers"]>(memoizedMarkers, 300);
  useEffect(() => {
    const cardElement = document.getElementById(INFO_CARD_ID) as HTMLDivElement;
    if (google && cardElement) {
      const handleOnInfoWindowClose = () => {
        setInfoWindowVisible(false);
      };
      const buttonElement = cardElement.firstChild as HTMLButtonElement;
      const listener = google.maps.event.addDomListener(
        buttonElement,
        "click",
        handleOnInfoWindowClose
      );

      const imageElement = cardElement.childNodes[2] as HTMLImageElement;
      const listener2 = google.maps.event.addDomListener(
        imageElement,
        "error",
        () => {
          setInfoWindowImageError(true);
        }
      );
      const listener3 = google.maps.event.addDomListener(
        imageElement,
        "load",
        () => {
          setInfoWindowImageLoaded(true);
        }
      );
      return () => {
        google.maps.event.removeListener(listener);
        google.maps.event.removeListener(listener2);
        google.maps.event.removeListener(listener3);
      };
    }
  });

  let content = (
    <StatusWrapper>
      <span className="bob-core-components-typography__regular--medium-1--violet">
        Laster kart...
      </span>
    </StatusWrapper>
  );
  if (error) {
    content = (
      <StatusWrapper>
        <span className="bob-core-components-typography__regular--medium-1--rosso">
          En feil har oppstått...
        </span>
      </StatusWrapper>
    );
  } else if (list) {
    content = (
      <WrappedMap
        googleApiProps={googleApiProps}
        selectedClient={selectedClient}
        selectedMarker={selectedMarker}
        infoWindowVisible={infoWindowVisible}
        infoWindowImageLoaded={infoWindowImageLoaded}
        infoWindowImageError={infoWindowImageError}
        markers={markers}
        map={map}
        theme={theme}
        onReady={handleMapReady}
        onCloseInfoWindow={handleCloseInfoWindow}
      />
    );
  }
  let ieMsg = "";
  if (
    navigator.userAgent.indexOf("MSIE") !== -1 ||
    navigator.appVersion.indexOf("Trident/") > -1
  ) {
    ieMsg = "Det er begrenset støtte for Internet Explorer i kartløsningen.";
  }
  return (
    <Container
      maxWidth={maxWidth}
      maxHeight={maxHeight}
      height={height}
      width={width}
    >
      <Typography>{ieMsg}</Typography>
      {content}
      <Controls>
        <Autocomplete
          onChange={handleOnAutocompleteChange}
          getOptionLabel={getOptionLabel}
          getEmptyListLabel={() => "Søket ditt ga ingen resultater..."}
          inputProps={{
            placeholder: "Søk på navnet til borettslaget eller sameiet",
            iconName: "SearchOutlined"
          }}
          options={filteredList}
        />
        <Footer>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4} md={4}>
              <Grid
                container
                alignItems="center"
                justifyContent="center"
              >
                <Grid item xs={12}>
                  <Typography gutterBottom color="violet" size="medium" fontWeight="regular">
                    Inflyttingsår
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Grid container alignItems="center" justifyContent="space-between">
                    <Grid item>
                      <Typography
                        gutterBottom
                        color="violet"
                        size="medium"
                        fontWeight="regular"
                      >
                        {yearRange.min}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography
                        gutterBottom
                        color="violet"
                        size="medium"
                        fontWeight="regular"
                      >
                        {yearRange.max}
                      </Typography>
                    </Grid>
                  </Grid>

                </Grid>
                <Grid item xs={12}>
                  <Slider
                    initialValue={{ left: 0, right: 1 }}
                    onChange={handleOnSliderChange}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Grid container>
                <Grid item xs={12}>
                  <Typography color="sonic" size="x-small" fontWeight="regular">
                    Å nei! Har du oppdaget en feil i karet? Gi oss gjerne et
                    vink på{" "}
                    <a href="mailto:kundesenter@bob.no">kundesenter@bob.no</a>
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography color="sonic" size="x-small" fontWeight="regular">
                    PS: Mange borettslag og sameier består av flere bygninger.
                    Foreløpig viser kartet bare én bygning per enhet.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Footer>
      </Controls>
    </Container>
  );
};

export default (props: IMain) => {
  const theme = { ...defaultTheme, ...(props.theme || {}) };
  return (
    <ThemeProvider theme={theme}>
      <Main {...props} theme={theme} />
    </ThemeProvider>
  );
};
