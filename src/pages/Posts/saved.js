import { format } from "date-fns";
import { useState } from "react";
import Link from "next/link";

import Header from "@/HomeComponents/Header";
import Login from "@/HomeComponents/HeaderComponents/AccessBoard";

import postss from "@/store/data/SavedPosts.json";

export default function SavedPosts() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Header link="/" isOpen={isOpen} setIsOpen={setIsOpen} />
      <Login />
      <section id="all-posts">
        {postss.map((post, index) => (
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
                  <img className="author-image" src="/images/owl (1).png" />
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
        ))}
      </section>
    </>
  );
}
