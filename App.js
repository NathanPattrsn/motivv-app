import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const fetchQuote = async () => {
    try {
      const response = await fetch('https://zenquotes.io/api/random');
      const data = await response.json();
      setQuote(data[0].q);
      setAuthor(data[0].a);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.quote}>{quote}</Text>
      {author ? <Text style={styles.author}>- {author}</Text> : null}
      <Button title="Get a Motivational Quote" onPress={fetchQuote} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  quote: {
    color: '#fff',
    fontSize: 24,
    textAlign: 'center',
    margin: 20,
  },
  author: {
    color: '#aaa',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
});
