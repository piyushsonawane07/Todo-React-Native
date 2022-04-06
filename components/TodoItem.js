import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity} from 'react-native'

export default function TodoItem({item, pressHandler}){

    return(
        <View>
            <TouchableOpacity style={styles.item} onPress={() => pressHandler(item.key)}>
                <Text>{item.text}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    item:{
        padding:16,
        marginTop:16,
        backgroundColor:'#bbb',
        borderWidth:1,
        borderStyle:'dashed',
        borderRadius:10
    }
})