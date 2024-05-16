import "./CSS/About.css";
import "./CSS/Navbar.css";
import { useState } from "react";
import gates from "./assets/EliStole.jpg";
import { Link, useLocation } from "react-router-dom";
import menu from "./assets/Logos/Menu.png";

function About() {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();
  var role;

  document.title = "Eli Cohen's Portfolio";

  try {
    role = location.state.role;
  } catch (err) {
    role = "user";
  }

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  if (screen.width < 750) {
    return (
      <div>
        <nav id="ontop">
          <img src={menu} alt="Menu Button" id="menuBtn" onClick={toggleVisibility} />
          {/* {isVisible ? 'Hide' : 'Show'} */}
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

        <div id="aboutpage">
          <div id="center">
            <h1>About Me</h1>
            <div id="basics">
              <img id="mainpic" src={gates} alt="Eli at Sample Gates" />
              {/* <div id="school">
              <p>Major: Computer Science</p>
              <p>Minors: Web Design, Data Science, Informatics</p>
            </div> */}
            </div>
            <div id="bodytext">
              <p>
                Hello, my name is Eli Cohen. I graduated from Indiana University with a Bachelor of Science in Computer
                Science with minors in Web Design, Data Science, and Informatics.
              </p>
              <br />
              <p>
                I am from Memphis Tennessee. I am a big sports fan with my favorites being basketball and baseball. My
                favorite teams are the Memphis Grizzlies and the Atlanta Braves. I also enjoy playing video games,
                hanging out with friends, and watching movies and TV shows. I have a passion for programming and web
                design. I am always looking for new projects to work on. I am a hard worker willing to learn and improve
                my skills. I am always looking for new opportunities to grow and better myself. I am a critical thinker
                who enjoys solving problems. They feel like a puzzle that I have to solve.
              </p>
              <br />
              <p>
                Feel free to reach out and connect! Whether you have a question, a project idea, or just want to talk, I
                am always willing to chat! Do not hesitate to reach out, and I will do my best to get back to you as
                soon as possible.
              </p>
            </div>
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

      <div id="aboutpage">
        <div id="center">
          <h1>About Me</h1>
          <div id="basics">
            <img id="mainpic" src={gates} alt="Eli at Sample Gates" />
            {/* <div id="school">
              <p>Major: Computer Science</p>
              <p>Minors: Web Design, Data Science, Informatics</p>
            </div> */}
          </div>
          <div id="bodytext">
            <p>
              Hello, my name is Eli Cohen. I graduated from Indiana University with a Bachelor of Science in Computer
              Science with minors in Web Design, Data Science, and Informatics.
            </p>
            <br />
            <p>
              I am from Memphis Tennessee. I am a big sports fan with my favorites being basketball and baseball. My
              favorite teams are the Memphis Grizzlies and the Atlanta Braves. I also enjoy playing video games, hanging
              out with friends, and watching movies and TV shows. I have a passion for programming and web design. I am
              always looking for new projects to work on. I am a hard worker willing to learn and improve my skills. I
              am always looking for new opportunities to grow and better myself. I am a critical thinker who enjoys
              solving problems. They feel like a puzzle that I have to solve.
            </p>
            <br />
            <p>
              Feel free to reach out and connect! Whether you have a question, a project idea, or just want to talk, I
              am always willing to chat! Do not hesitate to reach out, and I will do my best to get back to you as soon
              as possible.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
