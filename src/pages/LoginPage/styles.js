/*

Aluno: Hygor Oliveira Pancieri
Professor: Otávio Lube dos Santos

Universidade Vila Velha
16 de junho de 2023

*/

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#979DAC',
		alignItems: 'center',
		justifyContent: 'center',
	},

	title: {
		fontSize: 20,
		fontWeight: 'bold',
	},

	inputView: {
		backgroundColor: '#001233',
		padding: 20,
		borderRadius: 10,
		margin: 30,
		alignItems: 'center',
		justifyContent: 'center',
	},

	textInput: {
		backgroundColor: '#ffffff',
		padding: 5,
		borderRadius: 10,
		fontSize: 12,
		margin: 10,
	},

	confirmBtn: {
		backgroundColor: '#468faf',
		padding: 5,
		margin: 10,
		borderRadius: 10,
		textAlign: 'center',
		width: '70%',
	},

	linksView: {
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default styles;