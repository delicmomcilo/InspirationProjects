type Routes = Array<{
  path: string;
  component: (props: any) => React.ReactNode;
  browserThemeColor?: string;
  protected?: boolean;
  routes?: Routes;
}>;
