import React, {useEffect} from 'react';
import {View, Image, StyleSheet} from 'react-native';

export default function splashScreen({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('LoginScreen');
    }, 2000);
  });

  return (
    <View style={Styles.container}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#000',
        }}>
        <Image
          style={Styles.imageStyle}
          source={require('../assets/logo.png')}
        />
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imgBgStyle: {
    marginTop: 50,
    paddingTop: 140,
    alignItems: 'center',
    height: 400,
    width: 300,
  },
  imageStyle: {
    height: 250,
    width: 340,
  },
});
