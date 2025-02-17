import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './GoogleForm.css'; // Import the CSS file

const GoogleForm = () => {
  const navigate = useNavigate(); // Hook for navigation

  const handleAccountClick = () => {
    // Redirect to the logged-in page
    navigate('/logged-in');
  };

  return (
    <div className="google-form-wrapper">
      {/* Left Section with Gradient Background */}
      <div className="google-left-section">
        {/* Logo Image */}
        <div className="google-logo">
          <img src="imagelogoutopia.png" alt="Logo" />
        </div>

        {/* Image placed outside the container */}
        <div className="google-login-image">
          <img src="../holoimage.png" alt="Login Visual" />
        </div>
      </div>

      {/* Right Section with Google Account Selection Form */}
      <div className="google-right-section">
        <div className="google-login-box">
          <h2 style={{ fontWeight: '600', color: 'rgb(139, 0, 0)' }}>Utopia</h2>
          <p className="google-subtitle">Continue with Google</p>
          <p className="google-info">
            Select an account for accessing the application UTOPIA
          </p>
          <div className="google-account-card" onClick={handleAccountClick}>
            <div className="google-account-icon">M</div>
            <div className="google-account-details">
              <p className="google-account-name">MR HOUSSAM ZAZ</p>
              <p className="google-account-email">houssamzaz@example.com</p>
            </div>
          </div>
          <a href="#use-another-account" className="google-use-another-account">
            Use another account
          </a>
          <p className="google-privacy-info">
            To continue, Google will share your name, email address, language
            preference, and profile picture with UTOPIA. Before using UTOPIA, you
            may want to review its <a href="#privacy-policy">Privacy Policy</a>{' '}
            and <a href="#terms-of-service">Terms of Service</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GoogleForm;