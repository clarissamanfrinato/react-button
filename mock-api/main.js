const express = require("express");
const cors = require("cors");
const sgMail = require("@sendgrid/mail");

async function main() {
  const app = express();
  app.use(cors());
  app.use(express.json());

  app.post("/", (req, res) => {
    console.log(req.body);

    sgMail
      .setApiKey
      //inserir chave aqui //
      ();

    const msg = {
      to: ["clari277@gmail.com", "clarissa.manfrinato@usp.br"], // Change to your recipient
      from: "clarissa.rosa@virgo.inc", // Change to your verified sender
      subject: "Teste de email",
      text: "and easy to do anywhere, even with Node.js",
      html: `${req.body}`,
    };

    sgMail
      .send(msg)
      .then(() => {
        console.log("Email sent");
      })
      .catch((error) => {
        console.error(error);
      });
  });

  app.listen(3002, () => {
    console.log("app running on 3002");
  });
}

main();
