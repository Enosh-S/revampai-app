import NextAuth from "next-auth"
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import GoogleProvider from "next-auth/providers/google"
import TwitterProvider from "next-auth/providers/twitter"
import { FirebaseAdapter }  from "@next-auth/firebase-adapter";


const firebaseConfig = {
    apiKey: "AIzaSyCdowZjDeSyOHV0ReMXr09FsCvT8AKKLU8",
    authDomain: "revamp-ai.firebaseapp.com",
    projectId: "revamp-ai",
    storageBucket: "revamp-ai.appspot.com",
    messagingSenderId: "1090983906436",
    appId: "1:1090983906436:web:e56fe7380ebaedee9c86d1",
    
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app);






export default NextAuth({
  // Configure one or more authentication providers
  adapter: FirebaseAdapter(db),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // TwitterProvider({
    //     clientId: process.env.TWITTER_CLIENT_ID,
    //     clientSecret: process.env.TWITTER_CLIENT_SECRET,
    // }),// ...add more providers here
  ],
  
})