import React from 'react';
import tw from 'twrnc';
import { View } from 'react-native';
import Map from '../components/Map';

const MapScreen = () => {
  return (
    <View>
      <View style={tw`h-1/2`}>
        <Map />
      </View>

      <View style={tw`h-1/2`}></View>
    </View>
  );
};

export default Map;
