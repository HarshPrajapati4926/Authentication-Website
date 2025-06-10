import { MailtrapTransport } from "mailtrap";
import Nodemailer from "nodemailer";



const TOKEN = "bc8f8a07d82719bfa00b0907cf7148a5";

const transport = Nodemailer.createTransport(
  MailtrapTransport({
    token: TOKEN,
    testInboxId: 3790792,
  })
);

const sender = {
  address: "hello@example.com",
  name: "Mailtrap Test",
};
const recipients = [
  "harshprajapati4926@gmail.com",
];

transport
  .sendMail({
    from: sender,
    to: recipients,
    subject: "You are awesome!",
    text: "Congrats for sending test email with Mailtrap!",
    category: "Integration Test",
    sandbox: true
  })
.then(response => console.log(response))
.catch(error => console.error("Detailed error:", error));