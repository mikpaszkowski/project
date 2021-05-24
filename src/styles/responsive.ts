import { breakPoints } from "./constants";

interface DeviceResponsive {
  mobileSmall: string;
  mobileMedium: string;
  mobileLarge: string;
  tablet: string;
  tabletLarge: string;
  laptopSmall: string;
  laptopLarge: string;
}

export const device: DeviceResponsive = {
  mobileSmall: `(max-width: ${breakPoints.mobileSmall})`,
  mobileMedium: `(max-width: ${breakPoints.mobileMedium})`,
  mobileLarge: `(max-width: ${breakPoints.mobileLarge})`,
  tablet: `(max-width: ${breakPoints.tablet})`,
  tabletLarge: `(max-width: ${breakPoints.tabletLarge})`,
  laptopSmall: `(max-width: ${breakPoints.laptopSmall})`,
  laptopLarge: `(max-width: ${breakPoints.laptopLarge})`,
};
