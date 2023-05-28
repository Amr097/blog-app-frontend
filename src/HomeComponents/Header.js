import { useContext, useEffect, useState } from "react";
import MenuContext from "@/store/MenuContext";
import {
  toggleActive,
  addVisible,
  logout,
} from "@/store/functions/headerFunctions";

export default function Header({ isOpen, setIsOpen }) {
  const menuTypeHandler = useContext(MenuContext);
  const isAuthenticated = menuTypeHandler.authenticateUser.value;
  const [checker, setChecker] = useState(isAuthenticated);

  useEffect(() => {
    const authenticated = window.localStorage.getItem("IS_AUTHENTICATED");
    setChecker(authenticated ? authenticated : false);
  }, [checker]);

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
          <a
            className="nav-icon"
            href={checker && "/Posts/saved"}
            onClick={() => {
              !checker && addVisible(event, "Login", menuTypeHandler);
            }}
          >
            Profile
          </a>
        </div>

        {!checker && (
          <div className="end-nav before">
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
        )}

        {checker && (
          <div className="logged-end-nav">
            <a className="nav-icon write" href="/create-post">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                />
              </svg>
              Write
            </a>
            <a
              onClick={(event) => logout(setChecker)}
              className="nav-icon logout"
            >
              Logout
            </a>
          </div>
        )}

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
      {!checker && (
        <ul
          data-drop-down
          className={"dropdown-content " + (isOpen ? "active" : "")}
        >
          <li href="/#" data-drop-down>
            <a href="/#">Home</a>
          </li>
          <li
            onClick={(event) => addVisible(event, "Sign-up", menuTypeHandler)}
            data-drop-down
          >
            <a
              onClick={(event) => addVisible(event, "Sign-up", menuTypeHandler)}
            >
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
            <a
              href={checker && "/Posts/saved"}
              onClick={() => {
                !checker && addVisible(event, "Login", menuTypeHandler);
              }}
            >
              Profile
            </a>
          </li>
        </ul>
      )}

      {checker && (
        <ul
          data-drop-down
          className={"dropdown-content " + (isOpen ? "active" : "")}
        >
          <li href="/#" data-drop-down>
            <a href="/#">Home</a>
          </li>
          <li data-drop-down>
            <a href="/create-post">Write</a>
          </li>
          <li onClick={(event) => logout(setChecker)} data-drop-down>
            <a onClick={(event) => logout(setChecker)}>Log out</a>
          </li>
          <li data-drop-down>
            <a
              href={checker && "/Posts/saved"}
              onClick={() => {
                !checker && addVisible(event, "Login", menuTypeHandler);
              }}
            >
              Profile
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}
