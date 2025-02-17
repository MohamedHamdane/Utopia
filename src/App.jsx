
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  ProductForm  from "./components/AddProduct/productForm/ProductForm";
import  ProductUpload  from "./components/ProductPhotos/productUpload/ProductUpload";
import { SellerForm } from './components/SellerInfo/sellerForm/SellerForm';
import ProductTable from "./components/ProductDetails/productList/ProductList";
import FashionLayout from './components/LandingPage/FashionLayout';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import './componenets/login/login.css';
// import Login from './componenets/login/login';
// import GoogleAuthPage from './componenets/google/google';
// import Landing from './componenets/landing/landing';
// import UtopiaTest from './componenets/landing/test';
// import TradeRole from './components/trade role/trade';
// import Admin from './components/admin/admin';
// import User from './components/user/User';
import FashionLayout_guest from './components/LandingPage guest/fashionlayout_guest'
import CountryRoleSelector from './components/trade-role/CountryRoleSelector';
import AdminForm from './components/admin/AdminForm';
import GoogleForm from './components/login/GoogleForm';

import LoginForm from './components/login/LoginForm';
import Fashion_admin from './components/AddProduct/productForm/ProductForm'

// import FashionLayout from './components/LandingPage/fashion/FashionLayout';




//hsm


// import "bootstrap/dist/css/bootstrap.min.css";


// Import your components
// import LoginForm from '../LoginForm';
// import AdminForm from './hsm/AdminForm';
// import GoogleForm from './hsm/GoogleForm';
// import CountryRoleSelector from './hsm/CountryRoleSelector';
// import LoggedIn from './hsm/LoggedIn'; // Create this component for the logged-in page
// import AdminPanel from './hsm/AdminPanel';

const App = () => {
  return (
    <>
    
    <Router>
    <Routes>
    <Route path='/' element={<FashionLayout_guest/>}></Route>
    <Route path="/admin" element={<AdminForm />} />
    <Route path='/country-role' element={<CountryRoleSelector/>}></Route>
    <Route path="/google" element={<GoogleForm />} />


    <Route path="/login" element={<LoginForm/>}></Route>


    <Route path="/logged-in" element={<FashionLayout/>}></Route>
    




      
       <Route path="/ProductForm" element={<ProductForm />} />  
       <Route path="/ProductUpload" element={<ProductUpload />} /> 
        <Route path="/SellerForm" element={<SellerForm />} /> 
      <Route path="/ProductTable" element={<ProductTable />} />
      {/* <Route path="/FashionLayout" element={<FashionLayout  />} /> */}
      {/* <Route path="/trade" element={<TradeRole/>}></Route> */}
      {/* <Route path="/admin" element={<Admin/>} ></Route> */}
      {/* <Route path="/user" element={<User/>}></Route> */}
      {/* <Route path="/SecondaryNav" element={<SecondaryNav />} /> 
      <Route path="/MainContent" element={<MainContent />} /> 
      <Route path="/Footer" element={<Footer />} /> */}
      {/* <Route path="/FashionLayout" element={<FashionLayout />} /> */}




      {/* <Route path="/login" element={<LoginForm />} /> */}

{/* Route for the AdminForm */}
{/* <Route path="/admin" element={<AdminForm />} /> */}

{/* Route for the GoogleForm */}
{/* <Route path="/google" element={<GoogleForm />} /> */}

{/* Route for the CountryRoleSelector */}
{/* <Route path="/country-role" element={<CountryRoleSelector />} /> */}

{/* Route for the LoggedIn page */}
{/* <Route path="/logged-in" element={<LoggedIn />} /> */}

{/* <Route path="/admin-panel" element={<AdminPanel />} /> */}


{/* 404 Not Found */}
{/* <Route path="*" element={<h1>404 - Not Found</h1>} /> */}


      {/* import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import your components
import LoginForm from './LoginForm';
import AdminForm from './AdminForm';
import GoogleForm from './GoogleForm';
import CountryRoleSelector from './CountryRoleSelector';
import LoggedIn from './LoggedIn'; // Create this component for the logged-in page
import AdminPanel from './AdminPanel'; */}





{/* const App = () => {
  return ( */}

    
   
        {/* Route for the LoginForm */}
        


       
      
  
  {/* );
}; */}

{/* export default App; */}
    </Routes>
  </Router>
  </>
  );
};

export default App;
