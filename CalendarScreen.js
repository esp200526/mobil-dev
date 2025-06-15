import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';

const CalendarScreen = () => {
  const [selectedDate, setSelectedDate] = useState('');

  return (
    <View style={styles.container}>
      <Calendar
        onDayPress={(day) => setSelectedDate(day.dateString)}
        markedDates={{
          [selectedDate]: {
            selected: true,
            selectedColor: '#4A90E2', // modern mavi renk
            selectedTextColor: '#fff',
            marked: true,
            dotColor: '#4A90E2',
          },
        }}
        theme={{
          backgroundColor: '#F9F9F9',
          calendarBackground: '#F9F9F9',
          textSectionTitleColor: '#333',
          dayTextColor: '#555',
          todayTextColor: '#4A90E2',
          arrowColor: '#4A90E2',
          monthTextColor: '#333',
          textDayFontWeight: '600',
          textMonthFontWeight: '700',
          textDayHeaderFontWeight: '600',
          textDayFontSize: 16,
          textMonthFontSize: 20,
          textDayHeaderFontSize: 14,
        }}
        style={styles.calendar}
      />

      <View style={styles.dateBox}>
        <Text style={styles.dateLabel}>Seçilen Tarih</Text>
        <Text style={styles.dateText}>
          {selectedDate || 'Henüz tarih seçilmedi'}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFF',
    justifyContent: 'flex-start',
  },
  calendar: {
    borderRadius: 12,
    elevation: 2, // gölge efekti android için
    shadowColor: '#000', // iOS gölge için
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  dateBox: {
    marginTop: 30,
    padding: 20,
    backgroundColor: '#4A90E2',
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#4A90E2',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  dateLabel: {
    color: '#CDE6FF',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 6,
  },
  dateText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '700',
  },
});

export default CalendarScreen;
