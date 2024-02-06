import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ButtonModel = ({title, onPress}) => {
    return (
        <Pressable onPress={onPress} style={styles.ButtonContainer} >
            <Text style={styles.ButtonText}> {title} </Text>
        </Pressable>
    )
}

export default ButtonModel

const styles = StyleSheet.create({
    ButtonContainer:{
        backgroundColor:"#00B2CA",
        width:"80%",
        height:45,
        paddingVertical:10,
        alignItems:"center",
        justifyContent:"center",
        marginHorizontal:30,
        marginVertical:10,
        borderRadius:10
    },
    ButtonText:{
        fontSize:18
    }
})