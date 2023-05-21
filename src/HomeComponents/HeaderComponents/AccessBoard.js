import { useContext } from "react";
import MenuContext from "@/store/MenuContext";
import navFormData from "@/store/data/formData";
import {
  closeMenu,
  menuHandler,
  submitFormHandler,
} from "@/store/functions/AcessBoardFunctions";
import EmailForm from "./AcessBoardComponents/EmailForm";
import { BtnsContainer } from "./AcessBoardComponents/BtnsContainer";

export default function AccessBoard() {
  const menuTypeHandler = useContext(MenuContext);
  const currentMenu = menuTypeHandler.menuType.menu.toString();
  const emailCredentialsHandler =
    menuTypeHandler.emailCredentials.userInfoValues;

  return (
    <div className="form form-center" onClick={(event) => menuHandler(event)}>
      <div className="form-container form-center" login-menu="true">
        <form
          className="login-form"
          login-menu="true"
          id="access-board"
          onSubmit={(event) =>
            submitFormHandler(event, emailCredentialsHandler, currentMenu)
          }
        >
          <a className="exit-button" onClick={(event) => closeMenu(event)}>
            X
          </a>
          <div login-menu="true" className="form-content form-center">
            <h1 login-menu="true">Become an Owl.</h1>

            {(currentMenu === "email-login" && (
              <EmailForm currentMenu={currentMenu} />
            )) ||
              (currentMenu === "email-signup" && (
                <EmailForm currentMenu={currentMenu} />
              ))}

            {currentMenu !== "email-login" &&
              currentMenu !== "email-signup" && (
                <BtnsContainer currentMenu={currentMenu} />
              )}

            <p login-menu="true">
              {(currentMenu === "Login" && navFormData.login.message) ||
                (currentMenu === "Sign-up" && navFormData.signup.message)}{" "}
              <a
                onClick={(event) =>
                  menuTypeHandler.menuType.changeMenu(
                    currentMenu === "Login" ? "Sign-up" : "Login"
                  )
                }
                login-menu="true"
              >
                {(currentMenu === "Login" && navFormData.login.link) ||
                  (currentMenu === "Sign-up" && navFormData.signup.link)}{" "}
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
