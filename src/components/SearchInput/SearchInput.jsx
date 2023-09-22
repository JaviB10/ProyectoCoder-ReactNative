import { Pressable, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import styles from './SearchInput.style.js'
import AntDesign from '@expo/vector-icons/AntDesign'

const SearchInput = ({ onSearch }) => {
    const [value, setValue] = useState('')

    const search = () => {
        onSearch(value)
    }

    const clearInput = () => {
        setValue('')
        onSearch('')
    }

    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.input}
                value={value} 
                onChangeText={setValue} 
                placeholder='Search Product'
                color='black'
                />
            <Pressable onPress={search}>
                <AntDesign name='search1' size={25} color={'black'}/>
            </Pressable>
            <Pressable onPress={clearInput}>
                <AntDesign name='closecircleo' size={25} color={'red'}/>
            </Pressable>
        </View>
    )
}

export default SearchInput
