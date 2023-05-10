import PostSlider from "./PostSlider";
import RecentPosts from "./RecentPosts";
import postData from "@/postsContext";

export default function HomePage() {
  return (
    <section id="home">
      <PostSlider postData={postData} />
      <RecentPosts postData={postData} />
    </section>
  );
}
