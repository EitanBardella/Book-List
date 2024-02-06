import { StyleSheet, TextInput, View, Button } from 'react-native'
import React from 'react'
import ButtonModel from './ButtonModel'

const AddBook = ({handleName, handleCategory, addBook, title, category, handleUrl, url}) => {
    return (
        <View style={styles.inputContainer}>
            <View style={styles.TextinputContainer}>
                <TextInput onChangeText={handleName} value={title} placeholder='Ingrese Libro' placeholderTextColor={"#606060"} style={styles.input} />
                <TextInput onChangeText={handleCategory} value={category} placeholder='Ingrese categoria' placeholderTextColor={"#606060"} style={styles.input} />
                <TextInput onChangeText={handleUrl} value={url} placeholder='Ingrese url de Portada del Libro' placeholderTextColor={"#606060"} style={styles.input} />
            </View>
            <View>
                <ButtonModel title='ADD BOOK' onPress={addBook} />
            </View>
        </View>
    )
}

export default AddBook

const styles = StyleSheet.create({
    //Input para añadir
    inputContainer: { flexDirection: 'column', alignItems: 'start', },
    TextinputContainer: {marginLeft:20.5},
    input: { width: "80%", borderBottomWidth: 2, borderColor: 'black', marginVertical:5, marginHorizontal:10, paddingHorizontal: 10, paddingVertical: 5, color: "black" },
})