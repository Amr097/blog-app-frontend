import fs from "fs";
import path from "path";

function handler(req, res) {
  if (req.method === "POST") {
    console.log(req.body);
    const title = req.body.post.title;
    const summary = req.body.post.summary;
    const content = req.body.content;
    const post = {
      title: title,
      summary: summary,
      content: content,
    };
    const filePath = path.join(
      process.cwd(),
      "src",
      "store",
      "data",
      "postFile"
    );
    const fileData = fs.readFileSync(filePath);
    const data = JSON.parse(fileData);
    data.push(post);
    fs.writeFileSync(filePath, JSON.stringify(data));
  }
}

export default handler;
