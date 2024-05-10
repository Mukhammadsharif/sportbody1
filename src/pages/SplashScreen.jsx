import React from 'react';
import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import BackgroundImage from '../assets/image-backs/Scroll.png';
import {useNavigation} from '@react-navigation/native';

const {height, width} = Dimensions.get('window');

export default function SplashScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ImageBackground source={BackgroundImage} style={styles.container}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Statistics')}
          style={styles.button}>
          <Text style={styles.title}>Начать</Text>
        </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  container: {
    flex: 1,
    height: height,
    justifyContent: 'center',
  },
  button: {
    alignSelf: 'center',
    width: '80%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
    marginBottom: 50,
  },
  title: {
    fontFamily: 'Montserrat-Bold',
    color: 'black',
  },
});
