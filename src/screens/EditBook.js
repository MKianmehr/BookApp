import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import React, { useEffect, useState, useContext } from 'react';
import { Dialog } from '@rneui/themed';
import { Context } from '../context/Provider';

const EditBook = ({ route }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [year, setYear] = useState('');

  const book = route.params;

  const { editBookHandler } = useContext(Context);

  const onEditHandler = async () => {
    if (title && author && genre && year && !isNaN(year)) {
      const response = await editBookHandler({
        title,
        author,
        genre,
        year,
        id: book.id,
      });
    }
  };

  useEffect(() => {
    setTitle(book.title);
    setAuthor(book.author);
    setGenre(book.genre);
    setYear(book.yearPublished);
  }, []);
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.input}>
          <Text style={styles.section}>Title:</Text>
          <TextInput
            value={title}
            style={styles.textInput}
            placeholder="Title"
            onChangeText={(title) => {
              setTitle(title);
            }}
          />
        </View>
        <View style={styles.input}>
          <Text style={styles.section}>Author:</Text>
          <TextInput
            value={author}
            style={styles.textInput}
            placeholder="Author"
            onChangeText={(author) => {
              setAuthor(author);
            }}
          />
        </View>
        <View style={styles.input}>
          <Text style={styles.section}>Genre:</Text>
          <TextInput
            placeholder="Genre"
            style={styles.textInput}
            value={genre}
            onChangeText={(genre) => {
              setGenre(genre);
            }}
          />
        </View>
        <View style={styles.input}>
          <Text style={styles.section}>Year of publish:</Text>
          <TextInput
            placeholder="Year"
            style={styles.textInput}
            value={`${year}`}
            onChangeText={(year) => {
              setYear(year);
            }}
          />
        </View>
      </View>
      <Button title="Edit" onPress={onEditHandler} />
    </View>
  );
};

export default EditBook;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flex: 1,
    paddingVertical: 10,
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    marginVertical: 5,
    borderRadius: 5,
    padding: 5,
  },
  section: {
    marginRight: 10,
    fontWeight: 'bold',
  },
  textInput: {
    flex: 1,
  },
});
