// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  if (req.method === "POST") {
    const username = req.body.username;
    const password = req.body.password;
    const type = req.body.type;
    const userCredentials = {
      type: type,
      username: username,
      password: password,
    };
    console.log(userCredentials);
  }
  res.status(200).json({ name: "John Doe" });
}
