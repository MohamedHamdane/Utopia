import React, { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { 
  Container, 
  Navbar as BSNavbar, 
  Nav, 
  Form, 
  Button, 
  InputGroup, 
  Image, 
  Row, 
  Col, 
  Card as BSCard, 
  Spinner, 
  Alert
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsCart } from 'react-icons/bs';
import 'bootstrap-icons/font/bootstrap-icons.css';

// Navbar Component
export const Navbar = () => (
  <BSNavbar bg="light" expand="lg" className="py-2">
    <Container>
      <BSNavbar.Brand href="/">
        <img src="utopia-logo.png" alt="Logo" height="40" />
      </BSNavbar.Brand>
      <BSNavbar.Toggle aria-controls="basic-navbar-nav" />
      <BSNavbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Form className="d-flex me-3">
          <InputGroup>
            <Form.Control
              type="search"
              placeholder="Type something..."
              className="rounded-pill"
              style={{ borderColor: '#DE3021', paddingRight: '100px' }}
            />
            <Button variant="danger" className="rounded-pill position-absolute end-0" style={{ zIndex: 5 }}>Search</Button>
            <div className="position-absolute end-0 pe-4 d-flex align-items-center" style={{ height: '100%', zIndex: 6 }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 30 30" className="me-2">
                <path fill="white" d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
              </svg>
            </div>
          </InputGroup>
        </Form>
        <Nav className="align-items-center">
          <Nav.Link href="/" className="btn btn-danger rounded-pill text-white me-2">Log out</Nav.Link>
          <Nav.Link href="/ProductForm" className="btn btn-danger rounded-pill text-white me-2">Post an Ad</Nav.Link>
          <Image src="image" alt="profile" roundedCircle width="40" height="40" />
        </Nav>
      </BSNavbar.Collapse>
    </Container>
  </BSNavbar>
);

// SecondaryNav Component
export const SecondaryNav = () => (
  <div className="bg-danger py-2">
    <Container>
      <Row className="align-items-center">
        <Col xs={1}>
          <div className="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
              <path fill="white" d="M 11.964844 2 A 0.50005 0.50005 0 0 0 11.746094 2.0683594 L 2.2460938 7.65625 A 0.50078136 0.50078136 0 1 0 2.7539062 8.5195312 L 3 8.375 L 3 20.5 A 0.50005 0.50005 0 0 0 3.5 21 L 20.5 21 A 0.50005 0.50005 0 0 0 21 20.5 L 21 8.375 L 21.246094 8.5195312 A 0.50078125 0.50078125 0 0 0 21.753906 7.65625 L 12.253906 2.0683594 A 0.50005 0.50005 0 0 0 12.015625 2 A 0.50005 0.50005 0 0 0 11.964844 2 z M 12 3.0800781 L 20 7.7871094 L 20 20 L 16 20 L 16 11.5 A 0.50005 0.50005 0 0 0 15.5 11 L 8.5 11 A 0.50005 0.50005 0 0 0 8 11.5 L 8 20 L 4 20 L 4 7.7871094 L 12 3.0800781 z M 9 12 L 15 12 L 15 20 L 9 20 L 9 12 z"></path>
            </svg>
          </div>
        </Col>
        <Col xs={11}>
          <div className="d-flex justify-content-around">
            <Nav.Link href="/" className="text-white text-decoration-none">Real Estate</Nav.Link>
            <Nav.Link href="/" className="text-white text-decoration-none">Car</Nav.Link>
            <Nav.Link href="/" className="text-white text-decoration-none">Gym</Nav.Link>
            <Nav.Link href="/" className="text-white text-decoration-none">Fashion</Nav.Link>
            <Nav.Link href="/" className="text-white text-decoration-none">Electronics</Nav.Link>
            <Nav.Link href="/" className="text-white text-decoration-none">Furnitures</Nav.Link>
            <Nav.Link href="/" className="text-white text-decoration-none">Animals</Nav.Link>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
);

// Card Component
export const Card = ({ image, title, location, price }) => (
  <BSCard className="bg-dark text-white mb-4" style={{ width: '260px', borderRadius: '10px' }}>
    <BSCard.Img variant="top" src={image} style={{ height: '200px', objectFit: 'cover', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }} />
    <BSCard.Body>
      <BSCard.Title className="fs-5">{title}</BSCard.Title>
      <div className="d-flex align-items-center mb-2">
        <small>{location}</small>
      </div>
      <div className="d-flex justify-content-between align-items-center">
        <BSCard.Text>{price}</BSCard.Text>
        <Button variant="link" className="p-0">
          <BsCart color="white" size={20} />
        </Button>
      </div>
    </BSCard.Body>
  </BSCard>
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
  <footer className="bg-dark text-white py-4 mt-5">
    <Container>
      <Row>
        <Col md={4}>
          <h5>Get to know us better!</h5>
          <p className="text-secondary mb-1">Who are we?</p>
          <p className="text-secondary mb-1">Recruitment</p>
          <p className="text-secondary mb-1">Testimonials</p>
          <p className="text-secondary mb-1">Press</p>
          <p className="text-secondary mb-1">Applications</p>
          <div className="d-flex text-secondary">
            <p className="mb-0">My Account</p>
            <p className="mx-2 mb-0">|</p>
            <p className="mb-0">Post An Ad</p>
          </div>
        </Col>
        <Col md={4}>
          <h5>Useful Links</h5>
          <p className="text-secondary mb-1">Contact</p>
          <p className="text-secondary mb-1">Help</p>
          <p className="text-secondary mb-1">Your suggestions</p>
          <p className="text-secondary mb-1">Cookies</p>
          <p className="text-secondary mb-1">Legal notices</p>
        </Col>
        <Col md={4}>
          <div className="social-media mb-3">
            <Button variant="outline-light" className="me-2" size="sm">
              <i className="bi bi-facebook"></i>
            </Button>
            <Button variant="outline-light" className="me-2" size="sm">
              <i className="bi bi-twitter"></i>
            </Button>
            <Button variant="outline-light" className="me-2" size="sm">
              <i className="bi bi-instagram"></i>
            </Button>
          </div>
          <div className="d-flex mb-3">
            <img src="play-store.png" className="me-2" alt="Google Play" width="130" />
            <img src="app-store.jpg" alt="App Store" width="130" />
          </div>
          <div className="d-flex align-items-center mb-3">
            <img src="TP-dark-removebg-preview.png" alt="Trustpilot" width="100" className="me-2" />
            <div>
              <p className="mb-0">Utopia.ma is rated<br /> 4.7 / 5</p>
              <small className="text-secondary">based on 865 customer reviews</small>
            </div>
          </div>
          <p className="text-secondary small">
            Useful © 2024 Utopia.ma | All rights reserved<br />
            © Credits | Houssam Zaz, Mohamed Hamdane, Mohamed Ghazal
          </p>
        </Col>
      </Row>
    </Container>
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
    return (
      <div className="d-flex justify-content-center my-5">
        <Spinner animation="border" variant="danger" />
      </div>
    );
  }

  if (error) {
    return (
      <Alert variant="danger" className="my-5">
        Error: {error}
      </Alert>
    );
  }

  return (
    <Container fluid className="p-0">
      <div className="w-100">
        <img src="fashion-picture.png" className="img-fluid w-100" alt="Main" />
      </div>
      
      <Container className="my-5">
        <Row className="align-items-center">
          <Col md={4}>
            <img src="fashion-picture.png" className="img-fluid" alt="Third Section" />
          </Col>
          <Col md={8}>
            <h2 className="mb-3">Discover an exciting range of clothing for sale in Morocco</h2>
            <p className="text-muted">
              From trendy casual wear to sophisticated formal attire. Whether you are updating your wardrobe with the latest fashion or looking for timeless pieces, you will find high-quality garments at affordable prices. Shop now and elevate your style!
            </p>
          </Col>
        </Row>
      </Container>
      
      <div className="bg-danger py-3 my-4">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} md={2}>
              <p className="text-white mb-md-0">Filter By:</p>
            </Col>
            <Col xs={12} md={5}>
              <Form.Select 
                className="bg-dark text-white border-0 rounded-pill mb-2 mb-md-0"
                onChange={(e) => setSelectedCity(e.target.value)}
                value={selectedCity}
              >
                <option value="">City</option>
                <option value="Tanger">Tanger</option>
                <option value="Asilah">Asilah</option>
                <option value="Tetouan">Tetouan</option>
              </Form.Select>
            </Col>
            <Col xs={12} md={5}>
              <Form.Select 
                className="bg-dark text-white border-0 rounded-pill"
                onChange={(e) => setSelectedCategory(e.target.value)}
                value={selectedCategory}
              >
                <option value="">Category</option>
                <option value="Jackets">Jackets</option>
                <option value="Boots">Boots</option>
                <option value="Hoodies">Hoodies</option>
                <option value="Pants">Pants</option>
                <option value="T-Shirts">T-Shirts</option>
              </Form.Select>
            </Col>
          </Row>
        </Container>
      </div>
      
      <Container className="my-5">
        <Row>
          {filteredCards.map((card, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4">
              <BSCard className="bg-dark text-white h-100" style={{ borderRadius: '10px' }}>
                <BSCard.Img variant="top" src={card.image} style={{ height: '200px', objectFit: 'cover', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }} />
                <BSCard.Body>
                  <BSCard.Title className="fs-5">{card.title}</BSCard.Title>
                  <div className="d-flex align-items-center mb-2">
                    <small>{card.city}</small>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <BSCard.Text>{card.price}</BSCard.Text>
                    <Button variant="link" className="p-0">
                      <BsCart color="white" size={20} />
                    </Button>
                  </div>
                </BSCard.Body>
              </BSCard>
            </Col>
          ))}
        </Row>
      </Container>
      
      <hr className="my-5" />
    </Container>
  );
};



