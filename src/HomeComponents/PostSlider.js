import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import postss from "@/store/data/postFile.json";
import {
  TimerincrementIndex,
  incrementIndex,
  decrementIndex,
  bulletClick,
} from "@/store/functions/postSliderFunctions";

export default function PostSlider({ postData }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries, opts) => {
      entries.forEach((entry) => {
        if (timeRef.current) {
          clearTimeout(timeRef.current);
        }

        timeRef.current = setTimeout(() => {
          setCurrentIndex(0);
          TimerincrementIndex(currentIndex, setCurrentIndex, postData);
        }, 5000);
        return () => clearTimeout(timeRef.current);
      });
    });

    observer.observe(document.querySelector("section.highlight-post"));

    //////////////////////////////////////////////////////////////////////////

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
              <Link
                href={{
                  pathname: `/Posts/${post.id}`,
                  query: postss,
                }}
              >
                <img className="featured-image" src={post.image} />
              </Link>

              <div className="figure-points">
                {postData.map((post, postIndex) => (
                  <div
                    onClick={() => {
                      bulletClick(postIndex, setCurrentIndex);
                    }}
                    className="bullets"
                    key={postIndex}
                  >
                    •
                  </div>
                ))}
              </div>
              <figcaption className="featured">
                <Link
                  href={{
                    pathname: `/Posts/${post.id}`,
                    query: postss,
                  }}
                >
                  <h3>Featured</h3>
                  <h1 className="featured-title">{post.title}</h1>
                  <p className="featured-summary">{post.summary}</p>
                </Link>
              </figcaption>
            </div>
          );
        })}
      </figure>
      <div className="arrow-container">
        <svg
          onClick={() =>
            decrementIndex(currentIndex, setCurrentIndex, postData)
          }
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
          onClick={() =>
            incrementIndex(currentIndex, setCurrentIndex, postData)
          }
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
