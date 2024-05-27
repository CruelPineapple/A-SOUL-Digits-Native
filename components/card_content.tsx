import React from 'react';
import { Text, View } from 'react-native';
import { componentStyle } from './style';

export interface ICardContentProps {
  status: string;
  currentFans: string;
  todayFans: string;
  yesterdayFans: string;
  lastWeekFans: string;
}

export function CardContent({
  content,
}: {
  content: ICardContentProps;
}): React.JSX.Element {
  const { cardContentStyle, cardContentTextStyle: textStyle } = componentStyle;
  if (content.status === 'success') {
    const { currentFans, todayFans, yesterdayFans, lastWeekFans } = content;
    const deltaToday = parseInt(currentFans, 10) - parseInt(todayFans, 10);
    const deltaYesterday =
      parseInt(todayFans, 10) - parseInt(yesterdayFans, 10);
    const deltaLastWeek = parseInt(todayFans, 10) - parseInt(lastWeekFans, 10);
    return (
      <View style={cardContentStyle}>
        <Text style={textStyle}>粉丝：{currentFans}</Text>
        <Text style={textStyle}>今日变化：{deltaToday}</Text>
        <Text style={textStyle}>昨日变化：{deltaYesterday}</Text>
        <Text style={textStyle}>本周变化：{deltaLastWeek}</Text>
      </View>
    );
  } else {
    return (
      <View style={cardContentStyle}>
        <Text style={textStyle}>获取失败</Text>
      </View>
    );
  }
}
