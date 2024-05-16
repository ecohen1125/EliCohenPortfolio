import { useState } from "react";
import { Link } from "react-router-dom";
import "./CSS/Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  document.title = "Eli Cohen's Portfolio";

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.defaults.withCredentials = true;
    axios
      .post("https://elicohenportfoliobackend.onrender.com/login", { email, password })
      .then((res) => {
        {
          if (res.data != "Incorrect Password" && res.data != "User does not exist") {
            navigate('/home',{state:{id:1,role: res.data.role}});
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="maindiv">
      <div className="seconddiv">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="inputdiv">
            <label htmlFor="email" className="formlabel">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              autoComplete="off"
              name="email"
              className="signupinput"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="inputdiv">
            <label htmlFor="password" className="formlabel">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              autoComplete="off"
              name="password"
              className="signupinput"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" id="register">
            Login
          </button>
        </form>
        <div id="fixCenter">
          <p className="text">Already Have an Account</p>
          <Link to="/register" id="login">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
