import { FlatList, View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import allproducts from '../../data/products.js'
import styles from './Products.style.js'
import { Header, SearchInput } from '../../components'

const Products = ({ category }) => {

    const [arrProducts, setArrProducts] = useState([])
    const [keyword, setKeyword] = useState('')

    useEffect(() => {
        if(category) {
            const products = allproducts.filter(
                product => product.category === category
            )
            const productsFiltered = products.filter(
                product => product.title.includes(keyword)
            )
            setArrProducts(productsFiltered)
        } else {
            const productsFiltered = allproducts.filter(
                product => product.title.includes(keyword)
            )
            setArrProducts(productsFiltered)
        }
    }, [category, keyword])
    

    return (
        <View style={styles.container}>
            <Header title={category}/>
            <SearchInput onSearch={setKeyword}/>
            <View style={styles.listContainer}>
                <FlatList
                    data={arrProducts}
                    renderItem={({ item }) => (
                    <View>
                        <Text>{item.title}</Text>
                    </View>
                    )}
                    keyExtractor={item => item.id}
                />
            </View>
        </View>
    )
}

export default Products

