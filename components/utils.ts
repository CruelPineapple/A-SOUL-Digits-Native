import { Dimensions } from 'react-native';

export enum Character {
  Ava = 'AVA',
  Bella = 'BELLA',
  Carol = 'CAROL',
  Diana = 'DIANA',
  Eillen = 'EILLEN',
}

export type CharacterProfile = {
  key: string;
  themeColor: string;
  fullName: string;
  vmid: string;
  poster: any;
};

// 适配设备，原始单位长度为 40，对应的设计屏幕宽度为 375
// 在其它比例的设备上等比放大
const originUnitSize = 40;
const originWindowWidth = 375;
const unitSizeRatio = originUnitSize / originWindowWidth;
const windowWidth = Dimensions.get('window').width;
export const DeviceUnitSize = unitSizeRatio * windowWidth;
export const PosterWidth = 6 * DeviceUnitSize;
export const PosterHeight = 9 * DeviceUnitSize;
export const CardContentHeight = 4 * DeviceUnitSize;

export const Characters: Record<Character, CharacterProfile> = {
  [Character.Ava]: {
    key: 'ava',
    themeColor: '#9ac8e2',
    fullName: '向晚AVA',
    vmid: '672346917',
    poster: require('./assets/1.webp'),
  },
  [Character.Bella]: {
    key: 'bella',
    themeColor: '#db7d74',
    fullName: '贝拉BELLA',
    vmid: '672353429',
    poster: require('./assets/2.webp'),
  },
  [Character.Carol]: {
    key: 'carol',
    themeColor: '#b8a6d9',
    fullName: '珈乐CAROL',
    vmid: '351609538',
    poster: require('./assets/3.webp'),
  },
  [Character.Diana]: {
    key: 'diana',
    themeColor: '#e799b0',
    fullName: '嘉然DIANA',
    vmid: '672328094',
    poster: require('./assets/4.webp'),
  },
  [Character.Eillen]: {
    key: 'eileen',
    themeColor: '#576690',
    fullName: '乃琳EILEEN',
    vmid: '672342685',
    poster: require('./assets/5.webp'),
  },
};
