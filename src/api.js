import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";


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
    const snapshot = await getDocs(vansCollectionRef)
    snapshot.docs.map(doc => ({
        ...doc.data()
    }))
}


// export async function getVans(id) {
//     const url = id ? `/api/vans/${id}` : "/api/vans"
//     const res = await fetch(url)
//     if (!res.ok) {
//         throw {
//             message: "Failed to fetch vans",
//             statusText: res.statusText,
//             status: res.status
//         }
//     }
//     const data = await res.json()
//     return data.vans
// }

export async function getHostVans(id) {
    const url = id ? `/api/host/vans/${id}` : "/api/host/vans"
    const res = await fetch(url)
    if (!res.ok) {
        throw {
            message: "Failed to fetch vans",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.vans
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