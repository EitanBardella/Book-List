import { StyleSheet, View, FlatList } from 'react-native'
import React from 'react'
import BookList from './BookList'

const Books = ({book,openModal, updateLecture}) => {
    return (
        <View style={styles.bookContainer}>
            <FlatList
            data={book}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <BookList openModal={openModal} item={item} updateLecture={updateLecture} />
            )}
            />
        </View>
    )
}

export default Books

const styles = StyleSheet.create({
    //Cards Contaner
    bookContainer: { backgroundColor: '#EF798A', gap: 25, padding: 20,},
    
})