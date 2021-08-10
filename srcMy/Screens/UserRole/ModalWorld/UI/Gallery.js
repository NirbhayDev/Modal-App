import React from 'react';
import './Gallery.css';

function Gallery() {
    let data = [
        {
            id: 1,
            imgsrc: './Images/model1.jpg'
        },
        {
            id: 2,
            imgsrc: './Images/model2.jpg'
        },
        {
            id: 3,
            imgsrc: './Images/model3.jpg'
        },
        {
            id: 4,
            imgsrc: './Images/model4.jpg'
        },
        {
            id: 5,
            imgsrc: './Images/model5.jpg'
        },
        {
            id: 6,
            imgsrc: './Images/model6.jpg'
        },
        {
            id: 7,
            imgsrc: './Images/model7.jpg'
        },
        {
            id: 8,
            imgsrc: './Images/model1.jpg'
        },
        {
            id: 9,
            imgsrc: './Images/model2.jpg'
        },
        {
            id: 10,
            imgsrc: './Images/model3.jpg'
        },
        {
            id: 11,
            imgsrc: './Images/model4.jpg'
        },
        {
            id: 12,
            imgsrc: './Images/model5.jpg'
        },
        {
            id: 13,
            imgsrc: './Images/model6.jpg'
        },
        {
            id: 14,
            imgsrc: './Images/model7.jpg'
        },
        {
            id: 15,
            imgsrc: './Images/model1.jpg'
        },
        {
            id: 16,
            imgsrc: './Images/model2.jpg'
        },
        {
            id: 17,
            imgsrc: './Images/model2.jpg'
        },
       
        
    ];

    
    return (
        <div className="main">
        <div className="gallery">
        {data.map((item, index) =>{
            return<div className="pics" key={index}>
                <img src={item.imgsrc} alt="" style={{width:'100%'}} />
            </div>
            
        })}
        </div> 
        </div>
    )
}

export default Gallery;
