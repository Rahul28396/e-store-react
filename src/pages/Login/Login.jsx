import { Link } from "react-router";
import "./Login.css";
import ImageFormContainer from "../../components/ImageFormContainer/ImageFormContainer";

const Login = () => {
  return (
    <ImageFormContainer src={"/loginpage.jpg"} alt="Login">
      <h2 className="login-title">Welcome Back 👋</h2>
      <p className="login-desc">Login to continue shopping with EStore</p>

      <form className="login-form">
        <div>
          <label className="login-label">Email</label>
          <input
            type="email"
            required
            className="login-input"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label className="login-label">Password</label>
          <input
            type="password"
            required
            className="login-input"
            placeholder="••••••••"
          />
        </div>

        <div className="login-options">
          <label className="login-checkbox-label">
            <input type="checkbox" className="login-checkbox" />
            Remember me
          </label>
          <a href="#" className="login-link">
            Forgot Password?
          </a>
        </div>

        <button type="submit" className="login-btn">
          Sign In
        </button>
      </form>

      <p className="login-footer">
        Don’t have an account?{" "}
        <Link to="/signup" className="login-footer-link">
          Sign up here
        </Link>
      </p>
    </ImageFormContainer>
  );
};

export default Login;
