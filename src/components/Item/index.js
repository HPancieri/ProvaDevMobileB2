/*

Aluno: Hygor Oliveira Pancieri
Professor: Otávio Lube dos Santos

Universidade Vila Velha
16 de junho de 2023

*/

import { Button, Image, View, Text } from "react-native";
import styles from "./styles";


export default function Item(props) {
	return (
		<View style={styles.container}>
			<View>
				<Image style={styles.image}
					source={{
						uri: props.item.uri
					}}
				/>
			</View>

			<View style={styles.textContainer}>
				<Text style={styles.title}>{props.item.title}</Text>
				<Text style={styles.description}>{props.item.description}</Text>
				<Button 
					title="Propor Troca"
					style={styles.btn}
					color='#001233'
				/>
			</View>
		</View>
	);
}