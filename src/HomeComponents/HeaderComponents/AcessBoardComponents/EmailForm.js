import { useContext, useRef } from "react";
import MenuContext from "@/store/MenuContext";
import navFormData from "@/store/data/formData";
import {
  closeMenu,
  submitFormHandler,
} from "@/store/functions/AcessBoardFunctions";
export default function EmailForm({ currentMenu }) {
  const menuTypeHandler = useContext(MenuContext);
  const emailCredentialsHandler = menuTypeHandler.emailCredentials;

  const usernameRef = useRef("");
  const passwordRef = useRef("");

  return (
    <div className="email-form" login-menu="true">
      <div className="text-field" login-menu="true">
        <label login-menu="true"></label>
        <input
          name="username"
          className="username"
          maxLength="20"
          type="text"
          ref={usernameRef}
          required
          login-menu="true"
        />
      </div>
      <div login-menu="true" className="password">
        <label login-menu="true"></label>
        <input
          login-menu="true"
          name="password"
          className="password"
          maxLength="20"
          type="password"
          ref={passwordRef}
          required
        />
      </div>
      <button login-menu="true" type="submit">
        {(currentMenu === "email-login" && "Login") ||
          (currentMenu === "email-signup" && "Sign up")}
      </button>
      <div login-menu="true" className="options">
        <a
          login-menu="true"
          onClick={() => {
            menuTypeHandler.menuType.changeMenu(
              currentMenu === "email-login" ? "Login" : "Sign-up"
            );
          }}
        >
          <span>⮜</span>
        </a>
        <p
          onClick={() => {
            menuTypeHandler.menuType.changeMenu(
              currentMenu === "email-login" ? "Login" : "Sign-up"
            );
          }}
          login-menu="true"
        >
          {currentMenu === "email-login"
            ? navFormData.emailLogin.message
            : navFormData.emailSignup.message}
        </p>
      </div>
    </div>
  );
}
