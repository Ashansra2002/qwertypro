import React, { useState } from 'react';
import './Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    branch: '',
    year: '',
    semester: '',
    skills: [],
    company: [],
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    const currentArray = formData[name];
    let updatedArray;
    if (checked) {
      updatedArray = [...currentArray, event.target.value];
    } else {
      updatedArray = currentArray.filter((item) => item !== event.target.value);
    }
    setFormData((prevState) => ({
      ...prevState,
      [name]: updatedArray,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div className="registration-container">
      <div className='leftsside'>
        <div className="lefts-container">
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
      <div className='formsside'>
        <div className="forms-container">
          <h2>Register</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className='headings1' >Name</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required />
            </div>
            <div className="form-group">
              <label >Email</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required />
            </div>
            <div className="form-group">
              <label >Password</label>
              <input type="password" id="password" name="password" value={formData.password} onChange={handleInputChange} required />
            </div>
            <div className="form-group">
              <label >Phone Number</label>
              <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} required />
            </div>
            <div className="form-group">
              <label >Branch</label>
              <select id="branch" name="branch" value={formData.branch} onChange={handleInputChange} required>
                <option value="">--Select Branch--</option>
                <option value="CSE">Computer Science and Engineering</option>
                <option value="IT">Information Technology</option>
                <option value="ECE">Electronics and Communication Engineering</option>
                <option value="ME">Mechanical Engineering</option>
              </select>
            </div>
            <div className="form-group">
              <label>Year</label>
              <div className="radio-group">
                <label >
                  <input type="radio" id="first-year" name="year" value="1st" onChange={handleInputChange} required />
                  1st Year
                </label>
                <label >
                  <input type="radio" id="second-year" name="year" value="2nd" onChange={handleInputChange} />
                  2nd Year
                </label>
                <label >
                  <input type="radio" id="third-year" name="year" value="3rd" onChange={handleInputChange} />
                  3rd Year
                </label>
                <label >
                  <input type="radio" id="fourth-year" name="year" value="4th" onChange={handleInputChange} />
                  4th Year
                </label>
              </div>
            </div>
            <div className="form-group">
              <label>Semester</label>
              <div className="radio-group">
                <label >
                  <input type="radio" id="first-semester" name="semester" value="1st" onChange={handleInputChange} required />
                  1st Semester
                </label>
                <label >
                  <input type="radio" id="second-semester" name="semester" value="2nd" onChange={handleInputChange} />
                  2nd Semester
                </label>
                <label >
                  <input type="radio" id="third-semester" name="semester" value="3rd" onChange={handleInputChange} />
                  3rd Semester
                </label>
                <label >
                  <input type="radio" id="fourth-semester" name="semester" value="4th" onChange={handleInputChange} />
                  4th Semester
                </label>
                <label >
                  <input type="radio" id="fifth-semester" name="semester" value="5th" onChange={handleInputChange} />
                  5th Semester
                </label>
                <label htmlFor="sixth-semester">
                  <input type="radio" id="sixth-semester" name="semester" value="6th" onChange={handleInputChange} />
                  6th Semester
                </label>
                <label >
                  <input type="radio" id="seventh-semester" name="semester" value="7th" onChange={handleInputChange} />
                  7th Semester
                </label>
                <label >
                  <input type="radio" id="eighth-semester" name="semester" value="8th" onChange={handleInputChange} />
                  8th Semester
                </label>
              </div>
            </div>
            <div className="form-group">
              <label>Skills</label>
              <div className="checkbox-group">
                <label >
                  <input type="checkbox" id="react" name="skills" value="React" onChange={handleCheckboxChange} />
                  React
                </label>
                <label >
                  <input type="checkbox" id="angular" name="skills" value="Angular" onChange={handleCheckboxChange} />
                  Angular
                </label>
                <label >
                  <input type="checkbox" id="vue" name="skills" value="Vue" onChange={handleCheckboxChange} />
                  Vue
                </label>
              </div>
            </div>
            <div className="form-group">
              <label>Company</label>
              <div className="checkbox-group">
                <label >
                  <input type="checkbox" id="google" name="company" value="Google" onChange={handleCheckboxChange} />
                  Google
                </label>
                <label >
                  <input type="checkbox" id="microsoft" name="company" value="Microsoft" onChange={handleCheckboxChange} />
                  Microsoft
                </label>
                <label >
                  <input type="checkbox" id="facebook" name="company" value="Facebook" onChange={handleCheckboxChange} />
                  Facebook
                </label>
              </div>
            </div>
            <div className="form-group">
              <button type="submit">Register</button>
            </div>
          </form>
        </div>
      </div>



    </div>
  );
}

export default Register;

