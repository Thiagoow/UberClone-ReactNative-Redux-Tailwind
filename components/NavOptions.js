import React from 'react';
import tw from 'twrnc';
import { Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Icon } from '@rneui/base';
import { useSelector } from 'react-redux';
import { selectOrigin } from '../slices/navSlices';

const data = [
  {
    id: 123,
    title: 'Get a ride',
    img: require('../assets/img/car.webp'),
    screen: 'MapScreen'
  },
  {
    id: 456,
    title: 'Order food',
    img: require('../assets/img/food.png'),
    screen: 'EatScreen'
  }
];

const NavOptions = () => {
  const navigation = useNavigation();
  const origin = useSelector(selectOrigin);

  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={(i) => i.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          disabled={!origin}
          style={tw`m-3  p-2 pl-6 pb-8 pt-4 bg-gray-200 w-40`}
          onPress={() => navigation.navigate(item.screen)}
        >
          <View style={tw`${!origin && 'opacity-20'}`}>
            <Image
              style={{ width: 120, height: 120, resizeMode: 'contain' }}
              source={item.img}
            />

            <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>

            <Icon
              style={tw`p-2 bg-black rounded-full w-10 mt-4`}
              name="arrowright"
              color="white"
              type="antdesign"
            />
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;
