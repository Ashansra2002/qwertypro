import React from 'react'
import './Center.css'
import { Link, useNavigate } from 'react-router-dom'
function Center() {
  
  return (
    <div>
      <div className='slogan'>
      <p > An institution of higher education is a partnership among students and alumni, faculty and administrators, donors and trustees, neighborhoods and more, to build a community - and a culture.</p>
      </div>
      
      <div className='buttons'>
        <Link to="/login">
        <button className='button1'>Login</button>
        </Link>
        <Link to="/Register">
        <button className='button2'>Register</button>
        </Link>
        
      </div>
      <div className='images'>
        
        <img src='https://res.cloudinary.com/ddximhdei/image/upload/v1678794780/LinkedIn-Alumni-Connect-Banner-1776-1024x256_oj4ez5.jpg' className="photo2" alt="image" />
        <img src='https://res.cloudinary.com/ddximhdei/image/upload/v1678797687/alumni-site-banner-image-2021-modified-for-web_qj5tlc.jpg' className="photo3" alt="image" />
        <img src='https://res.cloudinary.com/ddximhdei/image/upload/v1678797687/alumni-site-banner-image-2021-modified-for-web_qj5tlc.jpg' className="photo4" alt="image" />
      </div>

    </div>
  )
}

export default Center
