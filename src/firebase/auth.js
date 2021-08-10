import { auth } from "./firebase";
import  firebase from 'firebase';
import { getDocumentById,checkUserDetails} from './firestore/getData';
import { addDocument } from './firestore/saveData';
import { store } from "../store";
import {saveUserInfo} from '../action/authAction';

// Sign Up
export const doCreateUserWithEmailAndPassword = (email, password, callback) =>
  auth.createUserWithEmailAndPassword(email, password)
    .then((result) => {
      console.log(result);
      const userID = result.user.uid;
      localStorage.setItem('userID',userID)

      const responseObj = { 'type': 'success', 'data': userID };
      getDocumentById('models', userID, (isUser) => {
        if (isUser) {
          alert('user exist');
        }
        else {
          const responseObj = { 'type': 'success', 'data': userID };
          callback(responseObj)
        }
      })
    })
    .catch((error) => {
      let errorCode = error.code;
      let errorMessage = error.message;

      if (errorCode == "auth/weak-password") {
        errorMessage = "Weak Password!";
      }
      if (callback) {
        const responseObj = { 'type': 'error', 'data': errorMessage };
        callback(responseObj);
      }
    });

// Sign In
export function doSignInWithEmailAndPassword(email, password, callback) {
  auth
    .signInWithEmailAndPassword(email, password)
    .then(async (result) => {
      if (callback)
      {
        const userID = result.user.uid;
        localStorage.setItem('userID',userID)
        //check whether exist or not in firestore before creating account 
      // const getUserInfo= await checkUserDetails('clients','coaches',userID);
       //const {responseType,userType,data}=getUserInfo;
       let data={}; 
       data.userID= userID; 
      const responseObj = {'type': 'success','userType':'Modal','data': data };
       callback(responseObj)
      }
    })
    .catch((error) => {
      if (callback) {
        const responseObj = { 'type': 'error','userType':'','data': error.message };
        callback(responseObj)
      }
    });
}

// Sign out
export const doSignOut = () => {
  auth.signOut().then(() => {
    store.dispatch(saveUserInfo({}))
  })
};


// Password Reset
export function doPasswordReset(email, callback) {
  auth
    .sendPasswordResetEmail(email)
    .then((result) => {
      if (callback) callback(result);
    })
    .catch((error) => {
      console.error("login error", error);
      if (callback) callback("error", error);
    });
}

// Password Change
export const doPasswordUpdate = (password) =>
  auth.currentUser.updatePassword(password);



  export const authByGmail = async (authType,typeOfUser,callback) => {
    var provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth()
    .signInWithPopup(provider)
    .then(async(result) => {
      var credential = result.credential;

      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      console.log('User---------');
      console.log(user);
      let userInfo={
        user_name: user.displayName,
        email: user.email,
      }
      localStorage.setItem('userInfo',JSON.stringify(userInfo));
      const userID = user.uid;
      localStorage.setItem('userID',userID)
      const getUserInfo= await checkUserDetails('users',userID);
      const {responseType,userType,data}=getUserInfo;
      if(responseType=='error' && authType=='register')
      {
        if(typeOfUser=='Model')
        {
          const ModelData={
            user_name:user.displayName,
            email:user.email,
            user_type:typeOfUser,
            created_at:new Date(),
            about_us:'',
            address:'',
            city:'',
            contact_no:'',
            country:'',
            date_of_birth:'',
            generes:['Acting','Fashion','Modeling'],
            profile_photo:'',
            marital_status:'Single',
            zipcode:'',
            other_details:[{}]
          }
          
            addDocument('users',userID,ModelData,(res)=>{
              ModelData.userID=userID;
              ModelData.userType=typeOfUser;
             
              callback(ModelData) ;
            })
        }
      }
      else if(responseType=='error' && authType=='login')
      {
        
        const loginRes={userID:'',message:'No user exist with this email address please sign up .'}    
          return loginRes;
      }
     else if(responseType=='Success') 
     {  
       data.userID=userID;
        data.userType=typeOfUser;
      
        callback(data);
     }
    }).catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);

      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  };
