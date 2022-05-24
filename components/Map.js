import React from 'react';
import tw from 'twrnc';
import MapView, { Marker } from 'react-native-maps';
import { useSelector } from 'react-redux';
import { selectOrigin } from '../slices/navSlices';

const Map = () => {
  const origin = useSelector(selectOrigin);

  return (
    <MapView
      provider="google"
      style={tw`flex-1`}
      mapType="mutedStandard"
      initialRegion={{
        latitude: origin.location.lat,
        longitude: origin.location.log,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005
      }}
    >
      {origin?.location && (
        <Marker
          coordinate={{
            latitude: origin.location.lat,
            longitude: origin.location.log
          }}
          title="Origin"
          description={origin.description}
          identifier="origin"
        />
      )}
    </MapView>
  );
};

export default Map;
