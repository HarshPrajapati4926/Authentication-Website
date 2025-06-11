import { MailtrapClient } from "mailtrap"

const TOKEN = "d46d59093be20db60153b65014ecfd5b";

export const mailtrapClient = new MailtrapClient({
  token: TOKEN,
});

export const sender = {
  email: "hello@demomailtrap.co",
  name: "Mailtrap Test",
};
const recipients = [
  {
    email: "harshprajapati4926@gmail.com",
  }
];

