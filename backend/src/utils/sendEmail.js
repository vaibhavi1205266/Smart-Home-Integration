import nodemailer from "nodemailer";

export const sendEmail = async ({ email, subject, message }) => {
  const transporter = nodemailer.createTransport({
    service: "gmail", // You can also use "hotmail", "yahoo", etc.
    auth: {
      user: process.env.EMAIL_USER,  // your email address
      pass: process.env.EMAIL_PASS   // your email app password or 2FA token
    }
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: subject,
    text: message
  };

  await transporter.sendMail(mailOptions);
};
