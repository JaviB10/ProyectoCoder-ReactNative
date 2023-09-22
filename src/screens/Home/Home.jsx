import React from 'react'
import categories from '../../data/categories'
import { FlatList, View } from 'react-native'
import styles from './Home.style.js'
import { Header } from '../../components/index.js'
import { CategoryItem } from './components/index.js'

const Home = () => {
    return (
        <View style={styles.container}>
            <Header title={'Categories'}/>
            <FlatList 
                data={categories} 
                keyExtractor={category => category} 
                renderItem={({item}) => <CategoryItem category={item}/>}
            />
        </View>
    )
}

export default Home