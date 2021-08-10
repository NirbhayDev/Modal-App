import React, { useEffect, useState } from 'react'
import './ModelsImageGallery.css'
import { NavLink, Link } from 'react-router-dom'
import Navbar from '../../../Components/Navbar/Navbar'
import Gallery from './UI/Gallery'
import { uploadMedia } from '../../../firebase/storage';
import { storage } from "../../../../src/config/index";
import { updateMygalary } from '../../../firebase/firestore/updateData'
import Snackbar from '@material-ui/core/Snackbar'
import IconButton from '@material-ui/core/Button'
import { CircularProgress } from '@material-ui/core'
import { Height } from '@material-ui/icons'
import FullPageLoader from './FullPageLoader';


const UploadPhotos = () => {
  const [images, setImages] = useState([]);
  const [urls, setUrls] = useState([]);
  const [progress, setProgress] = useState(0);
  const [snackBarOpen, setSnackBarOpen] = useState(false);
  const [snackbarMsg, setSnackbarMsg] = useState('');
  const [selectedImage, setSelectedImage] = useState('');
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showNavigation, setShowNavigation] = useState(false);

  const useFullpageLoader = () => {
    return [
      loading ? <FullPageLoader /> : null,
      () => setLoading(true),
      () => setLoading(false),
    ]
  }


  const [loader, showLoader, hideLoader] = useFullpageLoader();

  const snackBarClosedHandler = (event) => {
    setSnackBarOpen(false);
  }

  const snackBarOpenHandler = (event) => {
    setSnackBarOpen(true);
  }


  const handleImageChange = (e) => {
    // console.log(e.target.files[])
    if (e.target.files) {

      const filesArray = Array.from(e.target.files).map((file) => URL.createObjectURL(file));

      // console.log("filesArray: ", filesArray);

      setSelectedFiles((prevImages) => prevImages.concat(filesArray));
      Array.from(e.target.files).map(
        (file) => URL.revokeObjectURL(file) // avoid memory leak
      );
    }
    for (let i = 0; i < e.target.files.length; i++) {
      const newImage = e.target.files[i];
      newImage["id"] = Math.random();
      setImages((prevState) => [...prevState, newImage]);
    }
  };

  const renderPhotos = (source) => {
    console.log('source: ', source);
    return source.map((photo) => {
      return <img src={photo} alt="" key={photo} style={{ width: 150, height: 'Auto', marginLeft: '10%', marginTop: '10%' }} />;
    });
  };


  const handleUpload = async () => {
    showLoader();
    const userID = await localStorage.getItem('userID');

    const promises = [];
    images.map((image) => {
      const uploadTask = storage.ref(`users/${userID}/my-collection/${image.name}`).put(image);
      promises.push(uploadTask);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progress);
        },
        (error) => {
          console.log(error);
        },
        async () => {
          await storage
            .ref(`users/${userID}/my-collection`)
            .child(image.name)
            .getDownloadURL()
            .then((urlData) => {
              console.log('data Url');
              console.log(urlData)
              console.log('..........')
              updateMygalary('users', userID, urlData, (res) => {
                console.log(res);
              })
              setUrls((prevState) => [...prevState, urlData]);
            });
        }
      );
    });

    Promise.all(promises)
      .then(() => {
        snackBarOpenHandler();
        hideLoader();
        let Data = [];
        console.log("urls", urls);

      })
      .catch((err) => console.log(err));
  };

  // console.log("images: ", images);



  return (
    <>
      {/* top Navbar */}
      {loader}
      <Navbar />

      <Snackbar
        anchorOrigin={{ vertical: 'center', horizontal: 'center' }}
        open={snackBarOpen}
        autoHideDuration={1500}
        onClose={snackBarClosedHandler}
        message="File Uploded To server"
        action={[
          <IconButton
            key="close"
            aria-label="close"
            color="inherit"
            onClick={snackBarClosedHandler}
          >
            X
          </IconButton>
        ]}
      />

      <section className='py-3'>
        <div className='container'>
          <div className='uploadPhotoField mt-5'>
            <div className='custom-file'>
              <input type='file' className='custom-file-input' id='customFile' multiple onChange={handleImageChange} />
              <label className='custom-file-label' for='customFile'>Choose file</label>
            </div>
            <button
              type='submit'
              className='btn text-center pink-bg signup-button widht100'
              onClick={handleUpload}
            >Upload
            </button>
          </div>

          <div className="result">{renderPhotos(selectedFiles)}</div>
        </div>
      </section>
    </>
  )
}
export default UploadPhotos
