import { StyleSheet, Text, View ,Switch, Image} from 'react-native'
import React from 'react'
import ButtonModel from './ButtonModel'
import img from "../../assets/NarutoTomo1.jpg"
const BookList = ({item, openModal, updateLecture}) => {
    return (
        <View key={item.id} style={styles.bookCard}>
            {/*Añadidos*/}
            <View style={styles.bookTittle}>
                <Text style={styles.bookTextTittle}>Titulo: {item.title}</Text>
                <Text style={styles.bookTextCategory}>Categoria: {item.category}</Text>
                {/*Preguntar pq cuando pongo url no se ve la img sino que se ve el espacio en blanco, Para probas descomentar el codigo de abajo, y comentar la img*/}
                {/* {item.url && (
                    <View style={styles.imageContainer}>
                        <Image source={{ uri: item.url }} style={styles.bookImg} />
                    </View>
                )} */}
                <Image source={img} style={styles.bookImg} />

            </View>
            {/*Boton*/}
            <ButtonModel title='DELETE' onPress={() => openModal(item)} />
            {/*Fechas*/}
            <View style={styles.bookDates}>
                <Text style={styles.bookTextDates}>Fecha Inicio: {item.createDate}</Text>
                <Text style={styles.bookTextDates}>Fecha Fin: {item.updateDate}</Text>
            </View>
            <View style={styles.SwitchContainer} >
                <Text style={styles.SwitchText}> {item.leido ? "Leido" : "Pendiente"} </Text>
                <Switch value={item.leido} onValueChange={()=>updateLecture(item.id)} />
            </View>
        </View>
    )
}
//Falta estilar para ver si se puede dividir en columnas y filas
export default BookList

const styles = StyleSheet.create({
    //Cards
    bookCard: { 
        backgroundColor: '#CEE5F2',
        borderRadius: 10,
        padding:20,
        marginVertical:10,
        alignItems:"flex-start"
    },
    bookTittle:{
        flexDirection:"column"
    },
    bookTextTittle:{
        fontSize: 23,
        textAlign: 'center',
        color: "black",
        paddingVertical:2
    },
    bookTextCategory:{
        fontSize: 18,
        textAlign: 'center',
        color: "black",
        paddingBottom:7
    },
    bookImg:{
        width: 100, // Ajusta el ancho según tus necesidades
        height: 150, // Ajusta la altura según tus necesidades
        resizeMode: 'center', // Opciones: 'cover', 'contain', 'stretch', 'repeat', 'center'
        borderRadius: 5, // Bordes redondeados (opcional)
        marginTop: 10,
    },
    imageContainer: {
        borderWidth: 1,
        borderColor: 'red',
    },

    bookDates:{
        alignItems:"flex-start"
    },
    bookTextDates: { fontSize: 14,  textAlign: 'center', color: "black", paddingTop:5 },
    SwitchContainer:{
        marginTop:15,
        flexDirection:"row",
        justifyContent:"flex-start",
        marginLeft:"auto",
        alignItems:"center"
    },
    SwitchText:{
        fontSize:15,
    },
})