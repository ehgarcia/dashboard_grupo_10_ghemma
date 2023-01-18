import React from 'react'
import errorPicture from '../assets/images/404-error.png'
import '../assets/css/error.css';

export default function NotFound404() {
  return (
    <div className="container error">
       
        <img src={errorPicture} alt="" srcset="" />
        
    </div>
  )
}
