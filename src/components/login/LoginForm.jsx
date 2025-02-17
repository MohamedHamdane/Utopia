import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './LoginForm.css'; // Import the CSS file

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const [email, setEmail] = useState(''); // State for email input
  const [password, setPassword] = useState(''); // State for password input
  const [error, setError] = useState(''); // State for error messages
  const navigate = useNavigate(); // Hook for navigation

  const handleAdminLogin = () => {
    // Redirect to admin login form
    navigate('/admin');
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); // Toggle password visibility
  };

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent form submission

    // Input validation
    if (email === 'houssamzaz@example.com' && password === '12345678') {
      // Redirect to the logged-in page
      navigate('/logged-in');
    } else {
      // Show error message
      setError('Invalid email or password. Please try again.');
    }
  };

  const handleSignUp = () => {
    // Redirect to the country role selection page
    navigate('/country-role');
  };

  const handleGoogleLogin = () => {
    // Redirect to the Google form page
    navigate('/google');
  };

  return (
    <div className="login-wrapper">
      {/* Left Section with Gradient Background */}
      <div className="left-section">
        {/* Logo Image */}
        <div className="logo">
          <img src="imagelogoutopia.png" alt="Logo" />
        </div>

        {/* Image placed outside the container */}
        <div className="login-image">
          <img src="../holoimage.png" alt="Login Visual" />
        </div>
      </div>

      {/* Right Section with Login Form */}
      <div className="right-section">
        <div className="login-box">
          <h2 style={{ color: '#8b0000' }}>Log in</h2>
          <button className="social-login google" onClick={handleGoogleLogin}>
            Continue with Google
          </button>
          <button className="social-login twitter">Continue with Twitter</button>
          <button className="admin-login-button" onClick={handleAdminLogin}>
            Log in as Admin
          </button>

          {/* Separator with "or" text */}
          <div className="separator">
            <hr className="separator-line" />
            <span className="separator-text">OR</span>
            <hr className="separator-line" />
          </div>

          <form className="login-form" onSubmit={handleLogin}>
            <div className="form-group">
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
            <div className="form-group">
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
                className="show-password"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? 'Hide' : 'Show'}
              </a>
            </div>
            {error && <p className="error-message">{error}</p>}
            <a href="#forgot-password" className="forgot-password">
              Forget your password?
            </a>
            <button type="submit" className="login-button">
              Log in
            </button>
          </form>
          <div className="sign-up">
            <span>
              Don't have an account?{' '}
              <a href="#sign-up" onClick={handleSignUp}>
                Sign up
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;