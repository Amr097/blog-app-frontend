import { useEffect, useRef, useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleActive = () => {
    setIsOpen((prev) => !prev);
  };

  const addVisible = (event) => {
    event.preventDefault();
    const form = document.querySelector(".form");
    form.classList.add("visible");
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
          <a href="/#">
            <img src="/images/owl (1).png" alt="owl-logo"></img>
          </a>

          <figcaption>
            <a href="#">
              404<span>Owl</span>
            </a>
          </figcaption>
        </figure>

        <div className="mid-nav">
          <a className="nav-icon" href="/#">
            Home
          </a>
          <a className="nav-icon" href="">
            About
          </a>
        </div>

        <div className="end-nav">
          <a className="nav-icon" onClick={addVisible}>
            Log in
          </a>
          <a className="nav-icon sign-up" href="">
            Sign up
          </a>
        </div>

        <a className="dropdown" onClick={toggleActive} data-drop-down>
          <span className="bar" data-drop-down></span>
          <span className="bar" data-drop-down></span>
          <span className="bar" data-drop-down></span>
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
        <li onClick={addVisible} data-drop-down>
          <a onClick={addVisible}>Log in</a>
        </li>
        <li data-drop-down>
          <a>About us</a>
        </li>
      </ul>
    </header>
  );
}
