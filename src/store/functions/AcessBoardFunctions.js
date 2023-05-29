const closeMenu = () => {
  const form = document.querySelector(".form");
  form.classList.remove("visible");
};

const menuHandler = (event) => {
  const form = document.querySelector(".form");
  const isMenu = event.target.matches("[login-menu]");

  if (!isMenu) {
    form.classList.remove("visible");
  }
};


const submitFormHandler = (event, authenticateUser, router) => {
  closeMenu();

  authenticateUser.authenticationHandler(true);
  const authenticated = window.localStorage.setItem("IS_AUTHENTICATED", true);
};

export { closeMenu, menuHandler, submitFormHandler };
