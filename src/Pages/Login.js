import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="container">
      <div className='leftside'>
      <div className="left-container">
      <div className='slogans'>
      <p > An institution of higher education is a partnership among students and alumni, faculty and administrators, donors and trustees, neighborhoods and more, to build a community - and a culture.</p>
      </div>
      <div className='image'>
        
        <img src='https://res.cloudinary.com/ddximhdei/image/upload/v1678794780/LinkedIn-Alumni-Connect-Banner-1776-1024x256_oj4ez5.jpg' className="photos2" alt="photo" />
        <img src='https://res.cloudinary.com/ddximhdei/image/upload/v1678797687/alumni-site-banner-image-2021-modified-for-web_qj5tlc.jpg' className="photos3" alt="photo" />
        <img src='https://res.cloudinary.com/ddximhdei/image/upload/v1678797687/alumni-site-banner-image-2021-modified-for-web_qj5tlc.jpg' className="photos4" alt="photo" />
      </div>
      </div>
      </div>
      <div className='formside'>
      <div className="right-container">
        <form className="form-container">
          <h1 className="form-title">Login</h1>
          <label>Email</label>
          <input type="email" />
          <label>Password</label>
          <input type="password" />
          <button type="submit">Login</button>
        </form>
      </div>
      </div>
    </div>
  );
};

export default Login;
