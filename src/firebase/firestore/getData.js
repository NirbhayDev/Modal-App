import { db } from "../firebase";
import Firebase from "firebase";





// Example get document
export const getDocumentById = async (collection_name, doc_id, callback) => {

    const userDocRef = await db.collection(collection_name).doc(doc_id);

    const doc = await userDocRef.get();
    if (!doc.exists) {
        callback(false);
    } else {
        callback(doc.data());
    }
};

// Example get image Gallary 
export const getImageGallary = async (collection_name, doc_id, callback) => {

    const userDocRef = await db.collection(collection_name).doc(doc_id).collection('MyGallary').doc(doc_id);

    const doc = await userDocRef.get();
    console.log(doc);
    debugger
    if (!doc.exists) {
        callback(false);
    } else {
        callback(doc.data());
    }
};

// Check User Exist or Not
export const checkUserDetails = async (collectionName, doc_id) => {

    let docRefClients = await db.collection(collectionName).doc(doc_id);
    const docClient = await docRefClients.get();

    if (docClient.exists) {
        const userData = { responseType: 'Success', userType: 'clients', data: docClient.data() }
        return userData;
    }
    
    else {
        const userData = { responseType: 'error', userType: '', data: 'No User Exist' }
        return userData;
    }
};

// Example get document
export const getDateDishes = (doc_id_1, doc_id_2, callback) => {

    let docRef = db.collection("example").doc(doc_id_1).collection("example").doc(doc_id_2)

    docRef.get().then(function (doc) {
        if (doc.exists) {
            let _push = {}; _push = doc.data(); _push.id = doc.id;
            callback();
        } else {
            callback(false);
        }
    });
};



//Get Client List 
export const getClients = (coachID,callback) => {
    let clientRef = db.collection("clients");
    clientRef.where('coach', '==', coachID).get().then(function (querySnapshot) {
        let ClientData=[];
        querySnapshot.docs.map((doc) => {
            let _push = {}; _push = doc.data(); _push.id = doc.id;
            ClientData.push(_push);
        });
        
        callback(ClientData);
    });
};



//Get Calendar Tab Data
export const getCalendarClients = async (coachID,callback) => {
    let ClientData=[];

    const citiesRef = db.collection('coaches').doc(coachID).collection("calendar");
    const snapshot = await citiesRef.get();
    if (snapshot.empty) {
      console.log('No matching documents.');
      return;
    }  
   
    await Promise.all(snapshot.docs.map(async(doc) => {
      let _push = {}; _push = doc.data(); _push.id = doc.id;
      let clientRef = await db.collection("coaches").doc(coachID).collection("calendar").doc(doc.id).collection("clients");      
      const clientDataVal=await clientRef.get()
      clientDataVal.docs.map((clients)=>{
       let _push = {}; _push = clients.data(); _push.id = clients.id;
        _push.date =doc.id ;
        ClientData.push(_push);
    })    
    })); 
    console.log('Array');
    console.log(ClientData);
    callback(ClientData);
}
export const chatListener = (counter, client_id, callback) => {
    let docRef =  db.collection("clients").doc(client_id).collection("Chat").orderBy("created", "asc").limitToLast(counter)

	return docRef.onSnapshot((querySnapshot) => {
        if(querySnapshot.size > 0){
            let _data = []
            querySnapshot.docs.map((doc, idx) => {
                let _push = {}; _push = doc.data(); _push.id = doc.id; _push.key = idx
                _data.push(_push)
            })
            callback(_data.reverse());
        } else{
            callback(false);
        }
	});
};

export const isTypingListener = (client_id, callback) => {
    let docRef =  db.collection("clients").doc(client_id).collection("Chat").doc("is_typing")

	return docRef.onSnapshot((doc) => {
        if(doc.exists){
            let _push = {}; _push = doc.data(); _push.id = doc.id;
            callback(_push);
        } else{
            callback(false);
        }
	});
};


//Get Client List 
export const getOnlyClientsList = (user_id, callback) => {
   
    let clientRef = db.collection("clients");
    clientRef.where("coach", "==", user_id).get().then(function (querySnapshot) {
        let ClientData=[];
        querySnapshot.docs.map((doc) => {
            let _push = {}; _push = doc.data(); _push.id = doc.id;
            ClientData.push(_push);
        });
        
        callback(ClientData);
    });
};
export const getCoach = async (coach_id, callback) => {

    const userDocRef = await db.collection("coaches").doc(coach_id);

    const doc = await userDocRef.get();
    if (!doc.exists) {
        callback(false);
    } else {
        callback(doc.data()); 
    }
};

export const coachChatListener = (client_id, callback) => {
    let docRef =  db.collection("clients").doc(client_id).collection("Chat").orderBy("created", "desc").limit(1)

	return docRef.onSnapshot((querySnapshot) => {
        console.log()
        if(querySnapshot.size > 0) {
            let _push = {}; _push = querySnapshot.docs[0].data(); _push.id = querySnapshot.docs[0].id;
            callback(_push);
        } else{
            callback(false);
        }
	});
};
