import "./CSS/Contact.css";
import "./CSS/Navbar.css";
import gmail from "/Logos/Gmail.png";
import phone from "/Logos/Phone.png";
import linkedin from "/Logos/LinkedIn.png";
import { Link, useLocation } from "react-router-dom";
import github from "/Logos/GitHub.png";
import menu from "/Logos/Menu.png";
import { useState } from "react";

function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();
  var role;

  document.title = "Eli Cohen's Portfolio";

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  try {
    role = location.state.role;
  } catch (err) {
    role = "user";
  }

  if (screen.width < 750) {
    return (
      <div>
        <nav id="ontop">
          <img src={menu} alt="Menu Button" id="menuBtn" onClick={toggleVisibility} />
          {isVisible && <div className="hiddenMenu">
            <ul id="navbar">
              <li id="name">Eli Cohen</li>
              <Link to={{ pathname: "../home", state: { id: 1, role: role } }} className="home" id="elem">
                Home
              </Link>
              <Link to={{ pathname: "../about", state: { id: 1, role: role } }} className="about" id="elem">
                About Me
              </Link>
              <Link to={{ pathname: "../projects", state: { id: 1, role: role } }} className="projects" id="elem">
                Projects
              </Link>
              <Link to={{ pathname: "../contacts", state: { id: 1, role: role } }} className="contact" id="elem">
                Contact
              </Link>
            </ul>
          </div>}
        </nav>

        <div id="main">
        <h1>Contact Me</h1>
        <div id="email">
          <img src={gmail} alt="Gmail Logo" />
          <p className="text"> ECohen1125@gmail.com </p>
        </div>
        <div id="phone">
          <img src={phone} alt="Phone Logo" />
          <p className="text">(901) 626 - 2606</p>
        </div>
        <div id="linkedin">
          <img src={linkedin} alt="LinkedIn Logo" />
          <a className="text" href="https://www.linkedin.com/in/elijcohen/" target="_blank" rel="noopener noreferrer">
            LinkedIn Profile
          </a>
        </div>
        <div id="github">
          <img src={github} alt="GitHub Logo" />
          <a className="text" href="https://github.com/ecohen1125" target="_blank" rel="noopener noreferrer">
            GitHub Profile
          </a>
        </div>
      </div>
    </div>
  );
}

  return (
    <div>
      <nav id="ontop">
        <ul id="navbar">
          <li id="name">Eli Cohen</li>
          <Link to={{ pathname: "../home", state: { id: 1, role: role } }} className="home" id="elem">
            Home
          </Link>
          <Link to={{ pathname: "../about", state: { id: 1, role: role } }} className="about" id="elem">
            About Me
          </Link>
          <Link to={{ pathname: "../projects", state: { id: 1, role: role } }} className="projects" id="elem">
            Projects
          </Link>
          <Link to={{ pathname: "../contacts", state: { id: 1, role: role } }} className="contact" id="elem">
            Contact
          </Link>
        </ul>
      </nav>

      <div id="main">
        <h1>Contact Me</h1>
        <div id="email">
          <img src={gmail} alt="Gmail Logo" />
          <p className="text"> ECohen1125@gmail.com </p>
        </div>
        <div id="phone">
          <img src={phone} alt="Phone Logo" />
          <p className="text">(901) 626 - 2606</p>
        </div>
        <div id="linkedin">
          <img src={linkedin} alt="LinkedIn Logo" />
          <a className="text" href="https://www.linkedin.com/in/elijcohen/" target="_blank" rel="noopener noreferrer">
            LinkedIn Profile
          </a>
        </div>
        <div id="github">
          <img src={github} alt="GitHub Logo" />
          <a className="text" href="https://github.com/ecohen1125" target="_blank" rel="noopener noreferrer">
            GitHub Profile
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
