import { useContext, useState } from "react";
import MenuContext from "@/store/MenuContext";
import { toggleActive, addVisible } from "@/store/functions/headerFunctions";

export default function Header({ isOpen, setIsOpen }) {
  const menuTypeHandler = useContext(MenuContext);

  return (
    <header id="header">
      <nav className="nav-bar">
        <figure className="logo">
          <a href="/#">
            <img src="/images/owl (1).png" alt="owl-logo"></img>
          </a>

          <figcaption>
            <a href="/#">
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
          <a
            className="nav-icon"
            onClick={(event) => addVisible(event, "Login", menuTypeHandler)}
          >
            Log in
          </a>
          <a
            onClick={(event) => addVisible(event, "Sign-up", menuTypeHandler)}
            className="nav-icon sign-up"
          >
            Sign up
          </a>
        </div>

        {isOpen ? (
          <a onClick={() => toggleActive(setIsOpen, isOpen)} className="exit">
            X
          </a>
        ) : (
          <a
            className="dropdown"
            onClick={() => toggleActive(setIsOpen, isOpen)}
            data-drop-down
          >
            <span className="bar" data-drop-down></span>
            <span className="bar" data-drop-down></span>
            <span className="bar" data-drop-down></span>
          </a>
        )}
      </nav>
      <ul
        data-drop-down
        className={"dropdown-content " + (isOpen ? "active" : "")}
      >
        <li data-drop-down>
          <a>Home</a>
        </li>
        <li data-drop-down>
          <a onClick={(event) => addVisible(event, "Sign-up", menuTypeHandler)}>
            Sign up
          </a>
        </li>
        <li
          onClick={(event) => addVisible(event, "Login", menuTypeHandler)}
          data-drop-down
        >
          <a onClick={(event) => addVisible(event, "Login", menuTypeHandler)}>
            Log in
          </a>
        </li>
        <li data-drop-down>
          <a>About us</a>
        </li>
      </ul>
    </header>
  );
}
