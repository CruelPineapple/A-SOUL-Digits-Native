import React from 'react';
import { View } from 'react-native';
import { Card } from './card';
import { Characters } from './utils';
import { componentStyle } from './style';

export function CardColumn(): React.JSX.Element {
  return (
    <View style={componentStyle.cardColStyle}>
      {Object.values(Characters).map(p => (
        <Card key={p.key} profile={p} />
      ))}
    </View>
  );
}
