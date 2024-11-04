const nodemailer = require('nodemailer');

exports.sendMail = async (options) => {
  // create the transporter
  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT, // defaults to 587 if is secure is false or 465 if true
    secure: true,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });
  const mailOpts = {
    from: 'me3267965@gmail.com',
    to: options.to,
    subject: options.subject,
    text: options.text,
  };

  await transporter.sendMail(mailOpts);
};
