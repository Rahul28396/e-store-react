import { Link } from "react-router";
import "./Signup.css";
import ImageFormContainer from "../../components/ImageFormContainer/ImageFormContainer";
import { useState } from "react";

const SignUpForm = () => {
  const [signUpForm, setSignUpForm] = useState(null);
  const [error, setError] = useState({
    name: "",
    email: "",
    passoword: "",
    confirmPassword: "",
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setSignUpForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    validateField(target);
  };

  const validateField = (targrt) => {
    const { name, value } = targrt;
    let message = validate(name, value, signUpForm);

    setError((prev) => ({
      ...prev,
      [name]: message,
    }));
  };

  const validate = (name, value, form = {}) => {
    switch (name) {
      case "name":
        if (!value.trim()) return "Name is required";
        if (!/^[A-Za-z\s]+$/.test(value))
          return "Name can only contain letters and spaces";
        return "";
      case "email":
        if (!value) return "Email is required";
        // Simple email regex
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
          return "Invalid email address";
        return "";
      case "password":
        if (value === "") return "Password is required";
        if (value.length < 6) return "Password must be at least 6 characters";
        if (!/[A-Z]/.test(value))
          return "Password must contain at least one uppercase letter";
        if (!/[a-z]/.test(value))
          return "Password must contain at least one lowercase letter";
        if (!/[0-9]/.test(value))
          return "Password must contain at least one number";
        if (!/[!@#$%^&*(),.?":{}|<>]/.test(value))
          return "Password must contain at least one special character";
        return "";
      case "confirmPassword":
        if (!value) return "Please confirm your password";
        if (value !== form.password) return "Passwords do not match";
        return "";
      default:
        return "";
    }
  };

  // Check if all fields are valid (no error messages and all fields filled)
  const isFormValid =
    signUpForm &&
    signUpForm.name &&
    signUpForm.email &&
    signUpForm.password &&
    signUpForm.confirmPassword &&
    !error.name &&
    !error.email &&
    !error.password &&
    !error.confirmPassword;

  return (
    <>
      <div>
        <label className="signup-label">Full Name</label>
        <input
          name="name"
          type="text"
          className="signup-input"
          placeholder="John Doe"
          onChange={handleChange}
          onBlur={handleChange}
        />
        {error.name && <p className="signup-error">{error.name}</p>}
      </div>

      <div>
        <label className="signup-label">Email</label>
        <input
          type="email"
          name="email"
          className="signup-input"
          placeholder="you@example.com"
          onChange={handleChange}
          onBlur={handleChange}
        />
        {error.email && <p className="signup-error">{error.email}</p>}
      </div>

      <div>
        <label className="signup-label">Password</label>
        <input
          type="password"
          name="password"
          className="signup-input"
          placeholder="••••••••"
          onChange={handleChange}
          onBlur={handleChange}
        />
        {error.password && <p className="signup-error">{error.password}</p>}
      </div>

      <div>
        <label className="signup-label">Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          className="signup-input"
          placeholder="••••••••"
          onChange={handleChange}
          onBlur={handleChange}
        />
        {error.confirmPassword && (
          <p className="signup-error">{error.confirmPassword}</p>
        )}
      </div>

      <button type="submit" className="signup-btn" disabled={!isFormValid}>
        Sign Up
      </button>
    </>
  );
};

const SignUpPage = () => {
  const onSubmit = (formData) => {
    const newUser = {
      id: 1,
      name: formData.get('name'),
      email: formData.get('email'),
      passoword: formData.get('password')
    };

    console.log(newUser);
  };

  return (
    <ImageFormContainer src={"/signuppage.jpg"} alt={"signup page image"}>
      <h2 className="signup-title">Create an Account 🔌</h2>
      <p className="signup-desc">
        Join ECart to explore top electronic gadgets and exclusive deals.
      </p>

      <form className="signup-form" action={onSubmit}>
        <SignUpForm />
      </form>

      <p className="signup-footer">
        Already have an account?
        <Link to={"/login"} className="signup-link">
          Sign in
        </Link>
      </p>
    </ImageFormContainer>
  );
};

export default SignUpPage;
