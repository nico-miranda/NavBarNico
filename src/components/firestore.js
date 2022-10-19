// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, query, where, addDoc, setDoc } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDdfgTdgPNicYiKbtf_MWR8LT18vtu3914",
    authDomain: "reactnico37555.firebaseapp.com",
    projectId: "reactnico37555",
    storageBucket: "reactnico37555.appspot.com",
    messagingSenderId: "666398692142",
    appId: "1:666398692142:web:6384e319f98f2ead0760bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);


export async function getItems(){
    const miCollection = collection( firestore, "sanitario");
    let respuesta = await getDocs(miCollection)
    
    let dataDocs = respuesta.docs.map((  documento ) => {
        let docFormateado = { ...documento.data(), id: documento.id};
            return docFormateado;
    });
    return dataDocs;    
}

export async function getItemDetail(idParams){
    const docRef = doc(firestore, "sanitario", idParams);
    const docSnapshot = await getDoc(docRef);

    return { ...docSnapshot.data(), id: docSnapshot.id };
} 

export async function getItemsByCategory(catParams){
    const miCollection = collection(firestore, "sanitario"); 
    const queryCategory = query(miCollection, where("category", "==", catParams));

    const respuesta = await getDocs(queryCategory);

    let dataDocs = respuesta.docs.map((  documento ) => {
        let docFormateado = { ...documento.data(), id: documento.id};
            return docFormateado;
    });
    return dataDocs;
}

export async function createBuyOrder(orderData){
    const miCollection = collection(firestore, "orders");
    let respuesta = await addDoc(miCollection, orderData);

    return respuesta.id
}

export default firestore;
