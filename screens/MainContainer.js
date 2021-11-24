import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createStackNavigator} from '@react-navigation/stack';

// Screens
import Home from './../screens/Home';
import Explore from './../screens/Explore';
import Profile from './../screens/Profile';
import SignUp from './../screens/SignUp';
import ReportBug from './../screens/ReportBug';
import Settings from './../screens/Settings';
import MyReviews from './../screens/MyReviews';
import AddReview from './../screens/AddReview';
import AddRaffle from './../screens/AddRaffle';

//Screen names
const homeName = "Home";
const exploreName = "Explore";
const addRaffleName = "AddRaffle";
const profileName = "Profile";
const bugName = "ReportBug";
const settingsName = "Settings";
const reviewName = "MyReviews";
const addReview = "AddReview";

const Tab = createBottomTabNavigator();
const ProfileStack = createStackNavigator();

function ProfileStackScreen() {
  return(
    <ProfileStack.Navigator>
      <ProfileStack.Screen name={profileName} component={Profile} options={{ headerShown: false }}/>
      <ProfileStack.Screen name={raffles} component={MyRaffles} options={{ headerShown: false }}/>
      <ProfileStack.Screen name={reviewName} component={MyReviews} options={{ headerShown: false }}/>
      <ProfileStack.Screen name={bugName} component={ReportBug} options={{ headerShown: false }}/>
      <ProfileStack.Screen name={settingsName} component={Settings} options={{ headerShown: false }}/>
    </ProfileStack.Navigator>
  )
}

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

        <Tab.Screen name={homeName} component={Home} />
        <Tab.Screen name={exploreName} component={Explore} />
        <Tab.Screen name={addRaffleName} component={AddRaffle} />
        <Tab.Screen name={profileName} component={ProfileStackScreen} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;