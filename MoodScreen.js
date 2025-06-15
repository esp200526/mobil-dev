import { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const MoodScreen = () => {
  const [mood, setMood] = useState('');
  const [moods, setMoods] = useState([]);

  const saveMood = () => {
    if (mood) {
      setMoods(prev => [...prev, { id: Date.now().toString(), mood, date: new Date().toLocaleDateString() }]);
      setMood('');
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.moodCard}>
      <Text style={styles.moodDate}>{item.date}</Text>
      <Text style={styles.moodText}>{item.mood}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.pickerWrapper}>
        <Picker
          selectedValue={mood}
          onValueChange={setMood}
          style={styles.picker}
          dropdownIconColor="#4A90E2"
        >
          <Picker.Item label="Seçiniz" value="" />
          <Picker.Item label="Mutlu" value="Mutlu" />
          <Picker.Item label="Üzgün" value="Üzgün" />
          <Picker.Item label="Stresli" value="Stresli" />
        </Picker>
      </View>

      <TouchableOpacity
        style={[styles.saveButton, !mood && styles.saveButtonDisabled]}
        onPress={saveMood}
        disabled={!mood}
      >
        <Text style={styles.saveButtonText}>Ruh Halini Kaydet</Text>
      </TouchableOpacity>

      <FlatList
        data={moods}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
        ListEmptyComponent={<Text style={styles.emptyText}>Henüz ruh hali kaydı yok.</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f9fafe' },
  pickerWrapper: {
    backgroundColor: 'white',
    borderRadius: 12,
    marginBottom: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
  },
  picker: {
    height: 50,
    width: '100%',
  },
  saveButton: {
    backgroundColor: '#4A90E2',
    borderRadius: 12,
    paddingVertical: 14,
    marginBottom: 25,
    elevation: 3,
  },
  saveButtonDisabled: {
    backgroundColor: '#a0c4f7',
  },
  saveButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
  moodCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 15,
    marginBottom: 12,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  moodDate: {
    fontSize: 12,
    color: '#777',
    fontWeight: '500',
  },
  moodText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '600',
  },
  emptyText: {
    textAlign: 'center',
    color: '#aaa',
    fontSize: 16,
    marginTop: 50,
  },
});

export default MoodScreen;
