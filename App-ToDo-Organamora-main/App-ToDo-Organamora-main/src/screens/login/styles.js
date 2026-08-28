import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    title: {
      fontSize: 32,
      fontWeight: 'bold',
      marginBottom: 40,
      color: '#f5f3ff',
      fontFamily: 'System',
      letterSpacing: 0.8,
    },
    input: {
      width: '60%',
      height: 50,
      borderWidth: 1,
      borderColor: 'rgba(103, 232, 249, 0.35)',
      borderRadius: 14,
      paddingHorizontal: 15,
      marginBottom: 15,
      backgroundColor: 'rgba(255, 255, 255, 0.08)',
      fontSize: 16,
      color: '#f5f3ff',
      fontFamily: 'System',
    },
    logo:{
      width: '72%',
      aspectRatio: 1.65,
      resizeMode: 'contain',
      marginBottom: 30,
      maxWidth: 360,
    }
});
