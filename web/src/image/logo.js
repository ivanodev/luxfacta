import LogoWMS from './logo/LogoWMS6.png';
import LogoWinkel from './logo/LogoWinkel.png';

export const ImageLogoWMS = LogoWMS;
export const ImageLogoWinkel = LogoWinkel;

export function GetLogo( name ) {

    switch ( name ) {

        case 'wms'    : return ImageLogoWMS;
        case 'winkel' : return ImageLogoWinkel;
        default       : return null;

    }

}