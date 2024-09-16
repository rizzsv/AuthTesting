import { MailtrapClient } from "mailtrap"; // Ganti require dengan import
import dotenv from "dotenv";
dotenv.config();


const TOKEN = process.env.MAILRAP_TOKEN;
const ENDPOINT = process.env.MAILRAP_ENDPOINT;

const client = new MailtrapClient({
  token: TOKEN,
});

const sender = {    
  email: "mailtrap@demomailtrap.com",
  name: "Domz Valeant",
};
const recipients = [
  {
    email: "rizq.syafriano@gmail.com",
  }
];

client
  .send({
    from: sender,
    to: recipients,
    subject: "You are awesome!",
    text: "Congrats for sending test email with Mailtrap!",
    category: "Integration Test",
  })
  .then(console.log, console.error);
// console.log(Error) // Hapus baris ini