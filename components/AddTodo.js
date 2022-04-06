import React, {useState} from 'react'
import { View, StyleSheet, Text, TextInput, Button} from 'react-native'

export default function AddTodo(){

    return(
        <View>
            <Text>Enter Your Todo</Text>
            <TextInput style={styles.input}/>
        </View>
    )
}

const styles = StyleSheet.create({
    input:{
        borderWidth:1,
        marginTop:5,
        borderColor:'#000',
        padding:10,
        borderRadius:5
    }
})