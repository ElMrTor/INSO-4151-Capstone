import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, StackRouter } from 'react-navigation';
import OpenApp from '../screens/OpenApp';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import MainContainer from '../screens/MainContainer';
import Profile from '../screens/Profile';


const screens = {
    GetStarted: {
        screen: OpenApp,
        navigationOptions: {
            headerShown: false
        }
    },
    Login: {
        screen: Login,
        navigationOptions: {
            headerShown: false
        }
        
    },
    SignUp: {
        screen: SignUp,
        navigationOptions: {
            headerShown: false
        }
    },
    MainContainer: {
        screen: MainContainer,
        navigationOptions: {
            headerShown: false
        }
    },
    Profile: {
        screen: Profile,
        navigationOptions: {
            headerShown: false
        }
    }
}

const OpenAppStack = createStackNavigator(screens);

export default createAppContainer(OpenAppStack);