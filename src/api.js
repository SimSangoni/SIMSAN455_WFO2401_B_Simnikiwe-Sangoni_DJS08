import { initializeApp } from "firebase/app";
import { 
    getFirestore, 
    collection, 
    getDocs, 
    doc, 
    getDoc,
    query,
    where
} from "firebase/firestore/lite";


const firebaseConfig = {
    apiKey: "AIzaSyAQIvMwAGlnH2Zlzw674gTgBreFzQ4_JNU",
    authDomain: "vanlife-5efb8.firebaseapp.com",
    projectId: "vanlife-5efb8",
    storageBucket: "vanlife-5efb8.appspot.com",
    messagingSenderId: "12534045624",
    appId: "1:12534045624:web:7d4f92ef60b77063f40d4d"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)


const vansCollectionRef = collection(db, "vans")


export async function getVans() {
    const snapshot = await getDocs(vansCollectionRef);
    const vans = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }));
    return vans;
}

// getVans().then(vans => console.log(vans)).catch(error => console.error(error));

export async function getVan(id) {
    const docRef = doc(db, "vans", id)
    const snapshot = await getDoc(docRef)
    return {
        ...snapshot.data(),
        id: snapshot.id
    }
}

export async function getHostVans() {
    const q = query(vansCollectionRef, where("hostId", "==", "123"))
    const snapshot = await getDocs(q)
    const vans = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    return vans
}



export async function loginUser(creds) {
    const res = await fetch("/api/login",
        { method: "post", body: JSON.stringify(creds) }
    )
    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}