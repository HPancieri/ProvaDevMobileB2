import 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AllItemsPage from '../../pages/AllItemsPage';
import LoginPage from '../../pages/LoginPage';
import CreateAccountPage from '../../pages/CreateAccountPage';
import ForgotPasswdPage from '../../pages/ForgotPasswdPage';

const Stack = createNativeStackNavigator();

const PublicStack = () => {
	return (
		<Stack.Navigator initialRouteName='LoginPage' screenOptions={{ headerShown: false }}>
			<Stack.Screen name='AllItemsPage' component={AllItemsPage}/>
			<Stack.Screen name='LoginPage' component={LoginPage} />
			<Stack.Screen name='CreateAccountPage' component={CreateAccountPage} />
			<Stack.Screen name='ForgotPasswdPage' component={ForgotPasswdPage} />
		</Stack.Navigator>
	);
}

export default PublicStack;