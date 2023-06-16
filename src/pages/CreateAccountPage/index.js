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

const CreateAccountPage = ({ navigation }) => {
	let [ email, setEmail ] = useState('');
	let [ passwd, setPasswd ] = useState('');
	let [ passwd2, setPasswd2 ] = useState('');

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Criar Conta</Text>

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
				
				<TextInput 
					value={passwd2}
					onChangeText={text => setPasswd2(text)}
					secureTextEntry
					style={styles.textInput}
					placeholder={'Confirme sua Senha'}
				/>

				<TouchableOpacity 
					style={styles.confirmBtn}
					onPress={() => {navigation.pop()}}
				>
					<Text>Criar Conta</Text>
				</TouchableOpacity>
			</View>

			<View style={styles.linksView}>
				<Link
					to={{ screen: 'LoginPage' }}
				>
					<Text>Já tem uma conta? Faça Login</Text>
				</Link>
			</View>
		</View>
	);
}

export default CreateAccountPage;