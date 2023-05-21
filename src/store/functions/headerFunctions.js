const toggleActive = (setIsOpen, isOpen) => {
  setIsOpen((prev) => !prev);
  const home = document.querySelector("#home");
};

const addVisible = (event, type, context) => {
  event.preventDefault();
  context.menuType.changeMenu(type);

  const form = document.querySelector(".form");
  form.classList.add("visible");
};

export { toggleActive, addVisible };
