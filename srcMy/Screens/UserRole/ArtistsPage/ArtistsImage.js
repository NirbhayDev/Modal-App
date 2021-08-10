import React from 'react'
import NavbarTop from '../../../ModellingService/UI/NavbarTop';
import ArtistSearch from './ArtistSearch';
import Gallery from '../ModalWorld/UI/Gallery';
function ArtistsImage() {
    return (
        <>
            <NavbarTop />
      <ArtistSearch />
      <div className="container">
      <h3 className="py-5 text-white  heading1">
          Most Loved This Month
        </h3>
        <div className="py-5">
        <Gallery/>

        </div>

        </div>
        </>
    )
}

export default ArtistsImage;
