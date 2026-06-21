import { useState } from "react"
import logo from "../assets/lo-go.png";

function Login() {
    const login = () => {
        const [formData, setFormData] = useState({
            cnic: "",
            password: ""
        });


    }


    return (
        <>
            <>
                <div className="container">
                    <div className="image-container">
                        <img src={logo} alt="" />
                    </div>
                    <div className="portal-heading">
                        <h3>Student Portal</h3>
                    </div>
                    <div className="options-container">
                        <div className="options">
                            <button>login</button>
                            <button>Create Password</button>
                        </div>
                    </div>
                    <div className="main-card">
                        <div className="main-card-heading">
                            <h3>Login</h3>
                            <p>Kindly provide the CNIC number and password used during SMIT course registration.</p>
                        </div>
                        <div className="cnic">
                            <h3>CNIC *</h3>
                            <input type="number" name="cnic-input-field" id="cnic-input-field" />
                        </div>
                        <div className="password-1">
                            <h3>Password *</h3>
                            <input type="password" />
                        </div>
                    </div>
                    <div className="login-btn">
                        <button>Login</button>
                    </div>
                </div>


            </>
        </>
    )
}
export default Login