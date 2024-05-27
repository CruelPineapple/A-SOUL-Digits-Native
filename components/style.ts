import { ViewStyle, StyleSheet, ImageStyle, TextStyle } from 'react-native';
import {
  CardContentHeight,
  PosterHeight,
  PosterWidth,
  DeviceUnitSize,
} from './utils';

interface ComponentStyle {
  cardColStyle: ViewStyle;
  imgStyle: ImageStyle;
  cardViewStyle: ViewStyle;
  cardContentStyle: ViewStyle;
  cardContentTextStyle: TextStyle;
  absoluteViewStyle: ViewStyle;
  headerTextStyle: TextStyle;
  headerTextWrapperStyle: ViewStyle;
}

export const componentStyle = StyleSheet.create<ComponentStyle>({
  cardColStyle: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  cardViewStyle: {
    width: PosterWidth,
    height: PosterHeight,
    marginBottom: Math.floor(DeviceUnitSize / 3),
    marginTop: Math.floor(DeviceUnitSize / 3),
    overflow: 'hidden',
  },
  imgStyle: { width: PosterWidth, height: PosterHeight },
  cardContentStyle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: CardContentHeight,
  },
  cardContentTextStyle: {
    color: 'white',
    fontSize: DeviceUnitSize / 2,
  },
  absoluteViewStyle: {
    position: 'absolute',
  },
  headerTextStyle: {
    fontSize: Math.floor((DeviceUnitSize / 3) * 5),
    color: '#fc966e',
    textAlign: 'center',
  },
  headerTextWrapperStyle: {
    margin: 'auto',
    width: Math.floor((DeviceUnitSize / 3) * 19),
  },
});
