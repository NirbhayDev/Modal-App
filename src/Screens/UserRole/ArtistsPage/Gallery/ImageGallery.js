import React from 'react'
import Navbar from '../../../../Components/Navbar/Navbar'
import ArtistSearch from '../ArtistSearch'
import Gallery from '../../ModalWorld/UI/Gallery'

function ImageGallery () {
  return (
    <div>
      <Navbar />
      <ArtistSearch />
      <div className='container'>
        <h3 className='py-5 text-white  heading1'>Most Loved This Month</h3>
        <div className=''>
          <Gallery />
        </div>
      </div>
    </div>
  )
}

export default ImageGallery
