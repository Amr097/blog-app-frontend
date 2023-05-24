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

// const emailSubmitHandler = async (
//   event,
//   usernameRef,
//   passwordRef,
//   emailCredentialsHandler
// ) => {
//   const usernameValue = usernameRef.current.value;
//   const passwordValue = passwordRef.current.value;

//   await emailCredentialsHandler.userInfoHandler({
//     username: usernameValue,
//     password: passwordValue,
//   });
// };

const submitFormHandler = (event, authenticateUser, router) => {
  closeMenu();

  authenticateUser.authenticationHandler(true);
  const authenticated = window.localStorage.setItem("IS_AUTHENTICATED", true);
};

export { closeMenu, menuHandler, submitFormHandler };
