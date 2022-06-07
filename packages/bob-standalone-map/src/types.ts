import { GoogleAPI, mapEventHandler, Marker } from 'google-maps-react';
import { ReactNode } from 'react';

export interface Client {
  businessAddress: string;
  clientName: string;
  clientNo: number;
  clientType: { code: string; description: string };
  companyNumber: string;
  countryCode?: string;
  epost?: string;
  foundedDate: string;
  geoLocation: string;
  id: string;
  invoiceAddress: string;
  jointDebt?: string;
  lastChangeForetakReg?: string;
  mainClient: number;
  postalCode?: string;
  vatEligible: boolean;
  website: string;
  metadata: {
    pictureUrls: Array<string>
  }
}

export interface YearRange {
  min: number,
  max: number
}

export interface GoogleAPIProps {
  version: string;
  apiKey: string;
}

export interface Api {
  clientsEndpoint: string

}

export interface IMain {
  api: Api
  maxWidth?: string;
  maxHeight?: string;
  height?: string;
  width?: string;
  googleApiProps: GoogleAPIProps;
  theme?: any
}

export interface IWrappedMap {
  onReady: mapEventHandler;
  infoWindowVisible: boolean;
  infoWindowImageError: boolean;
  infoWindowImageLoaded: boolean;
  google: GoogleAPI;
  map: google.maps.Map;
  markers: Array<ReactNode>;
  selectedMarker: google.maps.Marker;
  selectedClient?: Client;
  onCloseInfoWindow: () => void;
  googleApiProps: GoogleAPIProps;
  theme?: any;
}

export type UseFetchClientsError = string;
export type UseFetchClientsResponse = Array<Client>

export type UseFetchClientsReturnValue = [null | UseFetchClientsResponse, null | string, boolean]

export type IContainer = Pick<
  IMain,
  "maxWidth" | "maxHeight" | "height" | "width"
>;
