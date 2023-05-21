import { useContext, useRef } from "react";
import MenuContext from "@/store/MenuContext";
import navFormData from "@/store/data/formData";
import { emailSubmitHandler } from "@/store/functions/AcessBoardFunctions";

export default function EmailForm({ currentMenu }) {
  const menuTypeHandler = useContext(MenuContext);
  const emailCredentialsHandler = menuTypeHandler.emailCredentials;
  const usernameRef = useRef("");
  const passwordRef = useRef("");

  return (
    <div className="email-form" login-menu="true">
      <div className="text-field" login-menu="true">
        <input
          name="username"
          maxLength="20"
          type="text"
          ref={usernameRef}
          required
          login-menu="true"
        />
        <label login-menu="true">Username</label>
      </div>
      <div login-menu="true" className="password">
        <input
          login-menu="true"
          name="password"
          maxLength="20"
          type="password"
          ref={passwordRef}
          required
        />
        <label login-menu="true">Password</label>
      </div>
      <button
        login-menu="true"
        type="submit"
        onClick={(event) =>
          emailSubmitHandler(
            event,
            usernameRef,
            passwordRef,
            emailCredentialsHandler
          )
        }
      >
        {(currentMenu === "email-login" && "Login") ||
          (currentMenu === "email-signup" && "Sign up")}
      </button>
      <div login-menu="true">
        <p login-menu="true">
          {currentMenu === "email-login"
            ? navFormData.emailLogin.message
            : navFormData.emailSignup.message}
        </p>
        <a
          login-menu="true"
          onClick={() => {
            menuTypeHandler.menuType.changeMenu(
              currentMenu === "email-login" ? "Login" : "Sign-up"
            );
          }}
        >
          {navFormData.emailLogin.link}
        </a>
      </div>
    </div>
  );
}
