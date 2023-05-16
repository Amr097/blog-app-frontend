import { format } from "date-fns";
import { useState } from "react";
import Link from "next/link";
import { RecentPostData } from "@/postsContext";
import Header from "@/HomeComponents/Header";

export default function AllPosts() {
  const [renderIndex, setRenderIndex] = useState({ start: 0, end: 20 });
  return (
    <>
      <Header link="/" />
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
                        <Link
                          href={{
                            pathname: `/Posts/${post.image.slice(8)}`,
                            query: RecentPostData,
                          }}
                        >
                          <h2>{post.title}</h2>
                        </Link>

                        <p className="recent-summary-all">{post.summary}</p>
                      </div>
                      <p className="recent-info-all">
                        {" "}
                        <a className="recent-author">By Hedwig Potter</a>{" "}
                        <time suppressHydrationWarning>
                          {format(new Date(), "MMM d, yyy HH:mm")}
                        </time>
                      </p>
                    </article>
                  </div>
                )
            )
          : null}
      </section>
    </>
  );
}
