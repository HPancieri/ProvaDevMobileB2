/*

Aluno: Hygor Oliveira Pancieri
Professor: Otávio Lube dos Santos

Universidade Vila Velha
16 de junho de 2023

*/

import Item from '../../components/Item';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from './styles';

let items = [
	{
		key: 1,
		title: "Espada do Cavaleiro",
		description: "Dano: 1.2",
		uri: "https://as2.ftcdn.net/v2/jpg/02/19/37/15/1000_F_219371599_mV3F3TGN0RdOOTT7El7vo2DvLKgrrh3T.jpg",
	},
	{
		key: 2,
		title: "Escudo do Cavaleiro",
		description: "Defesa: 1.5",
		uri: "https://static.vecteezy.com/system/resources/previews/007/816/866/original/wooden-shield-pixel-art-illustration-for-games-and-websites-vector.jpg",
	},
	{
		key: 3,
		title: "Arco de Gelo",
		description: "Dano: 0.9\nCongela inimigos atingidos durante 1 segundo.",
		uri: "https://cdna.artstation.com/p/assets/images/images/022/424/784/large/josh-hox-64-x-64-lightning-bow.jpg?1575391394",
	},
	{
		key: 4,
		title: "Cajado Elétrico",
		description: "Dano: 1.1\nCausa 0.2 de dano por segundo durante 3 segundos.",
		uri: "https://preview.redd.it/pixel-art-magic-staff-v0-cmx6l90fzhi91.gif?format=png8&s=47567aaf753458ce812bc15921f1e6726e12d9a5",
	},
];

const AllItemsPage = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Dashboard</Text>
			
			{items.map(item => <Item item={item} key={item.key}/>)}

			<View style={styles.linksView}>
				<TouchableOpacity onPress={() => {navigation.pop()}}>
					<Text>Voltar</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

export default AllItemsPage;