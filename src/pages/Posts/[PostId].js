import { useRouter } from "next/router";
import postData from "@/postsContext";
import Header from "@/HomeComponents/Header";

export default function SinglePost() {
  const router = useRouter();
  console.log(postData);
  return (
    <>
      <Header />
      <div></div>
    </>
  );
}
