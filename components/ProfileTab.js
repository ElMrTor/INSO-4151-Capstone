import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createStackNavigator} from '@react-navigation/stack';

// Screens
import MyReviews from '../screens/MyReviews';
import MyRaffles from '../screens/MyRaffles';


// Components
import ProfileHeader from './ProfileHeader';


//Screen names

const reviewName = "MyReviews";
const raffles = "MyRaffles";

const Tab = createBottomTabNavigator();
const ProfileStack = createStackNavigator();

function ProfileTab() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={reviewName}
        screenOptions={({ route }) => ({
          
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === reviewName) {
              iconName = focused ? 'grid' : 'grid-outline';

            } 
            else if (rn === raffles) {
              iconName = focused ? 'star' : 'star-outline"';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'orange',
          inactiveTintColor: 'grey',
          style: { padding: 10, height: 70},
          showLabel: false,
        }}
        >

        <Tab.Screen name={reviewName} component={MyReviews} />
        <Tab.Screen name={raffles} component={MyRaffles} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default ProfileTab;