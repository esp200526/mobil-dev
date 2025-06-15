import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const MotivationScreen = () => {
  const [quote, setQuote] = useState('');
  const [error, setError] = useState(false);

  const getQuote = async () => {
    setError(false);
    setQuote('Loading...');
    try {
      const response = await fetch('https://api.adviceslip.com/advice');
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      setQuote(`"${data.slip.advice}"`);
    } catch (error) {
      console.log('API Hatası:', error);
      setQuote('Could not load advice.');
      setError(true);
    }
  };

  return (
    <View style={styles.container}>
      <View style={[styles.quoteBox, error && styles.errorBox]}>
        <Text style={[styles.quoteText, error && styles.errorText]}>
          {quote || 'Press the button for advice!'}
        </Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={getQuote}>
        <Text style={styles.buttonText}>Get New Advice</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#f0f4f8',
  },
  quoteBox: {
    backgroundColor: 'white',
    padding: 25,
    borderRadius: 15,
    marginBottom: 30,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },
  quoteText: {
    fontSize: 20,
    fontStyle: 'italic',
    color: '#333',
    textAlign: 'center',
  },
  errorBox: {
    backgroundColor: '#ffe6e6',
  },
  errorText: {
    color: '#d00',
    fontWeight: '700',
  },
  button: {
    backgroundColor: '#4A90E2',
    borderRadius: 15,
    paddingVertical: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default MotivationScreen;
