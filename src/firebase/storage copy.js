import { storage } from "./firebase";
// User API

export async function deleteMediaFromStorage(url, callback, error) {
  // Create a reference to the file to delete
  var desertRef = storage.refFromURL(url);
  // Delete the file
  desertRef
    .delete()
    .then(function () {
      if (callback) callback();
    })
    .catch(function (err) {
      if (error) error();
    });
}

export async function deleteMediaArrayFromStorage(array_of_urls, callback) {
  if (array_of_urls) {
    Promise.all(
      array_of_urls.map(async (item) => {
        return await storage.refFromURL(item).delete();
      })
    )
      .then(() => {
        callback();
      })
      .catch(() => {
        callback();
      });
  } else {
    callback();
  }
}

function S4() {
  return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
}

export async function uploadMedia(file, content, storageUrl, progressCallback, callback, error) {
  var reader = new FileReader();
  let _file_name;
  switch (file.type) {
    case "video/mp4":
      _file_name = S4() + ".mp4";
      break;
    case "video/quicktime":
      _file_name = S4() + ".mov";
      break;
    case "image/png":
      _file_name = S4() + ".png";
      break;
    case "image/jpeg":
      _file_name = S4() + ".jpg";
      break;
    case "application/pdf":
      _file_name = S4() + ".pdf";
      break;
    case "application/zip":
      _file_name = S4() + ".zip";
      break;
  }

  reader.onloadend = function (evt) {
    var blob = new Blob([evt.target.result], { type: "image/jpeg" });
    var storageRef = storage.ref(storageUrl + S4() + ".jpg");
    var uploadTask = storageRef.put(blob);
    uploadTask.on(
      "state_changed",
      function (snapshot) {
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        if (progressCallback) progressCallback(progress);
      },
      function (err) {
        console.log('====================================');
console.log("inhere ", err);
console.log('====================================');
        if (error) error(err);
      },
      function () {
        uploadTask.snapshot.ref
          .getDownloadURL()
          .then(function (downloadURL) {
            callback(downloadURL);
          })
          .catch((err) => {});
      }
    )
  }

  reader.onerror = function (e) {};
  reader.readAsArrayBuffer(file);
}
