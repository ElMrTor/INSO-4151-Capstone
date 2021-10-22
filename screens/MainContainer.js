import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createStackNavigator} from '@react-navigation/stack';

// Screens
import Login from './../screens/Login';
import Explore from './../screens/Explore';
import Profile from './../screens/Profile';
import SignUp from './../screens/SignUp';
import OpenApp from './../screens/OpenApp';



//Screen names
const homeName = "Home";
const exploreName = "Explore";
const addRaffleName = "Login";
const profileName = "Profile";
const openName = "OpenApp"

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


function MainContainer() {

  

  return (
    <NavigationContainer>
    
      <Tab.Navigator

      
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home-sharp' : 'home-outline';

            } else if (rn === exploreName) {
              iconName = focused ? 'compass' : 'compass-outline';

            }  else if (rn === addRaffleName) {
              iconName = focused ? 'add-circle' : 'add-circle-outline';
            }

            else if (rn === profileName) {
              iconName = focused ? 'person-circle' : 'person-circle-outline';
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

        <Tab.Screen name={homeName} component={Profile} />
        <Tab.Screen name={exploreName} component={Explore} />
        <Tab.Screen name={addRaffleName} component={SignUp} />
        <Tab.Screen name={profileName} component={Profile} />

      </Tab.Navigator>
      
    </NavigationContainer>
  );
}

export default MainContainer;