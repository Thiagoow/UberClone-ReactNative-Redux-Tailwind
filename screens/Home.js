import React from 'react';
import { StyleSheet, SafeAreaView, View, Image } from 'react-native';
import tw from 'twrnc';

const Home = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          style={{ width: 100, height: 100, resizeMode: 'contain' }}
          source={require('../assets/img/logo.svg')}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
