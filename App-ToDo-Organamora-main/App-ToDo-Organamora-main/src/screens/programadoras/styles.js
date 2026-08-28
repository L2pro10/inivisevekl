import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({

  //contém um container próprio porque o geral tem o justifyContent: 'center' que atrapalha o alinhamento dos itens
  container: {
    flexGrow: 1,
    backgroundColor: '#09071a',
  },

  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },

  cardsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 12,
    width: '100%',
  },

subtitle: {
   fontSize: 20,
   fontWeight: 'bold',
   textAlign: 'center',
   marginBottom: 20,
   color: '#67e8f9',
   fontWeight: '600',
   letterSpacing: 0.5,
  },
  
  card:{
    backgroundColor: 'rgba(30, 27, 75, 0.78)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    width: '46%',
    aspectRatio: 0.9,
    borderWidth: 1,
    borderColor: 'rgba(103, 232, 249, 0.3)',
    shadowColor: '#22d3ee',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 5,
  },

  image: {
    width: '68%',
    height: '68%',
    borderRadius: 50,
    borderWidth: 0,
    marginBottom: 6,
    backgroundColor: '#312e81',
    borderWidth: 1,
    borderColor: 'rgba(103, 232, 249, 0.4)',
  },

  info: {
    alignItems: 'center',
    width: '100%',
  },

  nome: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#f5f3ff',
  },

  decorativeLine: {
    width: 20,
    height: 2,
    backgroundColor: '#22d3ee',
    borderRadius: 1,
    marginTop: 3,
  }
});
