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

export default function dailyTasksScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View style={{height: '30%'}}>
        <Image
          style={styles.imageStyle}
          source={require('../assets/logo.png')}
        />
      </View>
      <View style={{height: '70%'}}>
        <View
          style={{
            height: '20%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={[styles.txtColor, {fontSize: 26, fontWeight: 'bold'}]}>
            {'Daily Tasks'}
          </Text>
        </View>
        <ScrollView>
          <View
            style={{
              borderWidth: 1,
              borderColor: '#fff',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{flexDirection: 'row', margin: 5, alignItems: 'center'}}>
              <TouchableOpacity
                onPress={() => navigation.navigate('TaskDescriptionScreen')}
                activeOpacity={0.7}
                style={styles.tasksView}>
                <Text style={styles.txtColor}>
                  {
                    'Task 1: \nThis is Task one Click to open details of this task.'
                  }
                </Text>
              </TouchableOpacity>

              <View>
                <TouchableOpacity activeOpacity={0.7} style={styles.cmpBtn}>
                  <Text
                    style={{
                      color: '#000',
                      fontWeight: 'bold',
                      fontSize: 18,
                      textAlign: 'center',
                    }}>
                    {'Finished'}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View
              style={{flexDirection: 'row', margin: 5, alignItems: 'center'}}>
              <TouchableOpacity
                onPress={() => navigation.navigate('TaskDescriptionScreen')}
                activeOpacity={0.7}
                style={styles.tasksView}>
                <Text style={styles.txtColor}>
                  {
                    'Task 1: \nThis is Task one Click to open details of this task.'
                  }
                </Text>
              </TouchableOpacity>

              <View>
                <TouchableOpacity activeOpacity={0.7} style={styles.cmpBtn}>
                  <Text
                    style={{
                      color: '#000',
                      fontWeight: 'bold',
                      fontSize: 18,
                      textAlign: 'center',
                    }}>
                    {'Finished'}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View
              style={{flexDirection: 'row', margin: 5, alignItems: 'center'}}>
              <TouchableOpacity
                onPress={() => navigation.navigate('TaskDescriptionScreen')}
                activeOpacity={0.7}
                style={styles.tasksView}>
                <Text style={styles.txtColor}>
                  {
                    'Task 1: \nThis is Task one Click to open details of this task.'
                  }
                </Text>
              </TouchableOpacity>

              <View>
                <TouchableOpacity activeOpacity={0.7} style={styles.cmpBtn}>
                  <Text
                    style={{
                      color: '#000',
                      fontWeight: 'bold',
                      fontSize: 18,
                      textAlign: 'center',
                    }}>
                    {'Finished'}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View
              style={{flexDirection: 'row', margin: 5, alignItems: 'center'}}>
              <TouchableOpacity
                onPress={() => navigation.navigate('TaskDescriptionScreen')}
                activeOpacity={0.7}
                style={styles.tasksView}>
                <Text style={styles.txtColor}>
                  {
                    'Task 1: \nThis is Task one Click to open details of this task.'
                  }
                </Text>
              </TouchableOpacity>

              <View>
                <TouchableOpacity activeOpacity={0.7} style={styles.cmpBtn}>
                  <Text
                    style={{
                      color: '#000',
                      fontWeight: 'bold',
                      fontSize: 18,
                      textAlign: 'center',
                    }}>
                    {'Finished'}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View
              style={{flexDirection: 'row', margin: 5, alignItems: 'center'}}>
              <TouchableOpacity
                onPress={() => navigation.navigate('TaskDescriptionScreen')}
                activeOpacity={0.7}
                style={styles.tasksView}>
                <Text style={styles.txtColor}>
                  {
                    'Task 1: \nThis is Task one Click to open details of this task.'
                  }
                </Text>
              </TouchableOpacity>

              <View>
                <TouchableOpacity activeOpacity={0.7} style={styles.cmpBtn}>
                  <Text
                    style={{
                      color: '#000',
                      fontWeight: 'bold',
                      fontSize: 18,
                      textAlign: 'center',
                    }}>
                    {'Finished'}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View
              style={{flexDirection: 'row', margin: 5, alignItems: 'center'}}>
              <TouchableOpacity
                onPress={() => navigation.navigate('TaskDescriptionScreen')}
                activeOpacity={0.7}
                style={styles.tasksView}>
                <Text style={styles.txtColor}>
                  {
                    'Task 1: \nThis is Task one Click to open details of this task.'
                  }
                </Text>
              </TouchableOpacity>

              <View>
                <TouchableOpacity activeOpacity={0.7} style={styles.cmpBtn}>
                  <Text
                    style={{
                      color: '#000',
                      fontWeight: 'bold',
                      fontSize: 18,
                      textAlign: 'center',
                    }}>
                    {'Finished'}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
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
    width: '70%',
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
    height: 40,
    width: '100%',
    marginLeft: 10,
    borderRadius: 50,
    backgroundColor: '#8E7E00',
    justifyContent: 'center',
  },
});
