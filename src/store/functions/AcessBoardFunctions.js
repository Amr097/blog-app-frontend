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

const emailSubmitHandler = (event, usernameRef, passwordRef) => {
  event.preventDefault();
  usernameValue = usernameRef.current.value;
  passwordValue = passwordRef.current.value;
  console.log(`${usernameValue} ${passwordValue}`);
  console.log("works");
};

export { closeMenu, menuHandler, emailSubmitHandler };
