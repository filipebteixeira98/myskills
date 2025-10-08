import React, { Fragment } from 'react';
import { View, Text } from 'react-native';

export function Home() {
  return (
    <Fragment>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Hello, World!</Text>
      </View>
      <Text style={{ alignSelf: 'center', marginBottom: 20 }}>This is React Native</Text>
    </Fragment>
  );
}