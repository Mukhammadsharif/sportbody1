import React from 'react';
import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
  View,
  Image,
} from 'react-native';
import BackgroundImage from '../assets/image-backs/main.png';
import {useNavigation} from '@react-navigation/native';
import {BackIcon, CalendarIcon} from '../helpers/Svgs';
import Kal from '../assets/image-backs/detail-image.png';

const {height} = Dimensions.get('window');

export default function Detail({route}) {
  const navigation = useNavigation();
  const {training, routeName} = route.params;
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ImageBackground source={BackgroundImage} style={styles.container}>
        <View style={styles.row}>
          <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
            <BackIcon />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Statistics')}>
            <CalendarIcon />
          </TouchableOpacity>
        </View>
        <Image source={Kal} style={styles.image} />

        <Text style={styles.title}>{training?.name}</Text>

        <ScrollView
          contentContainerStyle={{
            flex: 1,
            marginTop: 20,
            paddingHorizontal: 20,
          }}>
          <Text style={styles.name}>Описание: {training.description}</Text>

          <Text style={styles.name}>Длителность: {training.time}</Text>

          <Text style={styles.name}>Калория: {training.kkal} kkal</Text>
        </ScrollView>
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
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginTop: 15,
  },
  name: {
    fontFamily: 'Montserrat-Bold',
    color: 'white',
    fontSize: 20,
    marginTop: 15,
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  title: {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Montserrat-Bold',
    fontSize: 28,
  },
  image: {
    resizeMode: 'contain',
    width: '99%',
    alignSelf: 'center',
  },
  text: {
    position: 'absolute',
    bottom: 200,
    left: 50,
    color: 'white',
    fontFamily: 'Montserrat-Bold',
    fontSize: 40,
  },
});
