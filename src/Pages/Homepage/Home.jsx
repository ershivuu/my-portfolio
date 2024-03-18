import React from "react";
import "./Home.css";
import Nav from "../../Components/Headers/Nav";
import instagram from "../../assets/instagram.png";
import linkedin from "../../assets/linkedin.png";
import whatsapp from "../../assets/whatsapp.png";
import htmlicon from "../../assets/html.png";
import cssicon from "../../assets/css.png";
import jsicon from "../../assets/js.png";
import reacticon from "../../assets/react.png";
import prompticon from "../../assets/prompt-engineering.png";
import javaicon from "../../assets/java.png";
import springicon from "../../assets/spring.png";
import giticon from "../../assets/github.png";
import windowicon from "../../assets/windows.png";
import ubuntuicon from "../../assets/ubuntu.png";
import vsicon from "../../assets/vscode.png";
import locgif from "../../assets/location.png";
import messagegif from "../../assets/mail.png";
import callsgif from "../../assets/call.png";
import Myprojects from "../Projects/Myprojects";
import humanvectort from "../../assets/robo2.png";

function Home() {
  const phoneNumber = "7879401825";
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <Nav></Nav>
      <div className="about-me" id="top">
        <p>
          i'm <span>Shivam gupta</span>
        </p>
        <p>ReactJS & Java Developer</p>
      </div>
      <div className="contact-button">
        <button onClick={() => scrollToSection("contact-info")}>
          {" "}
          Contact Me
        </button>
      </div>
      <div className="social-icons">
        <div className="logo">
          <a href="https://www.instagram.com/_shiv.am_/" target="_blank">
            <img src={instagram} alt="" />
          </a>
        </div>
        <div className="logo">
          <a href="https://www.linkedin.com/in/ershivamsg/" target="_blank">
            <img src={linkedin} alt="" />
          </a>
        </div>
        <div className="logo">
          <a href="https://wa.me/7879401825" target="_blank">
            <img src={whatsapp} alt="" />
          </a>
        </div>
      </div>
      <div className="vector-element-1">
        <img src={humanvectort} alt="" />
      </div>
      <div className="about-para">
        <p>About</p>
        <p>
          I am a full-time ReactJS developer with a background Java Developement
          and a solid understanding of the Java Spring framework, I am
          enthusiastic about continually improving my skills and always open to
          learning new technologies and thrive in challenging work environments.
        </p>
      </div>
      <div className="myskills" id="skills">
        <p>my skills</p>
        <div className="skill-cards">
          <div className="card">
            <img src={htmlicon} alt="" />
            <p>HTML</p>
          </div>
          <div className="card">
            <img src={cssicon} alt="" />
            <p>CSS</p>
          </div>
          <div className="card">
            <img src={jsicon} alt="" />
            <p>javascript</p>
          </div>

          <div className="card">
            <img src={reacticon} alt="" />
            <p>reactjs</p>
          </div>

          <div className="skills-row-2">
            <div className="skill-cards">
              <div className="card">
                <img src={prompticon} alt="" />
                <p>Prompt-eng</p>
              </div>
              <div className="card">
                <img src={javaicon} alt="" />
                <p>java</p>
              </div>
              <div className="card">
                <img src={springicon} alt="" />
                <p>spring-boot</p>
              </div>
              <div className="card">
                <img src={giticon} alt="" />
                <p>github</p>
              </div>
            </div>
          </div>
          <div className="skills-row-3">
            <div className="skill-cards">
              <div className="card">
                <img src={ubuntuicon} alt="" />
                <p>ubuntu</p>
              </div>
              <div className="card">
                <img src={windowicon} alt="" />
                <p>windows</p>
              </div>
              <div className="card">
                <img src={vsicon} alt="" />
                <p>vscode</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="project-section" id="project">
        <div className="section-heading">
          <p>Projects</p>
        </div>
        <div className="flex-container">
          <div className="flex-card">
            <div>
              <p>Online Voting Portal</p>
              <p>
                Developed a secure web-based platform for remote voting,
                enabling individuals to participate in elections and polls from
                anywhere. Utilized technologies such as HTML, CSS, JavaScript,
                PHP, and MySQL. I took the responsibility of handling the
                frontend of the portal
              </p>
              <button className="view-code-btn">
                <a
                  href="https://github.com/ershivuu/Online-Voting-System-Project.git"
                  target="_blank"
                >
                  View-code &#8594;
                </a>
              </button>
            </div>
          </div>
          <div className="flex-card">
            <div>
              <p>Training Portal</p>
              <p>
                Created a comprehensive web portal for training institutes to
                offer courses, workshops, and certification programs. Developed
                using Java and Spring framework.Implemented features such as
                course scheduling, attendance tracking, performance reporting,
                and feedback mechanisms.
              </p>
              <button className="view-code-btn">
                <a
                  href="https://github.com/ershivuu/Training-Institute-Project.git"
                  target="_blank"
                >
                  View-code &#8594;
                </a>
              </button>
            </div>
          </div>
          <div className="flex-card">
            <div>
              <p>Job Portal</p>
              <p>
                Created a comprehensive web portal for University to hire
                professors and other empty vacancies. Developed using ReactJs
                for Front-end and NodeJs for Back-end.Implemented features such
                as Interview scheduling, Job Posting, filtered reports of
                applicants, and other.
              </p>
              <button className="view-code-btn">
                <a href="">View-code &#8594;</a>
              </button>
            </div>
          </div>
          <div className="flex-card">
            <div>
              <p>Landing Page</p>
              <p>
                Created a comprehensive web portal for University to hire
                professors and other empty vacancies. Developed using ReactJs
                for Front-end and NodeJs for Back-end.Implemented features such
                as Interview scheduling, Job Posting, filtered reports of
                applicants, and other.
              </p>
              <button className="view-code-btn">
                <a
                  href="https://github.com/ershivuu/medi-launching-laws-page.git"
                  target="_blank"
                >
                  View-code &#8594;
                </a>
              </button>
            </div>
          </div>
          <div className="flex-card">
            <div>
              <p>Chrome Extension</p>
              <p>
                Created a comprehensive web portal for University to hire
                professors and other empty vacancies. Developed using ReactJs
                for Front-end and NodeJs for Back-end.Implemented features such
                as Interview scheduling, Job Posting, filtered reports of
                applicants, and other.
              </p>
              <button className="view-code-btn">
                <a
                  href="https://github.com/ershivuu/Joke_extension_Chrome.git"
                  target="_blank"
                >
                  View-code &#8594;
                </a>
              </button>
            </div>
          </div>
          <div className="flex-card">
            <div>
              <p>Portfolio</p>
              <p>
                Created a comprehensive web portal for University to hire
                professors and other empty vacancies. Developed using ReactJs
                for Front-end and NodeJs for Back-end.Implemented features such
                as Interview scheduling, Job Posting, filtered reports of
                applicants, and other.
              </p>
              <button className="view-code-btn">
                <a
                  href="https://github.com/ershivuu/Medi-current-landing-page.git"
                  target="_blank"
                >
                  View-code &#8594;
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="exp-section">
        <Myprojects></Myprojects>
      </div>

      <div className="contact-section" id="contact-info">
        <div className="contact-heading">
          <p>Contact me</p>
        </div>

        <div className="contact-sub-section">
          <div className="contact-row-1">
            <div className="contact-card">
              <span>
                <img src={messagegif} alt="" />
              </span>
              <span>er.shivamsg@gmail.com</span>
            </div>
            <div className="contact-card">
              <span>
                <img src={callsgif} alt="" />
              </span>
              <span>
                <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
              </span>
            </div>
          </div>
          <div className="contact-row-1">
            <div className="contact-card">
              <span>
                <img src={locgif} alt="" />
              </span>
              <span>Sagar, Madhya Pradesh</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
