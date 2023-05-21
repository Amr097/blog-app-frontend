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

const emailSubmitHandler = async (
  event,
  usernameRef,
  passwordRef,
  emailCredentialsHandler
) => {
  const usernameValue = usernameRef.current.value;
  const passwordValue = passwordRef.current.value;

  await emailCredentialsHandler.userInfoHandler({
    username: usernameValue,
    password: passwordValue,
  });
};

const submitFormHandler = (event, emailCredentialsHandler, currentMenu) => {
  event.preventDefault();
  console.log(emailCredentialsHandler);
  console.log(currentMenu);
  const reqBody = {
    username: emailCredentialsHandler.username,
    password: emailCredentialsHandler.password,
    type: currentMenu,
  };
  fetch("/api/userAuth", {
    method: "POST",
    body: JSON.stringify(reqBody),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
};

export { closeMenu, menuHandler, emailSubmitHandler, submitFormHandler };
