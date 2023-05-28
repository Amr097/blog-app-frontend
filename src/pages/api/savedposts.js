import fs from "fs";
import path from "path";

function handler(req, res) {
  if (req.method === "POST") {
    const id = req.body;
    console.log(req.body);
    const filePath = path.join(
      process.cwd(),
      "src",
      "store",
      "data",
      "postFile.json"
    );
    const fileDest = path.join(
      process.cwd(),
      "src",
      "store",
      "data",
      "SavedPosts.json"
    );
    const fileData = fs.readFileSync(filePath);
    const savedFileData = fs.readFileSync(fileDest);
    const savedData = JSON.parse(savedFileData);
    const data = JSON.parse(fileData);

    data.forEach((element) => {
      if (element.id === id) {
        savedData.push(element);
        fs.writeFileSync(fileDest, JSON.stringify(savedData));
      }
    });

    res.json("ok");
  }
}

export default handler;
