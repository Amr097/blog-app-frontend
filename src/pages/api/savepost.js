import fs from "fs";
import path from "path";

function handler(req, res) {
  if (req.method === "POST") {
    const title = req.body.post.title;
    const summary = req.body.post.summary;
    const content = req.body.content;
    const image = req.body.image;
    const id = req.body.id;
    const post = {
      title: title,
      summary: summary,
      content: content,
      image: image,
      id: id,
    };
    const filePath = path.join(
      process.cwd(),
      "src",
      "store",
      "data",
      "postFile.json"
    );
    const fileData = fs.readFileSync(filePath);
    const data = JSON.parse(fileData);
    data.push(post);
    fs.writeFileSync(filePath, JSON.stringify(data));
    res.json("ok");
  }
}

export default handler;
