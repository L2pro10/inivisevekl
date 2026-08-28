import { Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { styles } from './styles.js';
import { generalStyles } from '../../styles/general-styles.js';
import { Devs } from './amorasData.js';

export function ProgramadorasScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.centerContainer}>
        <Text style={styles.subtitle}>Equipe:</Text>
        <View style={styles.cardsGrid}>
          {Devs.map((dev) => (
            <Item key={dev.title} title={dev.title} image={dev.img} />
          ))}
        </View>
      </ScrollView>

      <TouchableOpacity 
        style={generalStyles.button} 
        onPress={() => navigation.goBack()}
      >
        <Text style={generalStyles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const Item = ({ image, title }) => (
  <View style={styles.card}>
    <Image source={image} style={styles.image} />
    <View style={styles.info}>
      <Text style={styles.nome}>{title}</Text>
      <View style={styles.decorativeLine} />
    </View>
  </View>
);
