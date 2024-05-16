import "./CSS/Main.css";
import "./CSS/Normalize.css";
// import eligown from "./assets/EliGown.jpg";
import { useNavigate, useLocation } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const location = useLocation();

  document.title = "Eli Cohen's Portfolio";

  var role;

  try {
    role = location.state.role;
  } catch (err) {
    role = "user";
  }

  const goAbout = () => {
    navigate("../about", { state: { id: 1, role: role } });
  };

  const goProjects = () => {
    navigate("../projects", { state: { id: 1, role: role } });
  };

  const goContact = () => {
    navigate("../contacts", { state: { id: 1, role: role } });
  };


  if (screen.width < 600) {
    return (
      <div id="mainFlex" className="left">
        <div id="right">
          <h1>Eli Cohens Portfolio</h1>
          <br />
          <div id="subtitle">
            <h3 id="subtext">
              Welcome to my website! Here I am sharing a little about me, my projects, and ways to contact me.
            </h3>
          </div>
          <br />
          <div id="buttonDiv">
            <button id="about" className="buttonNav" onClick={goAbout}>
              About Me
            </button>
            <button id="projects" className="buttonNav" onClick={goProjects}>
              Personal Projects
            </button>
            <button id="contact" className="buttonNav" onClick={goContact}>
              Contact Me
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id="mainFlex">
      <div id="left"></div>
      <div id="right">
        <h1>Eli Cohens Portfolio</h1>
        <br />
        <div id="subtitle">
          <h3 id="subtext">
            Welcome to my website! Here I am sharing a little about me, my projects, and ways to contact me.
          </h3>
        </div>
        <br />
        <div id="buttonDiv">
          <button id="about" className="buttonNav" onClick={goAbout}>
            About Me
          </button>
          <button id="projects" className="buttonNav" onClick={goProjects}>
            Personal Projects
          </button>
          <button id="contact" className="buttonNav" onClick={goContact}>
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
