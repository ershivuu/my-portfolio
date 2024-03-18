import React, { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Nav.css";

function Nav() {
  let rbndata = "Contact Us: info@medicaps.ac.in | Call: 079690-24444";

  const [scrolling, setScrolling] = useState(false);
  const [linkColor, setLinkColor] = useState("white");

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setLinkColor(scrolling ? "black" : "white");
  }, [scrolling]);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const downloadPDF = () => {
    // Replace 'your_resume.pdf' with the actual path to your PDF file
    const pdfPath =
      "https://drive.google.com/file/d/1eF5zKLCKk-dk3K3IkUhGmOpfQxmWacve/view?usp=sharing";
    const link = document.createElement("a");
    link.href = pdfPath;
    link.target = "_blank";
    link.download = "Shivam_Gupta";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
      <div className={`my-header fixed-top ${scrolling ? "scrolled" : ""}`}>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <button
              className="navbar-toggler "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
              style={{ paddingLeft: "6px", paddingRight: "6px" }}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link
                    className={`nav-link active ${scrolling ? "scrolled" : ""}`}
                    aria-current="page"
                  >
                    <a
                      className={`nav-link active ${
                        scrolling ? "scrolled" : ""
                      }`}
                      onClick={() => scrollToSection("top")}
                    >
                      Home
                    </a>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className={`nav-link  ${scrolling ? "scrolled" : ""}`}>
                    <a
                      className={`nav-link active ${
                        scrolling ? "scrolled" : ""
                      }`}
                      onClick={() => scrollToSection("skills")}
                    >
                      Skills
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            <a className="navbar-brand" href="/">
              <img src={logo} className="medi-logo" alt="medi-logo" />
            </a>
            <div
              className="collapse navbar-collapse nav-part-2"
              id="navbarNavDropdown"
            >
              <ul className="navbar-nav nav-1">
                <li className="nav-item">
                  <Link className={`nav-link  ${scrolling ? "scrolled" : ""}`}>
                    <a
                      className={`nav-link active ${
                        scrolling ? "scrolled" : ""
                      }`}
                      onClick={() => scrollToSection("project")}
                    >
                      Projects
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link  ${scrolling ? "scrolled" : ""}`}>
                    <a
                      onClick={downloadPDF}
                      className={`nav-link active ${
                        scrolling ? "scrolled" : ""
                      }`}
                    >
                      Download CV
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <Outlet />
    </>
  );
}

export default Nav;
