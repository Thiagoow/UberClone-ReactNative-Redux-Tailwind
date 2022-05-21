import React from 'react';
import tw from 'twrnc';
import { SafeAreaView, View, Image } from 'react-native';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APY_KEY } from '@env';
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../slices/navSlices';

const Home = () => {
  const dispatch = useDispatch;

  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          style={{ width: 100, height: 100, resizeMode: 'contain' }}
          source={require('../assets/img/logo.svg')}
        />

        <GooglePlacesAutocomplete
          styles={{
            container: {
              flex: 2,
              marginBottom: 20
            },
            textInput: {
              fontSize: 18
            }
          }}
          query={{
            key: GOOGLE_MAPS_APY_KEY,
            language: 'en'
          }}
          placeholder="Where from?"
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
          minLength={2}
          fetchDetails={true}
          enablePoweredByContainer={false}
          returnKeyType={'search'}
          onPress={(data, details = null) => {
            dispatch(
              setOrigin({
                location: details.geometry.location,
                description: data.description
              })
            );

            dispatch(setDestination(null));
          }}
          requestUrl={{
            useOnPlatform: 'web', // or "all"
            url: 'https://maps.googleapis.com/maps/api', // or any proxy server that hits https://maps.googleapis.com/maps/api
            headers: {
              Authorization: GOOGLE_MAPS_APY_KEY
            }
          }}
        />

        <NavOptions />
      </View>
    </SafeAreaView>
  );
};

export default Home;
