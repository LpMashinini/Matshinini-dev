import React, { useState } from "react";
import './Login.css'

import user_icon from "../Assets/person.png";
import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";

export default function LoginSignUp() {

    const [action, setAction] = useState('Sign Up');
 
    return (

        <div className="container">

            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>

            <div className="inputs">

                {action === "Login"? <></> : <div className="input">
                    <img src={user_icon} alt="" />
                    <input type="text" placeholder="Name" />
                </div>}


                <div className="input">
                    <img src={email_icon} alt="" />
                    <input type="email" placeholder="Email" />
                </div>

                <div className="input">
                    <img src={password_icon} alt="" />
                    <input type="password" placeholder="Password" />
                </div>


              
               {action === "Sign Up"? <></> :  <div className="forgotPassword">Lost Password? <span>click here</span></div>}

            </div>

           

            <div className="submit-container">

                <div className={action === "Sign Up"? "submit" : "submit gray"} onClick={() => {setAction("Sign Up")}}>Sign Up</div>
                <div className={action === "Login"? "submit" : "submit gray"} onClick={() => {setAction("Login")}}>Login</div>

            </div>

        </div>

    );
}
