import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    title: {
      fontSize: 32,
      fontWeight: 'bold',
      marginBottom: 20,
      color: '#f5f3ff',
      fontFamily: 'System',
      letterSpacing: 1,
    },
    subtitle: {
      fontSize: 18,
      marginBottom: 20,
      color: '#67e8f9',
      fontFamily: 'System',
      textAlign: 'center',
      letterSpacing: 0.4,
    },
    logo: {
      width: '72%',
      aspectRatio: 1.65,
      resizeMode: 'contain',
      maxWidth: 360,
      marginBottom: 10,
    },
    navButton: {
      backgroundColor: 'rgba(91, 33, 214, 0.78)',
      paddingVertical: 15,
      paddingHorizontal: 30,
      borderRadius: 14,
      alignItems: 'center',
      borderWidth: 1,
      borderColor: 'rgba(103, 232, 249, 0.45)',
      shadowColor: '#22d3ee',
      shadowOpacity: 0.32,
      shadowRadius: 10,
      shadowOffset: { width: 0, height: 0 },
      elevation: 6,
    },
    buttonContainer: {
      width: '60%',
      gap: 12,
      paddingBottom: 30,
    },
});
