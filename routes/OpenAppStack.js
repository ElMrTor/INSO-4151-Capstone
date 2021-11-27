import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, StackRouter } from 'react-navigation';
import OpenApp from './../screens/OpenApp';
import Login from './../screens/Login';
import SignUp from './../screens/SignUp';
import MainContainer from './../components/MainContainer';

const screens = {
    OpenApp: {
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
}

const OpenAppStack = createStackNavigator(screens);

export default createAppContainer(OpenAppStack);