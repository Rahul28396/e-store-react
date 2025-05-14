import { Link } from "react-router";
import "./Signup.css";
import ImageFormContainer from "../../components/ImageFormContainer/ImageFormContainer";

const SignUpPage = () => {
  return (
    <ImageFormContainer src={'/signuppage.jpg'} alt={'signup page image'}>
      <h2 className="signup-title">Create an Account 🔌</h2>
      <p className="signup-desc">
        Join ECart to explore top electronic gadgets and exclusive deals.
      </p>

      <form className="signup-form">
        <div>
          <label className="signup-label">Full Name</label>
          <input
            type="text"
            required
            className="signup-input"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label className="signup-label">Email</label>
          <input
            type="email"
            required
            className="signup-input"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label className="signup-label">Password</label>
          <input
            type="password"
            required
            className="signup-input"
            placeholder="••••••••"
          />
        </div>

        <div>
          <label className="signup-label">Confirm Password</label>
          <input
            type="password"
            required
            className="signup-input"
            placeholder="••••••••"
          />
        </div>

        <button type="submit" className="signup-btn">
          Sign Up
        </button>
      </form>

      <p className="signup-footer">
        Already have an account?{" "}
        <Link to={"/login"} className="signup-link">
          Sign in
        </Link>
      </p>
    </ImageFormContainer>
  );
};

export default SignUpPage;
