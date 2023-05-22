import { useRef, useState } from "react";

import { Editor } from "@/store/functions/CreatePostFunctions";
import "react-quill/dist/quill.snow.css";

export default function CreatePost() {
  const [post, setPost] = useState({ title: "", summary: "" });
  const [content, setContent] = useState("");
  const [files, setFiles] = useState({});
  const [redirect, setRedirect] = useState(false);

  const inputRef = useRef(null);

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
    <section>
      <form className="post">
        <input
          onChange={postData}
          type="text"
          name="title"
          placeholder="Your Blog title"
          value={post.title}
          required
        />

        <input
          onChange={postData}
          type="text"
          name="summary"
          placeholder="Summary"
          maxLength="150"
          value={post.summary}
        />

        <input
          onChange={postFiles}
          ref={inputRef}
          type="file"
          name="image"
          required
        />

        <Editor value={content} onChange={setContent} />
        <button id="post-btn" type="submit">
          Publish
        </button>
      </form>
    </section>
  );
}
