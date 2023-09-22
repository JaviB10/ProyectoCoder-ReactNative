import { Pressable, Text } from 'react-native'
import styles from './CategoryItem.style.js'
import { Card } from '../../../../components' 

const CategoryItem = ({ category }) => {
    return (
        <Pressable onPress={() => console.log(`Esta es la categoria ${category}`)}>
            <Card style={styles.container}>
                <Text style={styles.text}>{category}</Text>
            </Card>
        </Pressable>
    )
}

export default CategoryItem

