import { useEffect, useState, useRef } from "react";

let figureValue;

export default function PostSlider({ postData }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeRef = useRef(null);

  const TimerincrementIndex = () => {
    let figureIndex = 0;
    const figure = document.querySelector("section.highlight-post figure");
    figure ? (figure.style.transition = "none") : null;
    if (currentIndex === postData.length - 1) {
      return;
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

  const incrementIndex = () => {
    let figureIndex = 0;
    const figure = document.querySelector("section.highlight-post figure");
    figure ? (figure.style.transition = "all 0.4s ease-in-out") : null;
    if (currentIndex === postData.length - 1) {
      return;
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
  const decrementIndex = () => {
    const figure = document.querySelector("section.highlight-post figure");
    figure.style.transition = "all 0.4s ease-in-out";
    if (currentIndex === 0) {
      return;
    } else {
      let figureIndex = currentIndex;

      figure
        ? (figure.style.transform = `translateX(${(figureValue =
            figureValue + 100)}vw)`)
        : null;
      figureIndex--;

      setCurrentIndex(figureIndex);
    }
  };

  const bulletClick = (index) => {
    const figure = document.querySelector("section.highlight-post figure");
    figure.style.transition = "all 0.4s ease-in-out";
    setCurrentIndex(index);
    figure
      ? (figure.style.transform = `translateX(${(figureValue =
          -index * 100)}vw)`)
      : null;
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries, opts) => {
      entries.forEach((entry) => {
        if (timeRef.current) {
          clearTimeout(timeRef.current);
        }
        if (currentIndex === postData.length - 1) {
          return;
        } else {
          timeRef.current = setTimeout(() => {
            setCurrentIndex(0);
            TimerincrementIndex();
          }, 5000);
          return () => clearTimeout(timeRef.current);
        }
      });
    });

    observer.observe(document.querySelector("section.highlight-post"));

    //   ////////////////////////////////////////////////////////////////////////

    const bullets = document.querySelectorAll(".bullets");
    bullets.forEach((bullet, index) => {
      if (
        index === currentIndex ||
        index === currentIndex * postData.length + currentIndex
      ) {
        bullet.classList.add("active");
      } else if (index !== currentIndex) {
        bullets[index].classList.remove("active");
      }
    });
  }, [currentIndex, incrementIndex, decrementIndex]);

  return (
    <section className="highlight-post">
      <figure>
        {postData.map((post, index) => {
          return (
            <div className="image-container" key={index}>
              <img className="featured-image" src={post.image} />

              <div className="figure-points">
                {postData.map((post, postIndex) => (
                  <div
                    onClick={() => {
                      bulletClick(postIndex);
                    }}
                    className="bullets"
                    key={postIndex}
                  >
                    •
                  </div>
                ))}
              </div>
              <figcaption className="featured">
                <h3>Featured</h3>
                <h1 className="featured-title">{post.title}</h1>
                <p className="featured-summary">{post.summary}</p>
              </figcaption>
            </div>
          );
        })}
      </figure>
      <div className="arrow-container">
        <svg
          onClick={decrementIndex}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="arrow left"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          />
        </svg>

        <svg
          onClick={incrementIndex}
          className="arrow right"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          />
        </svg>
      </div>
    </section>
  );
}
