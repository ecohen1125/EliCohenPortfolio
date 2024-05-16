import { useState } from "react";
import { Link } from "react-router-dom";
import "./CSS/Signup.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  document.title = "Eli Cohen's Portfolio";

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.defaults.withCredentials = true;
    axios
      .post("https://elicohenportfoliobackend.onrender.com/signup", { name, email, password })
      .then((res) => {
        {
          console.log(res);
          navigate("/login");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="maindiv">
      <div className="seconddiv">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="inputdiv">
            <label htmlFor="email" className="formlabel">
              <strong>Name</strong>
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              autoComplete="off"
              name="email"
              className="signupinput"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
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
            Register
          </button>
        </form>
        <div>
          <p className="text">Already Have an Account</p>
          <Link to="/login" id="login">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
