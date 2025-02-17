import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './AdminForm.css'; // Import the CSS file

const AdminForm = () => {
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const [showSecurityKey, setShowSecurityKey] = useState(false); // State to toggle security key visibility
  const [email, setEmail] = useState(''); // State for email input
  const [password, setPassword] = useState(''); // State for password input
  const [securityKey, setSecurityKey] = useState(''); // State for security key input
  const [error, setError] = useState(''); // State for error messages
  const navigate = useNavigate(); // Hook for navigation

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); // Toggle password visibility
  };

  const toggleSecurityKeyVisibility = () => {
    setShowSecurityKey(!showSecurityKey); // Toggle security key visibility
  };

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent form submission

    // Validation logic
    const isEmailValid = email.endsWith('@admin.com'); // Check if email ends with "@admin.com"
    const isPasswordValid = password === '12345678'; // Check if password is "12345678"
    const isSecurityKeyValid = securityKey === '1234'; // Check if security key is "1234"

    if (isEmailValid && isPasswordValid && isSecurityKeyValid) {
      // Redirect to the admin panel
      navigate('/admin-panel');
    } else {
      // Show error message
      setError('Invalid email, password, or security key. Please try again.');
    }
  };

  return (
    <div className="admin-form-wrapper">
      {/* Left Section with Gradient Background */}
      <div className="admin-left-section">
        {/* Logo Image */}
        <div className="admin-logo">
          <img src="imagelogoutopia.png" alt="Logo" />
        </div>

        {/* Image placed outside the container */}
        <div className="admin-login-image">
          <img src="../holoimage.png" alt="Login Visual" />
        </div>
      </div>

      {/* Right Section with Admin Login Form */}
      <div className="admin-right-section">
        <div className="admin-login-box">
          <h2 style={{ color: '#8b0000' }}>Admin Log in</h2>
          <form className="admin-login-form" onSubmit={handleLogin}>
            <div className="admin-form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="admin-form-group">
              <label htmlFor="password">Password</label>
              <input
                type={showPassword ? 'text' : 'password'} // Toggle input type
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <a
                href="#show-password"
                className="admin-show-password"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? 'Hide' : 'Show'}
              </a>
            </div>
            <div className="admin-form-group">
              <label htmlFor="security-key">Security Key</label>
              <input
                type={showSecurityKey ? 'text' : 'password'} // Toggle input type
                id="security-key"
                name="security-key"
                value={securityKey}
                onChange={(e) => setSecurityKey(e.target.value)}
                required
              />
              <a
                href="#show-security-key"
                className="admin-show-password"
                onClick={toggleSecurityKeyVisibility}
              >
                {showSecurityKey ? 'Hide' : 'Show'}
              </a>
            </div>
            {error && <p className="error-message">{error}</p>}
            <a href="#forgot-password" className="admin-forgot-password">
              Forget your password?
            </a>
            <button type="submit" className="admin-login-button">
              Log in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminForm;