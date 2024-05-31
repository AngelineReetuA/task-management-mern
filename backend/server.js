const express = require("express");
const app = express();
const port = 3000;
const {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} = require("firebase/auth");
const { auth } = require("./config/firebase.config");

app.use(express.json());

app.post("/register", async (req, res) => {
  const user = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  };

  try {
    await createUserWithEmailAndPassword(auth, user.email, user.password).then(
      async (userCred) => {
        const user = userCred.user;
        await sendEmailVerification(user);
      }
    );
    return res.sendStatus(200);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
});

app.listen(port, () => {
  console.log(`TSM listening on port ${port}`);
});
