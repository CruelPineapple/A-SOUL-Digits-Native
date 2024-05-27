import React from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { CardColumn } from './components/card_col';
import { componentStyle } from './components/style';

function App(): React.JSX.Element {
  // const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: '#282c34',
  };

  const { headerTextStyle, headerTextWrapperStyle } = componentStyle;

  return (
    <SafeAreaView style={backgroundStyle}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View style={headerTextWrapperStyle}>
          <Text style={headerTextStyle}>A-SOUL Digits</Text>
        </View>
        <CardColumn />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
