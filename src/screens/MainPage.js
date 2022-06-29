import { StyleSheet, Text, View, FlatList } from 'react-native';
import React, { useContext } from 'react';
import { Context } from '../context/Provider';
import EachBookItem from '../components/EachBookItem';

const MainPage = ({ navigation }) => {
  const { books } = useContext(Context);

  return (
    <View>
      <FlatList
        data={books}
        renderItem={({ item }) => {
          return <EachBookItem book={item} navigation={navigation} />;
        }}
      />
    </View>
  );
};

export default MainPage;

const styles = StyleSheet.create({});
