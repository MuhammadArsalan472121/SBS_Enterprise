import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';

export default function taskDescriptionScreen() {
  return (
    <View style={styles.container}>
      {/*----Title Image---*/}

      <View style={{height: '30%'}}>
        <Image
          style={styles.imageStyle}
          source={require('../assets/logo.png')}
        />
      </View>
      {/*----2nd Portion---*/}

      <View style={{height: '70%'}}>
        {/*----Title---*/}
        <View
          style={{
            height: '15%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={[styles.txtColor, {fontSize: 26, fontWeight: 'bold'}]}>
            {'Task Description'}
          </Text>
        </View>

        {/*----Task Detail---*/}

        <View
          style={{
            borderWidth: 1,
            // borderColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {/* <View style={{borderWidth:2,borderColor:'#ff00ff', height:'75%', alignItems: 'center'}}> */}
          <View style={{borderWidth:2, height:'75%',}}>
            <View style={styles.tasksView}>
              <ScrollView>
                <Text style={styles.txtColor}>
                  This is Task one Click to open details of this task, Lorem
                  Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry standard dummy
                  text ever since the 1500s, when an unknown printer took a
                  galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially unchanged.
                  It was popularized in the 1960s with the release of Leeriest
                  sheets containing Lorem Ipsum passages, and more recently with
                  desktop publishing software like Aldus PageMaker including
                  versions of Lorem Ipsum.
                </Text>
              </ScrollView>
            </View>
          </View>

          <TouchableOpacity activeOpacity={0.7} style={styles.cmpBtn}>
            <Text
              style={{
                color: '#000',
                fontWeight: 'bold',
                fontSize: 20,
                textAlign: 'center',
              }}>
              {'UPDATE'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    height: '100%',
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
  tasksView: {
    width: '90%',
    height: '90%',
    padding: 10,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#C5B000',
  },
  txtColor: {
    color: '#C5B000',
    fontSize: 20,
  },
  cmpBtn: {
    width: '60%',
    height:50,
    // padding:20,

    borderRadius: 50,
    backgroundColor: '#C5B000',
    justifyContent: 'center',
  },
});
