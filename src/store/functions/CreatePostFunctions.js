import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import uploadToS3 from "./uploadToS3";

export function Editor({ value, onChange }) {
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];
  return (
    <ReactQuill
      onChange={onChange}
      name="content"
      value={value}
      modules={modules}
      formats={formats}
    />
  );
}

export async function onSubmit(event, post, content, files, router) {
  event.preventDefault();

  const image = await uploadToS3("", "", files);
  const parts = image.split("/");
  const name = parts[parts.length - 1].split(".");
  const id = name[0];
  const reqBody = {
    post: post,
    content: content,
    image: image,
    id: id,
  };
  fetch("/api/savepost", {
    method: "POST",
    body: JSON.stringify(reqBody),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => data && router.push("/"));
}
