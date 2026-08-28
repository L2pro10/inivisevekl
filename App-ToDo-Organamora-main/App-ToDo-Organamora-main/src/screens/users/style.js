import { StyleSheet } from 'react-native';

export const userStyles = StyleSheet.create({
    title: {
      fontSize: 32,
      fontWeight: 'bold',
      marginBottom: 20,
      color: '#f5f3ff',
      fontFamily: 'System',
      letterSpacing: 0.7,
    },

    // Estilos da barra de pesquisa
      searchBar: {
      height: 50,
      borderWidth: 1,
      borderColor: 'rgba(103, 232, 249, 0.35)',
      borderRadius: 14,
      paddingHorizontal: 20,
      marginBottom: 20,
      fontSize: 16,
      backgroundColor: 'rgba(255, 255, 255, 0.08)',
      color: '#f5f3ff',
      fontFamily: 'System',
    },

    userList: {
      flex: 1,
      marginBottom: 20,
    },
    userCard: {
      backgroundColor: 'rgba(30, 27, 75, 0.72)',
      padding: 15,
      borderRadius: 10,
      marginBottom: 10,
      borderWidth: 1,
      borderColor: 'rgba(103, 232, 249, 0.25)',
      shadowColor: '#22d3ee',
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0.2,
      shadowRadius: 10,
      elevation: 5,
    },
    userName: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#f5f3ff',
      fontFamily: 'System',
      marginBottom: 5,
    },
    userId: {
      fontSize: 14,
      color: '#a5b4fc',
      marginBottom: 3,
    },
    userLogin: {
      fontSize: 14,
      color: '#a5b4fc',
    },
    emptyText: {
      textAlign: 'center',
      fontSize: 16,
      color: '#a5b4fc',
      marginTop: 50,
    }
});
