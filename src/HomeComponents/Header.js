import { useEffect, useRef, useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleActive = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const exitDropdown = (event) => {
      const isAttribute = event.target.matches("[data-drop-down]");

      if (!isAttribute) {
        setIsOpen(false);
        document.removeEventListener("click", exitDropdown);
      }
    };
    document.addEventListener("click", exitDropdown);
  }, [isOpen]);

  return (
    <header id="header">
      <nav className="nav-bar">
        <figure className="logo">
          <img src="/images/owl (1).png" alt="owl-logo"></img>
          <figcaption>
            404<span>Owl</span>
          </figcaption>
        </figure>

        <div className="mid-nav">
          <a className="nav-icon" href="#">
            Home
          </a>
          <a className="nav-icon" href="">
            About
          </a>
        </div>

        <div className="end-nav">
          <a className="nav-icon" href="">
            Log in
          </a>
          <a className="nav-icon sign-up" href="">
            Sign up
          </a>
        </div>

        <a className="dropdown" onClick={toggleActive} data-drop-down>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </a>
      </nav>
      <ul
        data-drop-down
        className={"dropdown-content " + (isOpen ? "active" : "")}
      >
        <li data-drop-down>
          <a>Home</a>
        </li>
        <li data-drop-down>
          <a>Sign up</a>
        </li>
        <li data-drop-down>
          <a>Log in</a>
        </li>
        <li data-drop-down>
          <a>About us</a>
        </li>
      </ul>
    </header>
  );
}
