import "./CSS/Project.css";
import "./CSS/Navbar.css";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

// var numProjects = 0;
// var projectsCall = 0;

function Projects() {
  const location = useLocation();
  var role;

  document.title = "Eli Cohen's Portfolio";

  try {
    role = location.state.role;
  } catch (err) {
    role = "user";
  }
  
  axios.defaults.withCredentials = true;

  const [name, setName] = useState("");
  const [techStack, setTechStack] = useState();
  //   const [images, setImages] = useState([]);
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    var addProjectMenu = document.getElementById("bigAddProject");
    var addProjectsubMenu = document.getElementById("addProjectMenu");
    addProjectMenu.style.display = "none";
    addProjectsubMenu.style.zIndex = "1";
    addProjectsubMenu.style.position = "absolute";
    if (role === "admin") {
      var addProjectBtn = document.getElementById("btnController");
      addProjectBtn.style.display = "block";
    }
  }, []);

  const showProjectMenu = () => {
    var addProjectMenu = document.getElementById("bigAddProject");
    if (addProjectMenu.style.display == "none") {
      addProjectMenu.style.display = "flex";
    } else {
      addProjectMenu.style.display = "none";
    }
  };

  //   const onImageChange = (event) => {
  //     if (event.target.files && event.target.files[0]) {
  //       setImages(URL.createObjectURL(event.target.files[0]));
  //     }
  //   };

  useEffect(() => {
    axios
      .get("https://elicohenportfoliobackend.onrender.com/getProjects")
      .then((allProjects) => {
        setProjects(allProjects.data);
      })
      .catch((err) => console.log(err));
  }, []);

  function handlesubmit(e) {
    e.preventDefault();
    var newTechStack = techStack.split(", ");

    axios
      .post("https://elicohenportfoliobackend.onrender.com/getProjects/projects", { name, newTechStack, description, link })
      .then((res) => {
        {
          console.log(res);
          if (res.data === "Success") {
            document.getElementById("bigAddProject").style.display = "none";
            document.getElementById("addProjectForm").reset();
            window.location.reload();
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
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

      <h1>Personal Projects</h1>
      <p id="subText">Click each project to see a description</p>
      <div id="btnController">
        <button id="projtctBtn" onClick={showProjectMenu}>
          Add a Project
        </button>
      </div>
      <div id="bigAddProject">
        <div id="addProjectMenu">
          <h2>Add a Project</h2>
          <p>Fill out the form below to add a project to the list</p>
          <form id="addProjectForm" action="submit" onSubmit={handlesubmit}>
            <div id="addProjectForm">
              <div id="projectNameDiv">
                <p id="labelText">Project Name:</p>
                <input
                  type="text"
                  id="projectName"
                  name="projectName"
                  required
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div id="techStackDiv">
                <p id="labelText">Tech Stack:</p>
                <input
                  type="text"
                  id="techStack"
                  name="techStack"
                  required
                  onChange={(e) => setTechStack(e.target.value)}
                />
              </div>
              {/* <div id="imageUploadDiv">
                <p id="labelText">Upload Pictures of the Project:</p>
                <input
                  type="file"
                  id="images"
                  name="images"
                  required
                  multiple
                  onChange={onImageChange}
                />
              </div> */}
              <div id="projectDescDiv">
                <p id="labelText">Project Description:</p>
                <textarea
                  id="projectDesc"
                  name="projectDesc"
                  required
                  onChange={(e) => setDescription(e.target.value)}></textarea>
              </div>
              <div id="projectLinkDiv">
                <p id="labelText">Project Link:</p>
                <input
                  type="text"
                  id="projectLink"
                  name="projectLink"
                  required
                  onChange={(e) => setLink(e.target.value)}
                />
              </div>
              <div>
                <button id="submitProject">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div id="projectContainer">
        {projects.map((project) => {
          let created = false;
          var nameElems = document.querySelectorAll("#name");

          nameElems.forEach((name) => {
            if (name.innerHTML === project.name) {
              created = true;
            }
          });
          if (!created) {
            CreateProject(project.name, project.newTechStack, project.description, project.link);
          }
        })}
      </div>
    </div>
  );
}

function CreateProject(name, techStack, description, link) {
  var projectContainer = document.getElementById("projectContainer");

  var wholeProject = document.createElement("div");
  wholeProject.id = "fixborder2";

  var projectParent = document.createElement("div");
  projectParent.id = "projectParent";
  projectParent.className = "bordergradient";
  wholeProject.appendChild(projectParent);

  var borderfix = document.createElement("div");
  borderfix.id = "borderfix";
  projectParent.appendChild(borderfix);

  var project = document.createElement("div");
  project.id = "project";
  borderfix.appendChild(project);

  //   var slideshow = document.createElement("div");
  //   slideshow.classList = "slideshow-container";

  //   var mySlide = document.createElement("div");
  //   mySlide.classList = "mySlides fade photo";

  //   images.forEach((pic) => {
  //     var mySlide = document.createElement("div");
  //     mySlide.classList = "mySlides fade photo";

  //     var img = document.createElement("img");
  //     img.src = pic;
  //     img.style.width = "100%";
  //     img.style.display = "block";
  //     mySlide.appendChild(img);

  //     slideshow.appendChild(mySlide);
  //   });

  //   var leftArrow = "\u276E";
  //   var rightArrow = "\u276F";

  //   var prev = document.createElement("a");
  //   prev.classList = "prev";
  //   prev.name = numProjects;
  //   prev.addEventListener("click", function () {
  //     plusSlides(-1, prev.name);
  //   });
  //   prev.innerText = leftArrow;
  //   slideshow.appendChild(prev);

  //   var next = document.createElement("a");
  //   next.classList = "next";
  //   next.name = numProjects;
  //   next.addEventListener("click", function () {
  //     plusSlides(1, next.name);
  //   });
  //   next.innerText = rightArrow;
  //   slideshow.appendChild(next);

  //   project.appendChild(slideshow);

  var textbox = document.createElement("div");
  textbox.id = "textbox";
  textbox.classList = "newproject";
  project.appendChild(textbox);

  var nameText = document.createElement("h3");
  nameText.id = "name";
  nameText.innerText = name;
  textbox.appendChild(nameText);

  var techStackText = document.createElement("h5");
  techStackText.id = "techStack";
  techStackText.innerText = "Tech Stack: ";
  techStack.forEach((tech, ind) => {
    if (ind === techStack.length - 1) {
      techStackText.innerText += tech;
    } else {
      techStackText.innerText += tech + ", ";
    }
  });
  textbox.appendChild(techStackText);

  // description
  var descriptionBlock = document.createElement("div");
  descriptionBlock.id = "descriptionFlex";

  var descriptionInner = document.createElement("div");
  descriptionInner.id = "mainDescription";
  descriptionBlock.appendChild(descriptionInner);

  var descriptionP = document.createElement("p");
  descriptionP.innerHTML = description;
  descriptionInner.appendChild(descriptionP);

  var projectLink = document.createElement("a");
  projectLink.href = link;
  projectLink.id = "projectLink";
  projectLink.innerText = "Link to the Project";
  descriptionInner.appendChild(projectLink);

  textbox.addEventListener("click", function () {
    if (descriptionBlock.style.display == "flex") {
      descriptionBlock.style.display = "none";
    } else {
      descriptionBlock.style.display = "flex";
    }
  });

  descriptionBlock.style.display = "none";

  wholeProject.appendChild(descriptionBlock);
  projectContainer.appendChild(wholeProject);

  //   document.body.appendChild(wholeProject);
  //   numProjects++;
}

// Starter code for Image slideshow from https://www.w3schools.com/howto/howto_js_slideshow.asp
// var slideIndexContainer = {};
// for (let i = 0; i < document.getElementsByClassName("slideshow-container").length; i++) {
//   slideIndexContainer[i] = [document.getElementsByClassName("slideshow-container")[i], 0];
// }

// for (let i = 0; i < Object.keys(slideIndexContainer).length; i++) {
//   showSlides(1, i);
// }

// function plusSlides(n, ind) {
//   slideIndexContainer[ind][1] += n;
//   showSlides(slideIndexContainer[ind][1], ind);
// }

// function showSlides(n, ind) {
//   let i;
//   let slides = slideIndexContainer[ind][0].getElementsByClassName("mySlides");

//   if (n > slides.length - 1) {
//     slideIndexContainer[ind][1] = 0;
//   }

//   if (n < 1) {
//     slideIndexContainer[ind][1] = slides.length;
//   }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }

//   slides[slideIndexContainer[ind][1]].style.display = "block";
// }

export default Projects;
