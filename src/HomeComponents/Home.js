import PostSlider from "./PostSlider";
import RecentPosts from "./RecentPosts";
import { postData, RecentPostData } from "@/store/postsContext";
import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    localStorage.removeItem("MY_APP_index");
  }, []);
  return (
    <section id="home">
      <PostSlider postData={postData} />
      <RecentPosts postData={RecentPostData} />
    </section>
  );
}
