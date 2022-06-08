import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';

export default function App() {

  const [data, setData] = useState([])

  const getMovies = async () => {
     try {
      const response = await fetch(' https://jsonplaceholder.typicode.com/photos?_start=0&_limit=5');
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } 
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <View style={ styles.container}>
    
        <FlatList
          data={data}
          keyExtractor={({ id },index) => id}
          renderItem={({ item }) => (
            
            <>
            <Text>{item.title}</Text>
            <Image source={{uri: item.url}}
            style={{width: 60, height: 60}}/>
            </>

          )}
        />
      
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
