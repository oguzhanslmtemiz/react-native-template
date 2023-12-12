import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

type Props = {};

const TailwindTest = (props: Props) => {
  return (
    <View className="bg-yellow-300">
      <Text className="text-3xl text-rose-700">TailwindTest</Text>
    </View>
  );
};

export default TailwindTest;

const styles = StyleSheet.create({});
