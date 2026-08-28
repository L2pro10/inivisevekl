import { Text, View, TouchableOpacity, Image } from 'react-native';
import { styles } from './styles.js';
import { generalStyles } from '../../styles/general-styles.js';

export function HomeScreen({ navigation }) {
  return (
    <View style={generalStyles.container}>
      <Text style={styles.title}>Aetheria Tech</Text>
      <Image source={require('../../../assets/aetheria-tech.png')} style={styles.logo} />
      <Text style={styles.subtitle}>Tornando o invisível intuitivo</Text>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.navButton} 
          onPress={() => navigation.navigate('Tarefas')}
        >
          <Text style={generalStyles.buttonText}>Tarefas</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.navButton} 
          onPress={() => navigation.navigate('Usuarios')}
        >
          <Text style={generalStyles.buttonText}>Ver Todos os Usuários</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.navButton} 
          onPress={() => navigation.navigate('Usuario-tarefas')}
        >
          <Text style={generalStyles.buttonText}>Usuários e Tarefas</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.navButton} 
          onPress={() => navigation.navigate('Desenvolvedores')}
        >
          <Text style={generalStyles.buttonText}>Desenvolvedores</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.navButton} 
          onPress={() => navigation.navigate('Programadoras')}
        >
          <Text style={generalStyles.buttonText}>Equipe Aetheria</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}
