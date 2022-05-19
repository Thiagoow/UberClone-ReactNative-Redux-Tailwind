import React from 'react';
import tw from 'twrnc';
import { SafeAreaView, View, Image } from 'react-native';
import NavOptions from '../components/NavOptions';

const Home = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          style={{ width: 100, height: 100, resizeMode: 'contain' }}
          source={require('../assets/img/logo.svg')}
        />

        <NavOptions />
      </View>
    </SafeAreaView>
  );
};

export default Home;
