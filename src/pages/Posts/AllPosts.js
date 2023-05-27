import { format } from "date-fns";
import { useState, useEffect } from "react";
import Link from "next/link";

import Header from "@/HomeComponents/Header";
import Login from "@/HomeComponents/HeaderComponents/AccessBoard";
import {
  incrementIndex,
  DecrementIndex,
} from "@/store/functions/AllPostsFunctions";
import postss from "@/store/data/postFile.json";

export default function AllPosts() {
  const [renderIndex, setRenderIndex] = useState({ start: 0, end: 9 });
  const [CurrentPagePosts, setCurrentPagePosts] = useState([]);
  const [pageIndex, setPageIndex] = useState(1);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const index = window.localStorage.getItem("MY_APP_index");
    setPageIndex(parseInt(index) ? parseInt(index) : 1);

    setRenderIndex((prev) => {
      for (let i = 1; i < index; i++) {
        prev.start = prev.start + 9;
        prev.end = prev.end + 9;
      }

      return { start: prev.start, end: prev.end };
    });

    console.log("hello");
  }, []);

  useEffect(() => {
    setCurrentPagePosts(postss.slice(renderIndex.start, renderIndex.end));
    //console.log("Works");
  }, [renderIndex]);

  return (
    <>
      <Header link="/" isOpen={isOpen} setIsOpen={setIsOpen} />
      <Login />
      <section id="all-posts">
        {postss.length > 0
          ? CurrentPagePosts.map((post, index) => (
              <div key={index} className="recent-post-all">
                <div className="recent-image-all">
                  <Link
                    href={{
                      pathname: `/Posts/${post.id}`,
                      query: postss,
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
        <div className="page-index">
          <i
            onClick={() =>
              DecrementIndex(
                pageIndex,
                setRenderIndex,
                setPageIndex,
                postss,
                setCurrentPagePosts,
                renderIndex
              )
            }
            class="gg-arrow-left-r"
          ></i>
          <p>
            {pageIndex}/{Math.ceil(postss.length / 9)}
          </p>

          <i
            onClick={(event) =>
              incrementIndex(
                pageIndex,
                setRenderIndex,
                setPageIndex,
                postss,
                event,
                setCurrentPagePosts,
                renderIndex
              )
            }
            class="gg-arrow-right-r"
          ></i>
        </div>
      </section>
    </>
  );
}
