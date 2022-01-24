import React, { useState } from 'react'
import { Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { IconSearch } from '../assets'

const SearchBar = ({searchData}) => {
    return (
        <View style={styles.searchwrapper}>
            <TextInput
            style={{color: 'white'}}
            placeholderTextColor='white'
            placeholder='Type City Name'
            onChangeText={(value) => this.state({searchData : value})} 
            />
            <TouchableOpacity onPress={() => console.log(this.state.searchData)}>
                <Text>Cari!</Text>
            </TouchableOpacity>
        </View>
    )
}

export default SearchBar

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
        // elevation: 5
    }
})
