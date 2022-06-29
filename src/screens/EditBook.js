import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';

const EditBook = ({ route }) => {
  useEffect(() => {}, []);
  console.log('route', route.params);
  return (
    <View>
      <Text>EditBook</Text>
    </View>
  );
};

export default EditBook;

const styles = StyleSheet.create({});
