import { useContext } from "react";
import MenuContext from "@/store/MenuContext";
import navFormData from "@/store/data/formData";
import { useRouter } from "next/router";

export function BtnsContainer({ currentMenu }) {
  const menuTypeHandler = useContext(MenuContext);
  const router = useRouter();
  return (
    <div login-menu="true" className="btns-container form-center">
      <button
        type="submit"
        form="access-board"
        login-menu="true"
        className="login-button"
        onClick={() => router.push("/")}
      >
        <svg
          login-menu="true"
          className="facebook"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
        </svg>
        {(currentMenu === "Login" && navFormData.login.btns) ||
          (currentMenu === "Sign-up" && "Sign up")}{" "}
        with Facebook
      </button>
      <button
        type="submit"
        login-menu="true"
        className="login-button"
        onClick={() => router.push("/")}
      >
        <svg
          login-menu="true"
          className="google"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 488 512"
        >
          <path
            login-menu="true"
            d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
          />
        </svg>
        {(currentMenu === "Login" && navFormData.login.btns) ||
          (currentMenu === "Sign-up" && navFormData.signup.btns)}{" "}
        with Google
      </button>
      <button
        login-menu="true"
        className="login-button"
        onClick={(event) => {
          event.preventDefault();
          menuTypeHandler.menuType.changeMenu(
            currentMenu === "Login" ? "email-login" : "email-signup"
          );
        }}
      >
        <svg
          login-menu="true"
          className="mail"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
        </svg>
        {(currentMenu === "Login" && navFormData.login.btns) ||
          (currentMenu === "Sign-up" && navFormData.signup.btns)}{" "}
        with email
      </button>
    </div>
  );
}
