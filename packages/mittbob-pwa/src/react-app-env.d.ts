// eslint-disable-next-line
/// <reference types="react-scripts" />

import * as React from 'react';

declare module 'react' {
  // Override forwardRef declaration by having `P` default to `any` instead of `{}`
  export function forwardRef<T, P = any>(
    render: ForwardRefRenderFunction<T, P>,
  ): ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<T>>;
}

declare global {
  interface Window {
    Keycloak: any;
    dataLayer: Array<any>
  }
}
