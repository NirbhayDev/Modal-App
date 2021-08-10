import {db} from '../firebase';
import Firebase from 'firebase';
// To Update Data
export function updateProfile(collection_name, doc_id, data, callback) {
  let docRef = db.collection(collection_name).doc(doc_id);
  docRef
    .update(data)
    .then(res => {
      callback(true);
    })
    .catch(error => {
      console.error('Error updating document: ', error);
    });
}

// Example update doc
export function updateMygalary(collection_name,doc_id, data, callback) {
  let docRef = db.collection(collection_name).doc(doc_id).collection('MyGallary').doc(doc_id);
 
  var arrUnion = docRef.set({
    ImageData: Firebase.firestore.FieldValue.arrayUnion(data)
  }, 
  {merge: true}).then(res => {
      callback(true);
    })
    .catch(error => {
      console.error('Error updating document: ', error);
    });
}

export function updateReadState(last_message_id, client_id) {
  let docRef = db.collection('clients').doc(client_id).collection('Chat').doc(last_message_id);
  docRef.update({read: true}).then(() => {});
}

export function updateIsTyping(client_id, bool) {
  let docRef = db.collection('clients').doc(client_id).collection('Chat').doc('is_typing');
  docRef.set({client_typing: bool}, {merge: true}).then(() => {});
}
