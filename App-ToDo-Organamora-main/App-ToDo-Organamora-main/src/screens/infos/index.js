import { Text, View, TouchableOpacity } from 'react-native';
import { styles } from './styles.js';
import { generalStyles } from '../../styles/general-styles.js';

export function SobreScreen({ navigation }) {
  return (
    <View style={generalStyles.container}>
      <Text style={styles.title}>Sobre a Aetheria</Text>

      <View style={styles.card}>
        <Text style={styles.subtitle}>
          A Aetheria Tech é uma plataforma de produtividade criada para tornar o invisível intuitivo. Unimos uma experiência clara a uma visão tecnológica para ajudar pessoas e equipes a organizarem suas prioridades com confiança.

          {"\n\n"}

          Com uma interface inspirada em sistemas inteligentes, a Aetheria centraliza tarefas, planejamento e acompanhamento em um só lugar. O resultado é uma rotina mais fluida, precisa e conectada ao que realmente importa.
        </Text>
      </View>

      <TouchableOpacity style={generalStyles.button} onPress={() => navigation.goBack()}>
        <Text style={generalStyles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}
