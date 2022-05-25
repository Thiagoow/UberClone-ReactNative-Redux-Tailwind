import React from 'react';
import tw from 'twrnc';
import { View } from 'react-native';
import Map from '../components/Map';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const MapScreen = () => {
  const Stack = createNativeStackNavigator();

  return (
    <View>
      <View style={tw`h-1/2`}>
        <Map />
      </View>

      <View style={tw`h-1/2`}></View>
    </View>
  );
};

export default MapScreen;
