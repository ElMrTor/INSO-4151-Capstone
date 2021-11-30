import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createStackNavigator} from '@react-navigation/stack';

// Screens
import Home from './../screens/Home';
import Explore from './../screens/Explore';
import ProfileSettings from '../screens/ProfileSettings';
import SignUp from './../screens/SignUp';
import ReportBug from './../screens/ReportBug';
import Settings from './../screens/EditProfile';
import MyReviews from './../screens/MyReviews';
import AddReview from './../screens/AddReview';
import AddRaffle from './../screens/AddRaffle';
import MyRaffles from './../screens/MyRaffles';
import UserProfile from './../screens/UserProfile';


// Components
import ProfileHeader from './ProfileHeader';
import ProfileAsUser from './ProfileAsUser';
import HomeHeader from './HomeHeader';


//Screen names
const homeName = "Home";
const exploreName = "Explore";
const addRaffleName = "Add Raffle";
const profileSettingsName = "ProfileSettings";
const profileName = "UserProfile";

const bugName = "ReportBug";
const editProfileName = "EditProfile";
const reviewName = "MyReviews";
const addReview = "AddReview";
const raffles = "MyRaffles";

const Tab = createBottomTabNavigator();
const ProfileStack = createStackNavigator();

function ProfileStackScreen() {
  return(
    <ProfileStack.Navigator>
      <ProfileStack.Screen name={profileName} component={UserProfile} options={{
        headerTitle: () => <ProfileHeader/>
      }}/>
      <ProfileStack.Screen name={profileSettingsName} component={ProfileSettings} options={{ headerShown: false }}/>
      <ProfileStack.Screen name={raffles} component={MyRaffles} options={{ headerShown: false }}/>
      <ProfileStack.Screen name={reviewName} component={MyReviews} options={{ headerShown: false }}/>
      <ProfileStack.Screen name={bugName} component={ReportBug} options={{ headerShown: false }}/>
      <ProfileStack.Screen name={editProfileName} component={Settings} options={{ headerShown: false }}/>
    </ProfileStack.Navigator>
  )
}

function HomeStackScreen() {
  return(
    <ProfileStack.Navigator>
      <ProfileStack.Screen name={homeName} component={Home} options={{ headerTitle: () => <HomeHeader/> }}/>
      <ProfileStack.Screen name={profileName} component={UserProfile} options={{  headerTitle: () => <ProfileAsUser/> }}/>
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

        <Tab.Screen name={homeName} component={HomeStackScreen} options={{ headerShown: false }}/>
        <Tab.Screen name={exploreName} component={Explore} options={{ headerShown: false }}/>
        <Tab.Screen name={addRaffleName} component={AddRaffle} />
        <Tab.Screen name={profileName} component={ProfileStackScreen} options={{ headerShown: false }} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;