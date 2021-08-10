import { db } from "../firebase";
import Firebase from "firebase";


// Example delete
export function exampleDeleteFunction(doc_id_1, doc_id_2,  callback) {

  let docRef = db.collection("example").doc(doc_id_1).collection("example").doc(doc_id_2)

  docRef.delete().then(() => {
    callback()
  })
}
