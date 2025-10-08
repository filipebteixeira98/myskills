import React, { Fragment } from 'react';
import { Text, StyleSheet, SafeAreaView } from 'react-native';

export function Home() {
  return (
    <Fragment>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Welcome, John!</Text>
      </SafeAreaView>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#121015',
  },
  title: {
    color: '#fff',
  }
});
