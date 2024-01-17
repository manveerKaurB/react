import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
const Header = () => {
    const [toggleBtnName,setToggleBtnName] = useState('Login');
    const toggleBtn = () => {
        toggleBtnName === 'Login' ? setToggleBtnName('Logout') : setToggleBtnName('Login');
    }
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="login-btn" onClick={toggleBtn}>{toggleBtnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;