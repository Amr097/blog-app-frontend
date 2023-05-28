import fs from "fs";
import path from "path";
function handler(req, res) {
  if (req.method === "POST") {
    const id = req.body;
    console.log(req.body);
    const fileDest = path.join(
      process.cwd(),
      "src",
      "store",
      "data",
      "SavedPosts.json"
    );
    const savedFileData = fs.readFileSync(fileDest);
    const savedData = JSON.parse(savedFileData);

    savedData.forEach((element, index) => {
      if (element.id === id) {
        savedData.splice(index, 1);

        fs.writeFileSync(fileDest, JSON.stringify(savedData));
      }
    });

    res.json("ok");
  }
}

export default handler;
