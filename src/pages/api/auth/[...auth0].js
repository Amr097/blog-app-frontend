import { handleAuth } from "@auth0/nextjs-auth0";
import { MongoClient } from "mongodb";

export default handleAuth();
//async function handler(req, res) {
//   if (req.method === "POST") {
//     const username = req.body.username;
//     const password = req.body.password;
//     const type = req.body.type;
//     const userCredentials = {
//       type: type,
//       username: username,
//       password: password,
//     };

//     const client = await MongoClient.connect(
//       "mongodb+srv://amruser1:PHe4pfoItm98aaVW@cluster0.7q0owwy.mongodb.net/?retryWrites=true&w=majority"
//     );
//     const db = client.db();
//     userCredentials.type === "email-signup"
//       ? await db.collection("myUsers").insertOne({
//           username: userCredentials.username,
//           password: userCredentials.password,
//         })
//       : null;
//     client.close();
//   }
//   res.status(200).json({ name: "John Doe" });
// }
