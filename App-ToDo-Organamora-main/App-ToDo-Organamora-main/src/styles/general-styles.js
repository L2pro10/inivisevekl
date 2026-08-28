import { StyleSheet } from 'react-native';

export const generalStyles = StyleSheet.create({
    // Fundo geral da aplicação
    container: {  
        flex: 1,
        backgroundColor: '#09071a',
        alignItems: 'center',
        justifyContent: 'center',
    },

    // Botões gerais
    button: {
        backgroundColor: '#5b21d6',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 14,
        margin: 16,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'rgba(103, 232, 249, 0.55)',
        shadowColor: '#22d3ee',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.55,
        shadowRadius: 12,
        elevation: 8,
    },
    buttonText: {
      color: '#ffffff',
      fontSize: 16,
      fontWeight: 'bold',
      fontFamily: 'System',
      letterSpacing: 0.4,
    },
});
