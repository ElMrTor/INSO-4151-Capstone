import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, StackRouter } from 'react-navigation';
import OpenAppScreen from './../screens/OpenApp';
import LoginScreen from './../screens/Login';
import SignUpScreen from './../screens/SignUp';
import MainContainerScreen from './../components/MainContainer';
import ForgotPasswordScreen from '../screens/ForgotPassword';
import SingleRaffleScreen from '../screens/SingleRaffleScreen';

const screens = {
    OpenApp: {
        screen: OpenAppScreen,
        navigationOptions: {
            headerShown: false
        }
    },
    Login: {
        screen: LoginScreen,
        navigationOptions: {
            headerShown: false
        }
    },
    SignUp: {
        screen: SignUpScreen,
        navigationOptions: {
            headerShown: false
        }
    },
    ForgotPassword: {
        screen: ForgotPasswordScreen,
        navigationOptions: {
            headerShown: false
        }
    },
    MainContainer: {
        screen: MainContainerScreen,
        navigationOptions: {
            headerShown: false
        }
    },
}

const OpenAppStack = createStackNavigator(screens);

export default createAppContainer(OpenAppStack);