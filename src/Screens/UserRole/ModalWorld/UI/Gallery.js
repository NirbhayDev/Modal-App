import React from 'react';
import './Gallery.css';

function Gallery(props) {
    
    
    return (
        <div className="main">
        <div className="gallery">
        {props.urls.map((item, index) =>{
            return<div className="pics" key={index}>
                <img src={item} alt="" style={{width:'100%'}} />
            </div>
            
        })}
        </div> 
        </div>
    )
}

export default Gallery;
