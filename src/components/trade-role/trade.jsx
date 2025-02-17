import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./trade.css"; 

const TradeRole = () => {
    const [selectedRole, setSelectedRole] = useState(null);
    const [selectedCountry, setSelectedCountry] = useState("Morocco");
    const navigate = useNavigate(); // React Router navigation function

    const handleRoleChange = (role) => {
        setSelectedRole(role);
        navigate(`/${role.toLowerCase()}`); // Navigate to /admin or /user
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
                    <h2 className="h2">Sign up</h2>

                    <div className="button-container">
                        {/* Country Selection */}
                        <span className="country-txt">Select your country :</span>
                        <button className="country-select">
                            <img 
                                src="/images/mrc.png" 
                                alt="Morocco Flag" 
                                style={{ width: "10px", height: "10px", marginBottom: "-3px", marginRight: "5px", padding: "0px" }}
                            />
                            {selectedCountry}
                        </button>

                        {/* Trade Role Selection */}
                        <span className="role-txt">Select your trade role :</span>
                        <div className="inputs">
                            {["ADMIN", "USER"].map((role) => (
                                <div key={role}>
                                    <input 
                                        type="radio" 
                                        name="tradeRole" 
                                        id={role.toLowerCase()} 
                                        checked={selectedRole === role} 
                                        onChange={() => handleRoleChange(role)} 
                                    />
                                    <label htmlFor={role.toLowerCase()}>{role}</label>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* 3D Shape */}
                <img src="/images/3d-shape.png" alt="3D Shape" className="d-shape" />
            </div>
        </div>
    );
};

export default TradeRole;