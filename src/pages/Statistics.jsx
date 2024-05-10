import React from 'react';
import BackgroundImage from '../assets/image-backs/Friends.png';
import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import LeftArrow from '../svgs/left-arrow';
import RightArrow from '../svgs/right-arrow';
import {Burger} from '../helpers/Svgs';
import {useNavigation} from '@react-navigation/native';
import {plan} from '../data/plan';

const {height, width} = Dimensions.get('window');

LocaleConfig.locales.ru = {
  monthNames: [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
  ],
  monthNamesShort: [
    'Янв.',
    'Февр.',
    'Март',
    'Апр.',
    'Май',
    'Июнь',
    'Июль',
    'Авг.',
    'Сент.',
    'Окт.',
    'Нояб.',
    'Дек.',
  ],
  dayNames: [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
  ],
  dayNamesShort: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
  today: 'Сегодня',
};
LocaleConfig.defaultLocale = 'ru';

export default function Statistics() {
  const navigation = useNavigation();
  const [selected, setSelected] = React.useState('');
  const [selectedDay, setSelectedDay] = React.useState('');
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ImageBackground source={BackgroundImage} style={styles.container}>
        <View style={styles.row}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Burger />
          </TouchableOpacity>
        </View>

        <Text style={styles.title}>Выберете дату</Text>

        <ScrollView contentContainerStyle={styles.calendarContainer}>
          <Calendar
            onDayPress={day => {
              setSelected(day.dateString);
              setSelectedDay(day?.day);
            }}
            markedDates={{
              [selected]: {
                selected: true,
                disableTouchEvent: true,
                selectedDotColor: 'orange',
              },
            }}
            renderArrow={direction =>
              direction === 'left' ? <LeftArrow /> : <RightArrow />
            }
            firstDay={1}
            theme={{
              backgroundColor: '#ffffff',
              calendarBackground: '#ffffff',
              textSectionTitleColor: '#b6c1cd',
              selectedDayBackgroundColor: '#EB3223',
              selectedDayTextColor: '#ffffff',
              todayTextColor: '#00adf5',
              dayTextColor: '#2d4150',
            }}
            style={{borderRadius: 8}}
          />

          {selectedDay ? (
            <TouchableOpacity style={styles.card}>
              <Text style={styles.name}>
                Название: {plan.training[selectedDay - 1].name}
              </Text>

              <Text style={styles.name}>
                Описание: {plan.training[selectedDay - 1].description}
              </Text>

              <Text style={styles.name}>
                Длителность: {plan.training[selectedDay - 1].time}
              </Text>

              <Text style={styles.name}>
                Калория: {plan.training[selectedDay - 1].kkal} kkal
              </Text>
            </TouchableOpacity>
          ) : (
            ''
          )}
        </ScrollView>

        <Text style={styles.subtitle}>Занимаетесь каждый день</Text>
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
  },
  calendarContainer: {
    width: '90%',
    alignSelf: 'center',
    borderRadius: 12,
    marginTop: 20,
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
  card: {
    width: '100%',
    alignSelf: 'center',
    padding: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'white',
    marginTop: 50,
  },
  name: {
    color: 'white',
    fontFamily: 'Montserrat-Light',
    marginTop: 7,
    fontSize: 15,
  },
  subtitle: {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Montserrat-Bold',
    fontSize: 18,
    marginTop: 30,
  },
});
