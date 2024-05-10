import React from 'react';
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  Text,
  Platform,
} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import CloseIcon from './assets/images/close-white.png';
import Background from './assets/image-backs/navi-back.png';
import SplashScreen from './pages/SplashScreen';
import Statistics from './pages/Statistics';
import FiveDays from './pages/FiveDays';
import Detail from './pages/Detail';
import TenDays from './pages/TenDays';
import FifteenDays from './pages/FifteenDays';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const {height, width} = Dimensions.get('window');

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          options={{headerShown: false}}
          component={DrawerNavigator}
          name="DrawerNavigator"
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          width: width,
        },
        headerShown: false,
      }}
      drawerContent={props => <CustomDrawerNavigator {...props} />}>
      <Drawer.Screen name="SplashScreen" component={SplashScreen} />
      <Drawer.Screen name="Statistics" component={Statistics} />
      <Drawer.Screen name="FiveDays" component={FiveDays} />
      <Drawer.Screen name="TenDays" component={TenDays} />
      <Drawer.Screen name="FifteenDays" component={FifteenDays} />
      <Drawer.Screen name="Detail" component={Detail} />
    </Drawer.Navigator>
  );
}

function CustomDrawerNavigator(props) {
  const navigation = useNavigation();
  return (
    <DrawerContentScrollView {...props} scrollEnabled={false}>
      <ImageBackground source={Background} style={styles.container}>
        <View style={styles.closeIconContainer}>
          <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
            <Image source={CloseIcon} style={styles.close} />
          </TouchableOpacity>
        </View>

        <View style={styles.mainContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Statistics')}
            style={styles.drawerItem}>
            <Text style={styles.itemText}>Ежедевный план</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('FiveDays')}
            style={styles.drawerItem}>
            <Text style={styles.itemTextSecondary}>5-дневный план</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('TenDays')}
            style={styles.drawerItem}>
            <Text style={styles.itemTextSecondary}>10-дневный план</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('FifteenDays')}
            style={styles.drawerItem}>
            <Text style={styles.itemTextSecondary}>15-дневный план</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    height: Platform.OS === 'ios' ? height : height,
  },
  mainContainer: {
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: height / 10,
  },
  drawerItem: {
    width: '75%',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingVertical: 14,
    paddingHorizontal: 30,
    marginTop: 7,
  },
  itemText: {
    fontSize: 30,
    fontFamily: 'Montserrat-Bold',
    lineHeight: 28,
    color: 'black',
  },
  itemTextSecondary: {
    fontSize: 20,
    fontFamily: 'Montserrat-Bold',
    lineHeight: 28,
    color: 'black',
  },
  icon: {
    width: 25,
    height: 25,
  },
  footer: {
    justifyContent: 'center',
    fontWeight: '700',
    fontSize: 30,
    fontFamily: 'Montserrat-Medium',
  },
  transform: {
    transform: 'scale(0.35)',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 30,
  },
  closeIconContainer: {
    position: 'absolute',
    right: 20,
    top: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  close: {
    width: 20,
    height: 20,
  },
  header: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: height / 10,
  },
  drawerLogo: {
    aspectRatio: 0.5,
    resizeMode: 'contain',
  },
  basket: {
    width: 50,
    height: 50,
    marginTop: height / 5,
  },
});
