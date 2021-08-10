import {storage} from './firebase';
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
      array_of_urls.map(async item => {
        return await storage.refFromURL(item).delete();
      }),
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

export async function uploadMedia(file,fileName,storageUrl, progressCallback, error, callback) {
  let _file_name;

  // switch (file.type) {
  //   case "video":
  //     _file_name = S4() + ".mp4";
  //     break;
  //   case "image":
  //     _file_name = S4() + ".jpg";
  //     break;
  // }
  _file_name=fileName+ ".jpg";

  var storageRef = storage.ref(storageUrl + _file_name);
  var uploadTask = storageRef.put(file);

    uploadTask.on(
      "state_changed",
      function (snapshot) {
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        if (progressCallback) progressCallback(progress);
      },
      function (err) {
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
    );
}

async function uriToBlob(file) {
  return await new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.onload = function () {
      resolve(xhr.response);
    };

    xhr.onerror = function () {
      reject(new Error('uriToBlob failed'));
    };


    xhr.responseType = 'blob';

    xhr.open('GET', file, true);

    xhr.send(null);
  });
}

