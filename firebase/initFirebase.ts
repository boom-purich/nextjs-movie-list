import firebase from 'firebase/app';

//option
import 'firebase/auth'
// import 'firebase/firestore'
// import 'firebase/analytics'
// import 'firebase/storage'
// import 'firebase/performance'

const clientCredentials = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
}

const initFirebase = () => {
    if(!firebase.apps.length) {
        firebase.initializeApp(clientCredentials)

        if(typeof window !== 'undefined') {
            if('measurementId' in clientCredentials) {
                firebase.analytics();
                firebase.performance();
            }
        }

        console.log("Firebase was successfully init.");
    }
}

initFirebase();

export { firebase } ;

