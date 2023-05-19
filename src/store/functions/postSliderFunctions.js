let figureValue;

const TimerincrementIndex = (currentIndex, setCurrentIndex, postData) => {
  let figureIndex = 0;
  const figure = document.querySelector("section.highlight-post figure");

  figure ? (figure.style.transition = "none") : null;

  if (currentIndex === postData.length - 1) {
    if (figure) {
      figure.style.transform = `translateX(${(figureValue = 0)}vw)`;
      figureIndex = 0;
    }
  } else {
    figureValue = 0;
    for (let i = 0; i <= currentIndex; i++) {
      if (figure) {
        figure.style.transform = `translateX(${(figureValue =
          figureValue - 100)}vw)`;
        figureIndex++;
      }
    }

    setCurrentIndex(figureIndex);
  }
};

const incrementIndex = (currentIndex, setCurrentIndex, postData) => {
  let figureIndex = 0;
  const figure = document.querySelector("section.highlight-post figure");

  figure ? (figure.style.transition = "all 0.4s ease-in-out") : null;

  if (currentIndex === postData.length - 1) {
    if (figure) {
      figure.style.transform = `translateX(${(figureValue = 0)}vw)`;
      figureIndex = 0;
    }
  } else {
    figureValue = 0;
    for (let i = 0; i <= currentIndex; i++) {
      if (figure) {
        figure.style.transform = `translateX(${(figureValue =
          figureValue - 100)}vw)`;

        figureIndex++;
      }
    }
  }
  setCurrentIndex(figureIndex);
};

const decrementIndex = (currentIndex, setCurrentIndex, postData) => {
  let figureIndex = currentIndex;
  const figure = document.querySelector("section.highlight-post figure");
  figure.style.transition = "all 0.4s ease-in-out";
  if (currentIndex === 0) {
    figure
      ? (figure.style.transform = `translateX(${(figureValue =
          -(postData.length - 1) * 100)}vw)`)
      : null;
    figureIndex = postData.length - 1;
  } else {
    figure
      ? (figure.style.transform = `translateX(${(figureValue =
          figureValue + 100)}vw)`)
      : null;

    figureIndex--;
  }
  setCurrentIndex(figureIndex);
};

const bulletClick = (index, setCurrentIndex) => {
  const figure = document.querySelector("section.highlight-post figure");
  figure.style.transition = "all 0.4s ease-in-out";
  setCurrentIndex(index);
  figure
    ? (figure.style.transform = `translateX(${(figureValue = -index * 100)}vw)`)
    : null;
};

export { TimerincrementIndex, incrementIndex, decrementIndex, bulletClick };
