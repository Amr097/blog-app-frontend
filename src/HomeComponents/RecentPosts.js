import { format } from "date-fns";
import Link from "next/link";

export default function RecentPosts({ postData }) {
  return (
    <section id="recent-posts">
      <h3 className="recent-section-title">Recent Owl Posts</h3>
      <div className="recent-post-container">
        {postData.length > 0
          ? postData.map((post, index) => (
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
            ))
          : null}
      </div>
    </section>
  );
}
