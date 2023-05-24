import fs from "fs";
import path from "path";

function handler(req, res) {
  if (req.method === "POST") {
    console.log(req.body);
    const title = req.body.post.title;
    const summary = req.body.post.summary;
    const content = req.body.content;
    const image = req.body.image;
    const post = {
      title: title,
      summary: summary,
      content: content,
      image: image,
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
