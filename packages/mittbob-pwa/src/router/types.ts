import React from 'react';
export type Params = {
  id?: string
}

export type Route = {
  path: string;
  component: (props: any) => React.ReactNode;
  browserThemeColor?: string;
  protected?: boolean;
  routes?: Routes;
};

export type Routes = Array<Route>;
