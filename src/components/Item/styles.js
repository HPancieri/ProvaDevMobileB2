/*

Aluno: Hygor Oliveira Pancieri
Professor: Otávio Lube dos Santos

Universidade Vila Velha
16 de junho de 2023

*/

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		backgroundColor: '#0353A4',
		padding: 15,
		margin: 10,
		borderRadius: 12,
		width: '85%',
		justifyContent: 'space-between',
	},
	image: {
		height: 80,
		width: 80,
		margin: 10,
		borderRadius: 12,
	},
	title: {
		textAlign: 'center',
		fontWeight: 'bold',
		color: 'white',
	},
	btn: {
		borderRadius: 12,
		width: '50%',
	},
	textContainer: {
		marginRight: 20,
		marginLeft: 20,
		justifyContent: 'space-between',
		width: '60%',
	},
	description: {
		color: 'white',
		marginTop: 5,
		marginBottom: 5,
	},
});

export default styles;