import React, { Fragment } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function Home() {
  return (
    <Fragment>
      <View style={styles.container}>
        <Text>Welcome, John!</Text>
      </View>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
