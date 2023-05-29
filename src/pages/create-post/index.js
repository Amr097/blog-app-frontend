import { useRef, useState } from "react";
import Header from "@/HomeComponents/Header";
import { Editor, onSubmit } from "@/store/functions/CreatePostFunctions";
import "react-quill/dist/quill.snow.css";
import { useRouter } from "next/router";

export default function CreatePost() {
  const [post, setPost] = useState({ title: "", summary: "" });
  const [content, setContent] = useState("");
  const [files, setFiles] = useState({});
  const [redirect, setRedirect] = useState(false);

  const inputRef = useRef(null);
  const router = useRouter();
  const postData = (event) => {
    const name = event.target.name;
    //console.log(name)
    const value = event.target.value;
    setPost((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };

  const postFiles = (event) => {
    setFiles(event.target.files[0]);
  };
  return (
    <section id="form">
      <form
        className="post"
        onSubmit={(event) => onSubmit(event, post, content, files, router)}
      >
        <div className="publish">
          <button id="post-btn" type="submit">
            Publish
          </button>
          <a href="/#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
          </a>
        </div>
        <div>
          <input
            className="text"
            onChange={postData}
            type="text"
            name="title"
            placeholder="Your Blog title"
            value={post.title}
            required
          />

          <input
            className="text"
            onChange={postData}
            type="text"
            name="summary"
            placeholder="Summary"
            maxLength="150"
            value={post.summary}
          />
          <input
            className="file"
            onChange={postFiles}
            ref={inputRef}
            type="file"
            name="image"
            required
          />
          <Editor value={content} onChange={setContent} />
        </div>
      </form>
    </section>
  );
}
