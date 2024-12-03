const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
const fs = require('fs');
const path = require('path');

require("dotenv").config();
app.use(express.json());

const subject = `🤝 Software Development Collaboration 🤝`;

const country = `Sweden`
const name =  process.env.USER_NAME
const sendData = new Date().toISOString();
const text = `😊 Hello! 😊

My name is ${name}, a 28-year-old software developer based in Japan 🌏. I lead a team of seven developers, and we are excited to expand our operations to the ${country}. to tap into its vibrant software development market.

As we venture into the U.S and U.K., we foresee challenges such as managing time zone differences ⏰ and overcoming language barriers 🗣️. To address these effectively, we are actively seeking collaboration with ${country}-based developers or agencies that can communicate fluently with U.S or U.K. clients in English.
Our goal is not only to bridge the cultural gaps but also to boost both our incomes 💰 substantially. We believe that together we can shape future technologies and achieve a worldwide impact.

If this opportunity intrigues you, please don't hesitate to contact me. You can reach me via email, or share your Discord ID or WhatsApp number, and I will get in touch. Let’s arrange a virtual meeting on Google Meet to explore this potential partnership further.

Thank you for considering this opportunity. I am eager to hear from you and possibly start an exciting journey together.

Best regards,

${name} ✨

Contact: ${process.env.EMAIL_USER}

${sendData}

`

const toMails = [
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
];

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

async function sendMailer() {

  const emailList = []


  for (let email of toMails) {
    if (!email) continue; // Skip empty or invalid email
    try {
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: subject,
        text: text,
      };

      await transporter.sendMail(mailOptions);

      console.log("Success: ", email);

      emailList.push(email);
    } catch (error) {
      console.error(`Failed to send email to ${email}: ${error}`);
    }
  }
  fs.appendFileSync(path.join(__dirname, 'metadata.log'), `${emailList.join(', ')}\n`, 'utf8');
}

// Server setup
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
  sendMailer();
});