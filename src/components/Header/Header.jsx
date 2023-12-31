import { Text, View } from 'react-native'
import styles from './Header.style.js'

const Header = ({ title }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{title}</Text>
        </View>
    )
}

export default Header

