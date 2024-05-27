import React, { useEffect, useRef, useState } from 'react';
import { View, Animated, Pressable, Easing, Image } from 'react-native';
import { CardContentHeight, CharacterProfile } from './utils';
import { CardContent, ICardContentProps } from './card_content';
import { componentStyle } from './style';
import { getCharacterData } from '../api';
import { AxiosResponse } from 'axios';

export function Card({
  profile,
}: {
  profile: CharacterProfile;
}): React.JSX.Element {
  const posterTopOffsetAnim = useRef(new Animated.Value(0)).current;

  const [isCardOpen, setCardOpen] = useState(false);

  const fireCardAnim = (isOpen: boolean) => {
    if (isOpen) {
      Animated.timing(posterTopOffsetAnim, {
        toValue: CardContentHeight,
        easing: Easing.bezier(0.33, 1, 0.68, 1),
        duration: 500,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(posterTopOffsetAnim, {
        toValue: 0,
        easing: Easing.bezier(0.33, 1, 0.68, 1),
        duration: 500,
        useNativeDriver: false,
      }).start();
    }
  };

  const [cardContent, setCardContent] = useState<ICardContentProps>({
    status: 'failed',
    currentFans: '',
    todayFans: '',
    yesterdayFans: '',
    lastWeekFans: '',
  });

  // 卡片准备好的时候拉取一次数据
  // 卡片展开的时候更新数据

  const onCardPress = () => {
    fireCardAnim(!isCardOpen);
    setCardOpen(!isCardOpen);
    getCharacterData(profile.vmid, profile.key)
      .then(res => {
        updateCardContent(res);
      })
      .catch(e => console.log(e));
  };

  useEffect(() => {
    getCharacterData(profile.vmid, profile.key)
      .then(res => {
        updateCardContent(res);
      })
      .catch(e => console.log(e));
  }, [profile.key, profile.vmid]);

  const updateCardContent = (results: AxiosResponse<any, any>[]) => {
    const [todayRes, lastWeekRes, yesterdayRes, currentRes] = results;
    setCardContent({
      status: 'success',
      currentFans: currentRes.data.followers.toString() ?? '',
      todayFans: todayRes.data.today ?? '',
      lastWeekFans: lastWeekRes.data.lastweek ?? '',
      yesterdayFans: yesterdayRes.data.yesterday ?? '',
    });
  };

  const cardViewStyle = {
    ...componentStyle.cardViewStyle,
    backgroundColor: profile.themeColor,
  };

  const animatedPosterStyle = {
    ...componentStyle.absoluteViewStyle,
    top: posterTopOffsetAnim,
  };

  return (
    <View style={cardViewStyle}>
      <Pressable onPress={onCardPress}>
        <View>
          <CardContent content={cardContent} />
          <Animated.View style={animatedPosterStyle}>
            <Image style={componentStyle.imgStyle} source={profile.poster} />
          </Animated.View>
        </View>
      </Pressable>
    </View>
  );
}
