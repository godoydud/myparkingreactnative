import { createAppContainer, createStackNavigator } from 'react-navigation';

import Main from './pages/main';
import Listagem from './pages/listagem';
import Cadastro from './pages/cadastro';
import Editar from './pages/editar';



export default createAppContainer(
	createStackNavigator(
		{
			Main: { screen: Main },
			Listagem: { screen: Listagem},
			Cadastro: { screen: Cadastro},
			Editar: {screen: Editar},

			navigationOptions: () => ({
				headerStyle: {
					backgroundColor: '#79D97C'
				},
				headerTintColor: '#79D97C'
			})
		}
	)
)