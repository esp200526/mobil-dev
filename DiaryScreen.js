import { useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, FlatList, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DiaryScreen = () => {
  const [note, setNote] = useState('');
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const loadNotes = async () => {
      const savedNotes = await AsyncStorage.getItem('notes');
      if (savedNotes) setNotes(JSON.parse(savedNotes));
    };
    loadNotes();
  }, []);

  const saveNote = async () => {
    if (note.trim() === '') return; // Boş not kaydetmeyi engelle
    const newNotes = [...notes, { id: Date.now().toString(), text: note.trim(), date: new Date().toLocaleDateString() }];
    setNotes(newNotes);
    await AsyncStorage.setItem('notes', JSON.stringify(newNotes));
    setNote('');
  };

  const renderItem = ({ item }) => (
    <View style={styles.noteCard}>
      <Text style={styles.noteDate}>{item.date}</Text>
      <Text style={styles.noteText}>{item.text}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Bugün ne hissettin?"
        value={note}
        onChangeText={setNote}
        style={styles.input}
        multiline
      />
      <TouchableOpacity style={styles.saveButton} onPress={saveNote}>
        <Text style={styles.saveButtonText}>Kaydet</Text>
      </TouchableOpacity>

      <FlatList
        data={notes}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
        ListEmptyComponent={<Text style={styles.emptyText}>Henüz not yok</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    padding: 20,
    backgroundColor: '#f9fafe',
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 15,
    fontSize: 16,
    elevation: 2, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    marginBottom: 15,
    minHeight: 80,
    textAlignVertical: 'top',
  },
  saveButton: {
    backgroundColor: '#4A90E2',
    borderRadius: 12,
    paddingVertical: 14,
    marginBottom: 25,
    elevation: 3,
  },
  saveButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
  noteCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 15,
    marginBottom: 12,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  noteDate: {
    fontSize: 12,
    color: '#777',
    marginBottom: 6,
    fontWeight: '500',
  },
  noteText: {
    fontSize: 16,
    color: '#333',
  },
  emptyText: {
    textAlign: 'center',
    color: '#aaa',
    fontSize: 16,
    marginTop: 50,
  },
});

export default DiaryScreen;
