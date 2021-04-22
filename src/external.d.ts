declare module "react-country-flag" {
  import * as React from "react";
  export interface ReactCountryFlagProps<T>
    extends React.DetailedHTMLProps<React.LabelHTMLAttributes<T>, T> {
    cdnSuffix?: string;
    cdnUrl?: string;
    countryCode: string;
    svg?: boolean;
    style?: React.CSSProperties;
  }
  const ReactCountryFlag: React.FC<
    ReactCountryFlagProps<HTMLSpanElement | HTMLImageElement>
  > = ({ svg = false, style = {}, countryCode }) => React.ReactNode;
  export default ReactCountryFlag;
}
