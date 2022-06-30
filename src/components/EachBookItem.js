import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useContext } from 'react';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import { Context } from '../context/Provider';

const EachBookItem = ({ book, navigation }) => {
  const { deleteBookHandler } = useContext(Context);

  console.log('id', book.id);

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Book', { book });
      }}
    >
      <View style={styles.book}>
        <Text style={styles.title}>{book.title}</Text>

        <TouchableOpacity
          onPress={() => {
            deleteBookHandler(book);
          }}
        >
          <MaterialCommunityIcons name="delete" style={styles.icon} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Edit', book);
          }}
        >
          <AntDesign name="edit" style={styles.icon} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default EachBookItem;

const styles = StyleSheet.create({
  book: {
    backgroundColor: '#111b21',
    borderBottomColor: '#202C33',
    borderBottomWidth: 1,
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  title: {
    color: 'white',
    flex: 1,
  },
  icon: {
    color: 'white',
    fontSize: 25,
    marginHorizontal: 5,
  },
  loadingIcon: {
    color: 'black',
  },
});
