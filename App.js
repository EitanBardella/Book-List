import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, FlatList } from 'react-native';
import uuid from "react-native-uuid"
import ModalDeleteBook from './src/components/ModalDeleteBook';
import AddBook from './src/components/AddBook';
import Books from './src/components/Books';



export default function App() {
  // Estados para añadir libros
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [url, setUrl] = useState("");
  const [book, setBook] = useState([]);
  // Estado para guardar datos
  const [bookSelected, setBookSelected] = useState({});
  // Estados para el modal
  const [modal, setModal] = useState(false);

  // Funcion para añadir libro
  const addBook = () => {
    const newBook = {
      id: uuid.v4(),
      createDate: new Date().toLocaleString(),
      updateDate: new Date().toLocaleString(),
      leido:false,
      title: title,
      category: category,
      url: url
    };
    // Asignar el identificador antes de agregar a la lista
    setBook([...book, newBook]);
    console.log(book);
    setTitle('');
    setCategory('');
    setUrl("");
  };

  const handleName = (texto) => {
    setTitle(texto);
  };

  const handleCategory = (texto) => {
    setCategory(texto);
  };

  const handleUrl = (urls) =>{
    setUrl(urls);
  }

  // Funcion para modal
  const openModal = (item) => {
    setBookSelected(item);
    setModal(!modal);
  };

  // Funcion para eliminar libro
  const deleteBook = () => {
    // Sobre el mismo array, filtra el libro por su id para eliminarlo
    setBook(book.filter((bookItem) => bookItem.id !== bookSelected.id));
    setModal(!modal);
  };
  //Funcion para el switch
  const updateLecture = (id) => {
    setBook(book.map(bookItem => {
      if (bookItem.id === id) {
        return { ...bookItem, leido: !bookItem.leido };
      }
      return bookItem;
    }));
  };
  
  return (
    <View style={styles.container}>
      {/* Header */}
      <AddBook addBook={addBook} handleCategory={handleCategory} handleName={handleName} title={title} category={category} handleUrl={handleUrl} url={url} />
      {/* Contenido */}
      <Books openModal={openModal} book={book} updateLecture={updateLecture}/>
      {/*Falta estilar el overlay*/}
        <View style={styles.overlay}>
          {/*Componente del Modal*/}
          <ModalDeleteBook modal={modal} deleteBook={deleteBook} bookSelected={bookSelected} openModal={openModal} />
        </View>
    </View>
  );
}







const styles = StyleSheet.create({
  //Contenedor gral
  container: { backgroundColor: '#D6FFFB', flex: 1, paddingTop: 30 },
});





      // <ScrollView style={styles.bookContainer}>
      //   {book.map((bookItem, index) => (
      //     <View key={index} style={styles.bookCard}>
            
      //       <Text style={styles.bookText}>{bookItem.title}</Text>
      //       <Text style={styles.bookText}>{bookItem.categoria}</Text>
            
      //       <Button title='DELETE' onPress={() => console.log('DELETE button pressed')} />
      //     </View>
      //   ))}
      // </ScrollView> 
