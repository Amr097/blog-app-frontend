import { format } from "date-fns";
import { useState, useEffect } from "react";
import Link from "next/link";
import { RecentPostData } from "@/store/data/postsContext";
import Header from "@/HomeComponents/Header";
import Login from "@/HomeComponents/HeaderComponents/AccessBoard";
import {
  incrementIndex,
  DecrementIndex,
} from "@/store/functions/AllPostsFunctions";

export default function AllPosts() {
  // const [renderIndex, setRenderIndex] = useState({ start: 0, end: 9 });
  // const [pageIndex, setPageIndex] = useState(1);
  const [isOpen, setIsOpen] = useState(false);

  // useEffect(() => {
  //   const index = window.localStorage.getItem("MY_APP_index");
  //   setPageIndex(parseInt(index) ? parseInt(index) : 1);

  //   setRenderIndex((prev) => {
  //     for (let i = 1; i < index; i++) {
  //       prev.start = prev.start + 9;
  //       prev.end = prev.end + 9;
  //     }

  //     return { start: prev.start, end: prev.end };
  //   });
  // }, []);

  return (
    <>
      <Header link="/" isOpen={isOpen} setIsOpen={setIsOpen} />
      <Login />
      <section id="all-posts">
        {RecentPostData.length > 0
          ? RecentPostData.map((post, index) => (
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
            ))
          : null}
        {/* <div className="page-index">
          <svg
            onClick={() =>
              DecrementIndex(
                pageIndex,
                setRenderIndex,
                setPageIndex,
                RecentPostData
              )
            }
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
            {pageIndex}/{Math.ceil(RecentPostData.length / 9)}
          </p>
          <svg
            onClick={(event) =>
              incrementIndex(
                pageIndex,
                setRenderIndex,
                setPageIndex,
                RecentPostData,
                event
              )
            }
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
        </div> */}
      </section>
    </>
  );
}
