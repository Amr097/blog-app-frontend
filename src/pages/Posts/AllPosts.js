import { format } from "date-fns";
import { useState, useEffect } from "react";
import Link from "next/link";
import { RecentPostData } from "@/store/postsContext";
import Header from "@/HomeComponents/Header";
import Login from "@/HomeComponents/HeaderComponents/Login";

export default function AllPosts() {
  const [renderIndex, setRenderIndex] = useState({ start: 0, end: 20 });
  const [pageIndex, setPageIndex] = useState(1);

  useEffect(() => {
    const index = window.localStorage.getItem("MY_APP_index");
    setPageIndex(parseInt(index) ? parseInt(index) : 1);

    setRenderIndex((prev) => {
      for (let i = 1; i < index; i++) {
        prev.start = prev.start + 20;
        prev.end = prev.end + 20;
      }

      return { start: prev.start, end: prev.end };
    });
  }, []);

  const incrementIndex = () => {
    if (pageIndex < Math.ceil(RecentPostData.length / 20)) {
      setRenderIndex((prev) => {
        return {
          start: prev.start + 20,
          end: prev.end + 20,
        };
      });
      setPageIndex((prev) => {
        window.localStorage.setItem("MY_APP_index", prev + 1);
        return +prev + 1;
      });
    }
  };
  const DecrementIndex = () => {
    if (pageIndex > 1) {
      setRenderIndex((prev) => {
        return {
          start: prev.start - 20,
          end: prev.end - 20,
        };
      });
      setPageIndex((prev) => {
        window.localStorage.setItem("MY_APP_index", prev - 1);
        return prev - 1;
      });
    }
  };
  return (
    <>
      <Header link="/" />
      <Login />
      <section id="all-posts">
        {RecentPostData.length > 0
          ? RecentPostData.map(
              (post, index) =>
                index >= renderIndex.start &&
                index <= renderIndex.end && (
                  <div key={index} className="recent-post-all">
                    <div className="recent-image-all">
                      <Link
                        href={{
                          pathname: `/Posts/${post.image.slice(8)}`,
                          query: RecentPostData,
                        }}
                      >
                        <img src={post.image} alt="" />
                      </Link>
                    </div>

                    <article className="recent-content-all">
                      <div className="top-container">
                        <figure className="all-posts-author">
                          <img className="author-image" src={post.image} />
                          <figcaption>
                            {" "}
                            <a className="recent-author">Hedwig Potter</a>{" "}
                          </figcaption>
                        </figure>

                        <h2>{post.title}</h2>

                        <p className="recent-summary-all">{post.summary}</p>
                      </div>
                      <p className="recent-info-all">
                        {" "}
                        <time suppressHydrationWarning>
                          {format(new Date(), "MMM d, yyy HH:mm")}
                        </time>
                      </p>
                    </article>
                  </div>
                )
            )
          : null}
        <div className="page-index">
          <svg
            onClick={DecrementIndex}
            className="page-index-arrow"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
            />
          </svg>

          <p>
            {pageIndex}/{Math.ceil(RecentPostData.length / 20)}
          </p>
          <svg
            onClick={incrementIndex}
            className="page-index-arrow"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
      </section>
    </>
  );
}
