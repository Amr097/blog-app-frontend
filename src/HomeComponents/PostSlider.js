import { useEffect, useState, useRef } from "react";

export default function PostSlider({ postData }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeRef = useRef(null);

  const incrementIndex = () => {
    setCurrentIndex((prev) => {
      const newIndex = prev === postData.length - 1 ? 0 : prev + 1;
      return newIndex;
    });
  };
  const decrementIndex = () => {
    setCurrentIndex((prev) => {
      const newIndex = prev === 0 ? postData.length - 1 : prev - 1;
      return newIndex;
    });
  };

  const ChangeIndex = (bulletIndex) => {
    setCurrentIndex(bulletIndex);
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries, opts) => {
      entries.forEach((entry) => {
        if (timeRef.current) {
          clearTimeout(timeRef.current);
        }
        timeRef.current = setTimeout(() => {
          incrementIndex();
        }, 5000);
        return () => clearTimeout(timeRef.current);
      });
    });

    observer.observe(document.querySelector("section.highlight-post"));

    ////////////////////////////////////////////////////////////////////////

    const bullets = document.querySelectorAll(".bullets");

    bullets.forEach((bullet, index) => {
      if (index === currentIndex) {
        bullets[index].classList.add("active");
      } else {
        bullets[index].classList.remove("active");
      }
    });
  }, [currentIndex, incrementIndex]);

  return (
    <section className="highlight-post">
      <figure>
        <div className="image-container">
          <img src={postData[currentIndex].image} />
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
          <div className="figure-points">
            {postData.map((post, postIndex) => (
              <div
                className="bullets"
                key={postIndex}
                onClick={() => {
                  ChangeIndex(postIndex);
                }}
              >
                •
              </div>
            ))}
          </div>
        </div>
        <figcaption className="featured">
          <h3>Featured</h3>
          <h1 className="featured-title">{postData[currentIndex].title}</h1>
          <p className="featured-summary">{postData[currentIndex].summary}</p>
        </figcaption>
      </figure>
    </section>
  );
}
