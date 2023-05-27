import PostSlider from "./PostSlider";
import RecentPosts from "./RecentPosts";
import { postData, RecentPostData } from "@/store/data/postsContext";
import { useEffect } from "react";
import Footer from "./Footer";

export default function HomePage({ setIsOpen }) {
  useEffect(() => {
    localStorage.removeItem("MY_APP_index");
  }, []);
  return (
    <section
      id="home"
      onClick={() => {
        const dropdown = document.querySelector(".dropdown-content");
        dropdown.classList.remove("active");
        setIsOpen(false);
      }}
    >
      <PostSlider postData={postData} />
      <RecentPosts postData={RecentPostData} />
      <Footer />
    </section>
  );
}
