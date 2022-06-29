import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

const EachBook = ({ route }) => {
  const book = route.params.book;
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/book.jpg')} style={styles.book} />
      <Text style={styles.title}>{book.title}</Text>
      <Text style={styles.details}>Author: {book.author}</Text>
      <Text style={styles.details}>Genre: {book.genre}</Text>
      <Text style={styles.details}>YearPublished: {book.yearPublished}</Text>
    </View>
  );
};

export default EachBook;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#111b21',
    flex: 1,
    alignItems: 'center',
  },
  book: {
    width: 200,
    height: 200,
    marginVertical: 30,
  },
  title: {
    color: 'white',
    fontSize: 20,
    marginVertical: 20,
  },
  details: {
    color: 'white',
    fontSize: 10,
    marginVertical: 1,
    alignSelf: 'flex-start',
    marginHorizontal: 80,
  },
});
