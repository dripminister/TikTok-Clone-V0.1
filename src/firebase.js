import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
	apiKey: "AIzaSyB6m9JLsdNkGFE-OmjakddNXZMrk-BT6yI",
	authDomain: "tiktok-clone-5782a.firebaseapp.com",
	projectId: "tiktok-clone-5782a",
	storageBucket: "tiktok-clone-5782a.appspot.com",
	messagingSenderId: "811216302745",
	appId: "1:811216302745:web:e116d39bfc28f0c6633e08",
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
