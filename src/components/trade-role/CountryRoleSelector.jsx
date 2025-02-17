import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './CountryRoleSelector.css'; // Import the CSS file

const CountryRoleSelector = () => {
  const [selectedCountry, setSelectedCountry] = useState(''); // State for selected country
  const [selectedRole, setSelectedRole] = useState(''); // State for selected role
  const navigate = useNavigate(); // Hook for navigation

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value); // Update selected country
  };

  const handleRoleChange = (e) => {
    setSelectedRole(e.target.value); // Update selected role
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission

    // Redirect based on selected role
    if (selectedRole === 'admin') {
      navigate('/admin'); // Redirect to "/admin"
    } else if (selectedRole === 'user') {
      navigate('/login'); // Redirect to "/"
    }
  };

  return (
    <div className="country-role-wrapper">
      {/* Left Section with Gradient Background */}
      <div className="country-role-left-section">
        {/* Logo Image */}
        <div className="country-role-logo">
          <img src="imagelogoutopia.png" alt="Logo" />
        </div>

        {/* Image placed outside the container */}
        <div className="country-role-image">
          <img src="../holoimage.png" alt="Login Visual" />
        </div>
      </div>

      {/* Right Section with Country and Role Selection */}
      <div className="country-role-right-section">
        <div className="country-role-box">
          <h2 style={{ color: '#8b0000' }}>Sign Up</h2>
          <form className="country-role-form" onSubmit={handleSubmit}>
            {/* Country Selection */}
            <div className="country-role-form-group">
              <label htmlFor="country">Select Your Country</label>
              <select
                id="country"
                name="country"
                value={selectedCountry}
                onChange={handleCountryChange}
                required
              >
                <option value="" disabled>
                  Choose a country
                </option>
                <option value="Morocco">Morocco</option>
                <option value="USA">USA</option>
                <option value="Canada">Canada</option>
                <option value="Niger">Niger</option>
                <option value="Switzerland">Switzerland</option>
                <option value="Algeria">Algeria</option>
                {/* Add more countries as needed */}
              </select>
            </div>

            {/* Role Selection */}
            <div className="country-role-form-group">
              <label>Select Your Trade Role</label>
              <div className="country-role-radio-group">
                <label>
                  <input
                    type="radio"
                    name="role"
                    value="admin"
                    checked={selectedRole === 'admin'}
                    onChange={handleRoleChange}
                  />
                  ADMIN
                </label>
              
                <label>
                  <input
                    type="radio"
                    name="role"
                    value="user"
                    checked={selectedRole === 'user'}
                    onChange={handleRoleChange}
                  />
                  USER
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <button type="submit" className="country-role-submit-button">
              Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CountryRoleSelector;