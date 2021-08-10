import { db } from "../firebase";
import Firebase from "firebase";


// Example save to doc with auto doc id: doc()
export function addDocument(collection_name, doc_id, data, callback) {
  let docRef = db.collection(collection_name).doc(doc_id);
  docRef.set(data)
    .then((res) => {
      callback(true)
    })
    .catch((error) => {
      console.error("Error updating document: ", error);
    });
}


export function saveMessage(client_id, content, callback) {

  let docRef = db.collection("clients").doc(client_id).collection("Chat")

  docRef.add(content)
    .then( (docRef) => {
      callback(docRef.id)
    })
    .catch( (error) => {
      callback(false)
    });
}
