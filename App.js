import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import BannerFilmes from './src/components/bannerFilmes';
import Filmes from './src/data/movies';
import Series from './src/data/series';
import Header from './src/components/header';
import SearchBar from './src/components/searchbar';
import CardFilmes from './src/components/cardFilmes';
import CardSeries from './src/components/cardSeries';

export default function App() {
  return (
    <View style={styles.container}>
     <Header></Header>
     <SearchBar></SearchBar>
     <BannerFilmes></BannerFilmes>

    <View style={{width: "90%"}}>
      <Text style={styles.texto}>Filmes</Text>
     <FlatList
      horizontal = {true}
        data = {Filmes}
        keyExtractor = {(item) => item.id}
        renderItem = {({item}) => (

          <CardFilmes 
            titulo={item.nome}
            imagem={item.imagem}
            nota={item.nota}
          />
        )}
     />
    <Text style={styles.texto}>Series</Text>
    <FlatList
      horizontal = {true}
        data = {Series}
        keyExtractor = {(item) => item.id}
        renderItem = {({item}) => (

          <CardSeries
            titulo={item.nome}
            imagem={item.imagem}
            nota={item.nota}
          />
        )}
     />
     </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#141a29',
    alignItems:"center"   
  },

  texto:{
    color: '#fff',
    fontsize: 35,
    fontWeight:'Bold',
    marginTop: 10,
  }
});
