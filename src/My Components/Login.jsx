
import { useState } from "react";
import { RiEyeOffFill, RiEyeFill } from "react-icons/ri";

const Login = () => {
  const [formData, setFormData] = useState({
    cnic: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.cnic.trim()) {
      newErrors.cnic = "CNIC is required";
    } else if (!/^\d{5}-\d{7}-\d{1}$/.test(formData.cnic.trim())) {
        newErrors.cnic = "CNIC must be in the format 12345-1234567-1";
    }


    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);
    setSuccessMessage("");

    setTimeout(() => {
      setLoading(false);

      // FIX: test CNIC now includes dashes so it actually matches the
      // format enforced by validateForm's regex (5-7-1 digits).
      if (
        formData.cnic === "43304-7865196-9" &&
        formData.password === "password123"
      ) {
        setSuccessMessage("✅ Login successful!");
        localStorage.setItem("userCNIC", formData.cnic);
      } else {
        setErrors({ general: "Invalid CNIC or Password" });
      }
    }, 1500);
  };

  const togglePassword = () => setShowPassword((prev) => !prev);

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <img src="/lo-go.png" alt="" />
      <div>
        <button>login</button>
        <button>create new account</button>
      </div>
      <div className="login-card">
        <p className="subtitle">Login </p>
        <h2>Kindly provide the CNIC number and password used during SMIT course registration.</h2>

        {successMessage && (
          <div className="success-message" role="status">
            {successMessage}
          </div>
        )}

        {errors.general && (
          <div className="error-message" role="alert">
            {errors.general}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          
          <div className="form-group">
            <h4>CNIC</h4>
            <input
              id="cnic"
              type="text"
              name="cnic"
              value={formData.cnic}
              onChange={handleChange}
              placeholder="INTER VALID CNIC"
              className={errors.cnic ? "input-error" : ""}
              disabled={loading}
            />
            {errors.cnic && <span className="field-error">{errors.cnic}</span>}
          </div>

          {/* Password Field */}
          <div className="form-group">
            <label >Password</label>
            <div className="password-wrapper">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className={errors.password ? "input-error" : ""}
                disabled={loading}
              />
              <button
                type="button"
                className="toggle-password"
                onClick={togglePassword}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ?  <RiEyeFill /> : <RiEyeOffFill />}
              </button>
            </div>
            {errors.password && (
              <span className="field-error">{errors.password}</span>
            )}
          </div>

          <button type="submit" className="login-btn" disabled={loading}>
            {loading ? "⏳ Loading..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;