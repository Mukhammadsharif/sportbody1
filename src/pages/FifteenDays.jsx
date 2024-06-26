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
import {Burger, CalendarIcon, ChevronRight} from '../helpers/Svgs';
import {plan} from '../data/plan';
import Kal from '../assets/images/kal.png';
import {Calendar} from 'react-native-calendars';

const {height, width} = Dimensions.get('window');

export default function FifteenDays() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ImageBackground source={BackgroundImage} style={styles.container}>
        <View style={styles.row}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Burger />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Statistics')}>
            <CalendarIcon />
          </TouchableOpacity>
        </View>

        <Text style={styles.title}>15-дневный план</Text>

        <ScrollView
          contentContainerStyle={{
            flex: 1,
            marginTop: 20,
            paddingBottom: height * 1.5,
          }}>
          {plan.training.slice(15, 30).map((training, index) => (
            <TouchableOpacity
              key={index}
              onPress={() =>
                navigation.navigate('Detail', {
                  training,
                  routeName: 'FifteenDays',
                })
              }
              style={styles.button}>
              <Text style={styles.name}>{training.name}</Text>
              <TouchableOpacity>
                <ChevronRight />
              </TouchableOpacity>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <Image source={Kal} style={styles.image} />

        <Text style={styles.text}>
          {plan.training.slice(15, 30).reduce((total, activity) => {
            return total + activity.kkal;
          }, 0)}{' '}
          kkal
        </Text>
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
    color: 'black',
    fontSize: 12,
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
    width: '90%',
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
