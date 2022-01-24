import React, { Component } from 'react'
import {Image, Dimensions, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View, ImageBackground } from 'react-native'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchData: '',
      dataMovie: []
    }
  }

  GetData = () => {
    fetch('http://www.omdbapi.com/?apikey=2546c9d9&s=' + this.state.searchData)
      .then((response) => response.json())
      .then((json) => this.setState({ dataMovie: json.Search }, () => console.log(json)))
      .catch((error) => console.log(error))
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{
          flex: 1, backgroundColor: 'black', alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Text style={{ color: 'white', fontSize: 30 }}>IMDB</Text>
        </View>
        <View style={{ flex: 6}}>
          <View style={styles.searchwrapper}>
            <TextInput
              style={{ color: 'white' }}
              placeholderTextColor='white'
              placeholder='Type City Name'
              onChangeText={(value) => this.setState({ searchData: value })}
            />
            <TouchableOpacity onPress={() => this.GetData()}>
              <Text>Cari!</Text>
            </TouchableOpacity>
          </View>
          <View style={{paddingTop: 20, paddingHorizontal: 10}}>
            <FlatList
              data={this.state.dataMovie}
              keyExtractor={(item) => item.imdbID}
              renderItem={({ item, index }) => (
                <View>
                  <Text style={{fontSize: 20, fontWeight: 'bold'}}>{item.Title}</Text>
                  <Text>{item.Type}</Text>
                  <Image source={item.Poster} style={{width: 100, height: 100}} />
                </View>
              )}
            />
          </View>
        </View>
      </View>
    )
  }
}

export default App

const styles = StyleSheet.create({
  searchwrapper: {
    marginTop: 35,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: Dimensions.get('screen').width - 20,
    borderWidth: 1.5,
    paddingVertical: 10,
    borderRadius: 25,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    backgroundColor: 'rgba(0,0,0,0.15)',
    borderColor: 'rgba(0,0,0,0.15)',
    // elevation: 5,
  }
})
