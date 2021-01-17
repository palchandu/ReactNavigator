import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import DetailScreen from './DetailScreen'
import ProfileScreen from './Profile';
import SettingScreen from './Setting';
import Icon from 'react-native-vector-icons/Ionicons';
const HomeStack = createStackNavigator();
const DetailStack = createStackNavigator();
const Tab = createBottomTabNavigator();
const MainTabScreen=()=>(

    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Details"
        component={DetailScreenStack}
        options={{
          tabBarLabel: 'Details',
          tabBarIcon: ({ color, size }) => (
            <Icon name="cash-outline" color={color} size={size} />
          ),
          tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Icon name="person-sharp" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingScreen}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color, size }) => (
            <Icon name="construct-sharp" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
);
export default MainTabScreen;
const HomeStackScreen=({navigation})=>(
    <HomeStack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
        <HomeStack.Screen name="Home" component={HomeScreen} options={{
          title:'My Home',
          headerLeft:()=>(
            <Icon.Button name="ios-menu" size={25} backgroundColor="#f4511e" onPress={()=> navigation.openDrawer()}></Icon.Button>
          )
        }} />
    </HomeStack.Navigator>
  )
  
  const DetailScreenStack=({navigation})=>(
    <DetailStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
      <DetailStack.Screen name="Details" component={DetailScreen}
      options={{
        title:'Descriptions',
        headerLeft:()=>(
          <Icon.Button name="ios-menu" size={25} backgroundColor="#f4511e" onPress={()=> navigation.openDrawer()}></Icon.Button>
        )
      }}
       />
  </DetailStack.Navigator>
  )
