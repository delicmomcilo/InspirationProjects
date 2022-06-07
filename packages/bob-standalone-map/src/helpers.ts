import { UseFetchClientsReturnValue } from './types';
import { useEffect, useState } from 'react';

export const INFO_CARD_ID = "bob-standalone-map-info-card";


export const useFetchClients = (url: string): UseFetchClientsReturnValue => {
  const [state, setState] = useState<UseFetchClientsReturnValue>([
    null,
    null,
    false
  ]);
  useEffect(() => {
    const get = async () => {
      const response = await fetch(url);
      if (response.ok) {
        try {
          const json = await response.json();
          setState([json, null, false]);
        } catch (e) {
          setState([null, e.tsoString(), false]);
        }
      } else if (response) {
        setState([null, `${response.status} - ${response.statusText}`, false]);
      }
    };
    setState([null, null, true]);
    get();
  }, [url]);
  return state;
};