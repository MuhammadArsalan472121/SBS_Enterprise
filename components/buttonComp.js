import React from 'react';
import {View, Text, ImageBackground, StyleSheet} from 'react-native';

export default function buttonComp({BTNTxt}) {
  return (
    <View style={styles.btnBg}>
      <Text style={styles.buttonFont}>{'LOGIN'}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  btnBg: {
    borderWidth: 1,
    borderColor: '#F8D203',
    backgroundColor: '#F8D209',
    borderRadius:30,
    justifyContent:'center'
  },
  buttonFont: {
    fontSize: 24,
    padding:10,
    fontWeight: 'bold',
    color: '#000000',
  },
});
