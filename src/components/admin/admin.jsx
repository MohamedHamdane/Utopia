import { useState } from "react";
import "./seller.css";

const Admin = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
    };

    return (
        <div className="everythink">
            <div className="main">
                {/* Logo */}
                <div className="first-child">
                    <img src="/images/utopia_logo.png" alt="Utopia Logo" className="logo" />
                </div>

                {/* Signup Section */}
                <div className="second-child">
                    <h2 className=""></h2>

                    <form onSubmit={handleSubmit} className="button-container">
                        <div className="inputs">
                            {/* First Name */}
                            <p id="tx1">First Name</p>
                            <input 
                                type="text" 
                                name="firstName" 
                                id="t1" 
                                value={formData.firstName} 
                                onChange={handleChange} 
                                required
                            />

                            {/* Last Name */}
                            <p id="tx1">Last Name</p>
                            <input 
                                type="text" 
                                name="lastName" 
                                id="t1" 
                                value={formData.lastName} 
                                onChange={handleChange} 
                                required
                            />
                        </div>

                        <div className="inputs">
                            {/* Phone */}
                            <p id="tx1">Phone</p>
                            <input 
                                type="text" 
                                name="phone" 
                                id="t1" 
                                value={formData.phone} 
                                onChange={handleChange} 
                                required
                            />

                            {/* Email */}
                            <p id="tx1">Email</p>
                            <input 
                                type="email" 
                                name="email" 
                                id="t1" 
                                value={formData.email} 
                                onChange={handleChange} 
                                required
                            />
                        </div>

                        <div className="inputs">
                            {/* Password */}
                            <p id="tx2">Password</p>
                            <input 
                                type="password" 
                                name="password" 
                                id="t2" 
                                value={formData.password} 
                                onChange={handleChange} 
                                required
                            />
                        </div>

                        {/* Forgot Password */}
                        <span id="fp">Forget your password?</span>

                        {/* Signup & Back Buttons */}
                        <div className="">
                            <button type="submit" className="login">Sign up</button>
                            <button type="button" className="login">Back</button>
                        </div>

                        {/* Redirect to Signup/Login */}
                        <span className="tx4">
                            Do not have an account? <a href="#">Sign up</a>
                        </span>
                    </form>
                </div>

                {/* 3D Shape */}
                <img src="/images/3d-shape.png" alt="3D Shape" className="d-shape" />
            </div>
        </div>
    );
};

export default Admin;