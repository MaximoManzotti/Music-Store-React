import firebase from 'firebase/app';
import '@firebase/firestore';
// import Instrumentos from '../components/ItemListContainer/ProductList/productlist';

const app = firebase.initializeApp({
    apiKey: "AIzaSyBwzmpMEg40EOu3yuIDsR_fmNay1492oxU",
    authDomain: "music-store-ecommerse.firebaseapp.com",
    projectId: "music-store-ecommerse",
    storageBucket: "music-store-ecommerse.appspot.com",
    messagingSenderId: "472901458793",
    appId: "1:472901458793:web:652480d151b5c863163bf8"
})

//  PARA AGREGAR PRODUCTOS DESCOMENTAR, Y AGREGAR AL ARRAY DE LISTA DE PRODUCTOS//

// const db = getFirestore();
// Instrumentos.forEach((obj) => {
//     db.collection("Productos").add({
//             categoria: obj.categoria,
//             Marca: obj.Marca,
//             Modelo: obj.Modelo,
//             descripcion: obj.descripcion,
//             Precio: obj.Precio,
//             Imagen: obj.Imagen,
//             Quantity: obj.Quantity,
//             destacado: false
//         }).then((docRef) => {
//             console.log("Producto registrado con ID: ", docRef.id);
//         })
//         .catch((error) => {
//             console.error("Error al agregar un documento: ", error);
//         })
// })

export function getFirebase() {
    return app;
}

export function getFirestore() {
    return firebase.firestore(app);
}