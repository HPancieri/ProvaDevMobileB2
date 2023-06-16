/*

Aluno: Hygor Oliveira Pancieri
Professor: Otávio Lube dos Santos

Universidade Vila Velha
16 de junho de 2023

*/

import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./styles";
import { Link } from '@react-navigation/native';

const LoginPage = ({ navigation }) => {
	let [ email, setEmail ] = useState('');
	let [ passwd, setPasswd ] = useState('');

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Login</Text>

			<View style={styles.inputView}>
				<TextInput
					value={email}
					onChangeText={text => setEmail(text)}
					style={styles.textInput}
					placeholder={'Email'}
					inputMode={'email'}
					keyboardType={'email-address'}
				/>

				<TextInput 
					value={passwd}
					onChangeText={text => setPasswd(text)}
					secureTextEntry
					style={styles.textInput}
					placeholder={'Senha'}
				/>

				<TouchableOpacity 
					style={styles.confirmBtn}
					onPress={() => {navigation.push('AllItemsPage')}}
				>
					<Text>Login</Text>
				</TouchableOpacity>
			</View>

			<View style={styles.linksView}>
				<Link
					to={{ screen: 'AllItemsPage' }}
				>
					<Text>Ir para o Dashboard</Text>
				</Link>
				<Link
					to={{ screen: 'CreateAccountPage' }}
				>
					<Text>Criar Conta</Text>
				</Link>
				<Link
					to={{ screen: 'ForgotPasswdPage' }}
				>
					<Text>Esqueci a Senha</Text>
				</Link>
			</View>
		</View>
	);
}

export default LoginPage;