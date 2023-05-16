import { format } from "date-fns";
import Link from "next/link";
import { useState } from "react";

export default function RecentPosts({ postData }) {
  const [renderIndex, setRenderIndex] = useState({ start: 0, end: 5 });
  // const [wdigetIndex, setWidgetIndex] = useState([]);

  // const widgetIncrement = () => {
  //   setRenderIndex((prev) => {
  //     return {
  //       start: prev.end === postData.length - 1 ? prev.start : prev.start + 6,
  //       end: prev.end === postData.length - 1 ? prev.end : prev.end + 6,
  //     };
  //   });
  // };
  // const widgetDecrement = () => {
  //   setRenderIndex((prev) => {
  //     return prev.start === 0
  //       ? {
  //           start: prev.start,
  //           end: prev.end,
  //         }
  //       : {
  //           start: prev.start - 6,
  //           end: prev.end - 6,
  //         };
  //     console.log(renderIndex.start);
  //   });
  // };
  return (
    <section id="recent-posts">
      <h3 className="recent-section-title">Recent Owl Posts</h3>
      <div className="recent-post-container">
        {postData.length > 0
          ? postData.map(
              (post, index) =>
                index >= renderIndex.start &&
                index <= renderIndex.end && (
                  <div key={index} className="recent-post">
                    <div className="recent-image">
                      <Link
                        href={{
                          pathname: `/Posts/${post.image.slice(8)}`,
                          query: postData,
                        }}
                      >
                        <img src={post.image} alt="" />
                      </Link>
                    </div>

                    <article className="recent-content">
                      <Link
                        href={{
                          pathname: `/Posts/${post.image.slice(8)}`,
                          query: postData,
                        }}
                      >
                        <h2>{post.title}</h2>
                      </Link>

                      <p className="recent-summary">{post.summary}</p>
                      <p className="recent-info">
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
      </div>
      {/* <div>
        <a className="widget" onClick={widgetIncrement}>
          &gt;
        </a>
        <a className="widget" onClick={widgetDecrement}>
          back
        </a>
      </div> */}
      <div className="btn-container">
        <button>
          <a href="/Posts/AllPosts">View More</a>
        </button>
      </div>
    </section>
  );
}
