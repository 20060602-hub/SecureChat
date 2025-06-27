// Import Firebase functions
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYccN8Rp-vptNrBVsUUC2i72NbvRV8ZF8",
  authDomain: "chat-3eb3a.firebaseapp.com",
  projectId: "chat-3eb3a",
  storageBucket: "chat-3eb3a.firebasestorage.app",
  messagingSenderId: "644153889817",
  appId: "1:644153889817:web:f2109bf0013a47ef348688",
  measurementId: "G-4YPCWYDLG3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);


const vapidKey = "BE1psWMabVnS9C-p_Difji4fYkpWbJhHc0fH1-6DyBHv08QOwN2PuoNxc6YUS7_7WSe75LIONWcht8ELJfCZoRc";
export const requestFCMToken = async ()=>{
    return Notification.requestPermission()
    .then((permission)=>{
        if(permission == "granted"){
            return getToken(messaging, {vapidKey})
        }else{
            throw new Error("Notification Not Granted")
        }
    })
    .catch((err)=>{
        console.error("Error getting FCM token: ",err)
        throw err;
    })
}


export const onMessageListener = () =>
  new Promise((resolve, reject) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
  });
