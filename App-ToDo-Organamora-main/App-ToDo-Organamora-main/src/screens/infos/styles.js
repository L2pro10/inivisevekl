import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#f5f3ff',
    fontFamily: 'System',
    letterSpacing: 0.7,
  },

  // 👇 NOVA CAIXA
  card: {
    backgroundColor: 'rgba(30, 27, 75, 0.72)',
    padding: 20,
    borderRadius: 16,
    marginBottom: 30,
    width: '60%',

    // sombra iOS
    borderWidth: 1,
    borderColor: 'rgba(103, 232, 249, 0.3)',
    shadowColor: '#22d3ee',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.28,
    shadowRadius: 12,

    // sombra Android
    elevation: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#ddd6fe',
    fontFamily: 'System',
    textAlign: 'justify',
  },
});
