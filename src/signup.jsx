import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export  function Signup() {
  const history = useHistory()
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    gender: '',
    user : '',
    title: ''
  });


  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match!');
      return;
    }

    let res =await fetch('http://localhost:3000/signup',{
      method : 'POST',
      headers : {
        "content-type" : "application/json" 
      },
      body : JSON.stringify(formData)
    })
    console.log(res);
    let datajson =  await res.json()
    
    if(datajson.status == 201) {
      alert('Form submitted successfully!');
      history.push('/dashboard')
      
    }else{
            alert('something went wrong');

    }

  };

  return (
    <div style={{ margin: '20px' }}>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="fullName" style={{ display: 'block', marginBottom: '5px' }}>
            Full Name:
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
            style={{ padding: '5px', width: '100%' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
            style={{ padding: '5px', width: '100%' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="password" style={{ display: 'block', marginBottom: '5px' }}>
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
            style={{ padding: '5px', width: '100%' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="confirmPassword" style={{ display: 'block', marginBottom: '5px' }}>
            Confirm Password:
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm your password"
            required
            style={{ padding: '5px', width: '100%' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="gender" style={{ display: 'block', marginBottom: '5px' }}>
            Gender:
          </label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
            style={{ padding: '5px', width: '100%' }}
          >
            <option value="" disabled>
              Select your gender
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="user" style={{ display: 'block', marginBottom: '5px' }}>
            user:
          </label>
          <select
            id="user"
            name="user"
            value={formData.user}
            onChange={handleChange}
            required
            style={{ padding: '5px', width: '100%' }}
          >
            <option value="" disabled>
              Select your position
            </option>
            <option value="seller">seller</option>
            <option value="customer">customer</option>
          </select>
          {formData.user == "seller" ?<input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Confirm your title"
            required
            style={{ padding: '5px', width: '100%' }}
          /> : <div></div> }
        </div>
        {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}
        <button
          type="submit"
          style={{
            padding: '10px 15px',
            backgroundColor: '#007BFF',
            color: '#fff',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Submit
        </button>
      </form>
      <Link to="/login">
      <p>login</p>
      
      </Link>
    </div>
  );
}

