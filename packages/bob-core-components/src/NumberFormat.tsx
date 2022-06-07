import React from "react";
import { IProps } from "./numberFormat/numberFormat.types";

export const format = ({ options, locales, number }: IProps): string => {
  const defaultOptions = { style: "currency", currency: "NOK" };
  const defaultLocale = "nb-NO";
  return new Intl.NumberFormat(
    locales || defaultLocale,
    options || defaultOptions
  ).format(number);
};

const NumberFormat = (props: IProps): JSX.Element => {
  const formatted = format(props);
  return <>{formatted}</>;
};

export default NumberFormat;
