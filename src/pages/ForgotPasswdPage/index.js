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

const ForgotPasswdPage = ({ navigation }) => {
	let [ email, setEmail ] = useState('');

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Recuperar Senha</Text>

			<View style={styles.inputView}>
				<TextInput
					value={email}
					onChangeText={text => setEmail(text)}
					style={styles.textInput}
					placeholder={'Email'}
					inputMode={'email'}
					keyboardType={'email-address'}
				/>

				<TouchableOpacity 
					style={styles.confirmBtn}
					onPress={() => {navigation.pop()}}
				>
					<Text>Recuperar Senha</Text>
				</TouchableOpacity>
			</View>

			<View style={styles.linksView}>
				<Link
					to={{ screen: 'LoginPage' }}
				>
					<Text>Voltar</Text>
				</Link>
			</View>
		</View>
	);
}

export default ForgotPasswdPage;