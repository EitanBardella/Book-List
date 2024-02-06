import { StyleSheet, Text, View, Button, Modal } from 'react-native'
import React from 'react'

const ModalDeleteBook = ({modal, openModal, deleteBook, bookSelected }) => {
    return (
        <Modal visible={modal} style={styles.modal} animationType='slide' onRequestClose={() => openModal({})}>
            <View>
                <Text>¿Estás seguro de querer eliminarlo?</Text>
                <Button title='Sí' onPress={deleteBook} />
                <Button title='No' onPress={() => openModal({})} />
            </View>
        </Modal>
    )
}

export default ModalDeleteBook

const styles = StyleSheet.create({
    //Modal
    overlay:{},
    modal:{},
})