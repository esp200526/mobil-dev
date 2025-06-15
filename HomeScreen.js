import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Merhaba! Bugün nasıl hissediyorsun?</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Diary')}>
        <Text style={styles.buttonText}>Günlük Yaz</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Motivation')}>
        <Text style={styles.buttonText}>Motivasyon Al</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Mood')}>
        <Text style={styles.buttonText}>Ruh Halim</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Calendar')}>
        <Text style={styles.buttonText}>Takvim</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
    backgroundColor: '#f7f9fc',
  },
  title: { 
    fontSize: 26, 
    fontWeight: '700',
    textAlign: 'center', 
    marginBottom: 40,
    color: '#333',
  },
  button: {
    backgroundColor: '#4A90E2',
    paddingVertical: 15,
    borderRadius: 12,
    marginVertical: 10,
    shadowColor: '#4A90E2',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default HomeScreen;
