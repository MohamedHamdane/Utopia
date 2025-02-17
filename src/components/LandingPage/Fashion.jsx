import { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
// Navbar Component
export const Navbar = () => (
  <nav>
    <div className="logo">
      <img src="utopia-logo.png" alt="Logo" />
    </div>
    <div className="first-bts">
      <div className="search-container">
        <input type="text" className="search-bar" placeholder="Type something..." />
        <a href="/" className="search-btn">Search</a>
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20px" height="100" viewBox="0 0 30 30" className="search-icon">
          <path fill="white" d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
        </svg>
      </div>
      <a href="/">Log out</a>
      <a href="/ProductForm" className="postanad">Post an Ad</a>
      <img src="image" alt="profil while logged in" style={{width:"50px" , height:"50px"}}/>
    </div>
  </nav>
);

// SecondaryNav Component
export const SecondaryNav = () => (
  <div className="sec-nav">
    <div className="home">
      <svg xmlns="http://www.w3.org/2000/svg" className="logo-image" x="0px" y="0px" width="40" height="40" viewBox="0 0 24 24">
        <path fill="white" d="M 11.964844 2 A 0.50005 0.50005 0 0 0 11.746094 2.0683594 L 2.2460938 7.65625 A 0.50078136 0.50078136 0 1 0 2.7539062 8.5195312 L 3 8.375 L 3 20.5 A 0.50005 0.50005 0 0 0 3.5 21 L 20.5 21 A 0.50005 0.50005 0 0 0 21 20.5 L 21 8.375 L 21.246094 8.5195312 A 0.50078125 0.50078125 0 0 0 21.753906 7.65625 L 12.253906 2.0683594 A 0.50005 0.50005 0 0 0 12.015625 2 A 0.50005 0.50005 0 0 0 11.964844 2 z M 12 3.0800781 L 20 7.7871094 L 20 20 L 16 20 L 16 11.5 A 0.50005 0.50005 0 0 0 15.5 11 L 8.5 11 A 0.50005 0.50005 0 0 0 8 11.5 L 8 20 L 4 20 L 4 7.7871094 L 12 3.0800781 z M 9 12 L 15 12 L 15 20 L 9 20 L 9 12 z"></path>
      </svg>
    </div>
    <div className="second-bts">
      <a href="/">Real Estate</a>
      <a href="/">Car</a>
      <a href="/">Gym</a>
      <a href="/">Fashion</a>
      <a href="/">Electronics</a>
      <a href="/">Furnitures</a>
      <a href="/">Animals</a>
    </div>
  </div>
);

// Card Component
export const Card = ({ image, title, location, price }) => (
  <div className="card1">
    <img src={image} alt={title} width="250px" />
    <h5 className="t-shirt">{title}</h5>
    <div className="location">
      <p>{location}</p>
    </div>
    <div className="price-shopping">
      <p>{price}</p>
    </div>
  </div>
);

// Prop validation for Card component
Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

// Footer Component
export const Footer = () => (
  <footer>
    <div className="more-information">
      <div className="first-sec">
        <h3>Get to know us better!</h3>
        <p>Who are we?</p>
        <p>Recruitment</p>
        <p>Testimonials</p>
        <p>Press</p>
        <p>Applications</p>
        <div className="acc-post">
          <p>My Account</p>
          <p> | </p>
          <p>Post An Ad</p>
        </div>
      </div>
      <div className="second-sec">
        <h3>Useful Links</h3>
        <p>Contact</p>
        <p>Help</p>
        <p>Your suggestions</p>
        <p>Cookies</p>
        <p>Legal notices</p>
      </div>
      <div className="third-sec">
        <div className="social-media"></div>
        <div className="banners">
          <img src="play-store.png" className="google-banner" alt="Google Play" />
          <img src="app-store.jpg" className="app-store" alt="App Store" />
        </div>
        <div className="under-banners">
          <img src="TP-dark-removebg-preview.png" className="trustpilot" alt="Trustpilot" />
          <p>Utopia.ma is rated<br /> 4.7 / 5</p>
          <p className="reviews">based on 865 customer<br /> reviews</p>
        </div>
        <div>
          <p className="rights">Useful © 2024 Utopia.ma | All rights reserved<br />© Credits | Houssam Zaz, Mohamed Hamdane, Mohamed Ghazal</p>
        </div>
      </div>
    </div>
  </footer>
);

// MainContent Component


export const MainContent = () => {
  const [cardsData, setCardsData] = useState([]); // State to store card data
  const [filteredCards, setFilteredCards] = useState([]); // State for filtered data
  const [loading, setLoading] = useState(true); // State to track loading status
  const [error, setError] = useState(null); // State to handle errors
  const [selectedCategory, setSelectedCategory] = useState(""); // Selected category filter
  const [selectedCity, setSelectedCity] = useState(""); // Selected city filter

  // Fetch data from the Laravel API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/cards"); // Replace with your API URL
        setCardsData(response.data); // Set the fetched data to state
        setFilteredCards(response.data); // Initially, show all cards
        setLoading(false); // Set loading to false
      } catch (err) {
        setError(err.message); // Handle errors
        setLoading(false); // Set loading to false
      }
    };

    fetchData(); // Call the fetch function
  }, []);

  // Function to handle filtering
  const handleFilterChange = () => {
    let filtered = cardsData;

    if (selectedCategory) {
      filtered = filtered.filter((card) => card.category === selectedCategory);
    }

    if (selectedCity) {
      filtered = filtered.filter((card) => card.city === selectedCity);
    }

    setFilteredCards(filtered); // Update filtered cards
  };

  // Watch for changes in filters and update the filtered cards
  useEffect(() => {
    handleFilterChange();
  }, [selectedCategory, selectedCity]);

  // Display loading or error messages
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <div>
        <img src="fashion-picture.png" className="main-image" alt="Main" />
      </div>
      <div className="third-section">
        <div>
          <img src="fashion-picture.png" className="third-section-image" alt="Third Section" />
        </div>
        <div className="paragraphs-section" style={{ marginRight: "350px" }}>
          <h1>Discover an exciting range of clothing for sale in Morocco</h1>
          <p style={{ margin: 0, padding: 0, textIndent: 0, lineHeight: 1.5 }}>
            From trendy casual wear to sophisticated formal attire. Whether you are updating your wardrobe with the latest fashion or looking for timeless pieces, you will find high-quality garments at affordable prices. Shop now and elevate your style!
          </p>
        </div>
      </div>
      <div className="filtrage">
        <p>Filter By:</p>
        <select onChange={(e) => setSelectedCity(e.target.value)} value={selectedCity}>
          <option value="">City</option>
          <option value="Tanger">Tanger</option>
          <option value="Asilah">Asilah</option>
          <option value="Tetouan">Tetouan</option>
        </select>
        <select onChange={(e) => setSelectedCategory(e.target.value)} value={selectedCategory}>
          <option value="">Category</option>
          <option value="Jackets">Jackets</option>
          <option value="Boots">Boots</option>
          <option value="Hoodies">Hoodies</option>
          <option value="Pants">Pants</option>
          <option value="T-Shirts">T-Shirts</option>
        </select>
      </div>
      <div className="cards-part">
        {filteredCards.map((card, index) => (
          <div key={index} className="card1">
            <img src={card.image} alt={card.title} width="250px" />
            <h5 className="t-shirt">{card.title}</h5>
            <div className="location">
              <p>{card.city}</p>
            </div>
            <div className="price-shopping">
              <p>{card.price}</p>
            </div>
          </div>
        ))}
      </div>
      <hr className="line" />
    </div>
  );
};
