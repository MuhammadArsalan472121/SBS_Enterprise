import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';

export default function loginScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Image style={styles.imageStyle} source={require('../assets/logo.png')} />
      <KeyboardAwareScrollView>
        <View style={styles.LoginView}>
          <TextInput
            style={[styles.textInput, {marginTop: 60}]}
            placeholderTextColor={'#BC9D03'}
            placeholder={'UserName'}
          />
        </View>
        <View style={styles.LoginView}>
          <TextInput
            secureTextEntry
            style={styles.textInput}
            placeholderTextColor={'#BC9D03'}
            placeholder={'Password'}
          />
        </View>
      </KeyboardAwareScrollView>

      <View style={styles.btnView}>
        <TouchableOpacity onPress={()=>navigation.navigate('DailyTasksScreen')} activeOpacity={0.5} style={styles.btnBg}>
          <Text style={styles.buttonFont}>{'LOGIN'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    borderWidth: 6,
    borderColor: '#F8D203',
    height: '100%',
  },

  imageStyle: {
    margin: 5,
    alignSelf: 'center',
    width: '80%',
    height: 220,
  },
  LoginView: {
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 20,
    padding: 15,
    fontSize: 25,
    borderColor: '#BC9D03',
    color: '#F8D203',
  },
  btnView: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  btnBg: {
    width: '40%',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ff2',
    backgroundColor: '#F8D209',
    borderRadius: 30,
    justifyContent: 'center',
  },
  buttonFont: {
    fontSize: 24,
    padding: 10,
    fontWeight: 'bold',
    color: '#000000',
  },
});
