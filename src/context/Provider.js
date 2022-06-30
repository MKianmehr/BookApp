import React, { useEffect, useState, createContext, useContext } from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import axios from 'axios';
import { Dialog } from '@rneui/themed';

export const Context = createContext();

const Provider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [initialLoading, setInitialLoading] = useState(true);

  // is a state for axios request
  const [waiting, setWaiting] = useState(false);
  // is a state for axios request

  useEffect(() => {
    (async () => {
      try {
        setInitialLoading(true);
        const response = await axios.get(
          'https://postman-library-api.glitch.me/books'
        );
        setBooks(response.data);
        setInitialLoading(false);
      } catch (e) {
        setBooks([]);
        setInitialLoading(false);
        console.log(e);
      }
    })();
  }, []);

  const deleteBookHandler = async (book) => {
    try {
      const response = await axios.delete(
        `https://postman-library-api.glitch.me/books/${book.id}`
      );
      const updatedBook = books.filter((item) => {
        return item.id !== book.id;
      });
      setBooks(updatedBook);
      console.log('responseDelete');
    } catch (e) {
      console.log('error', e);
    }
  };

  const editBookHandler = async ({ title, author, genre, year, id }) => {
    try {
      const response = await axios.patch(
        `https://postman-library-api.glitch.me/books/${id}`,
        {
          title,
          author,
          genre,
          year,
        }
      );
    } catch (e) {
      console.log('editError', e);
    }
  };

  return initialLoading ? (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator size="large" />
    </View>
  ) : (
    <Context.Provider value={{ books, deleteBookHandler, editBookHandler }}>
      {children}
    </Context.Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});

export default Provider;
