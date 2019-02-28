const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: 'f4aaadecab@gmail.com',
      pass: 'P@@@ssw0rd' // generated ethereal password
    }
})

// - Paris FR-SD3:
//   - Server: smtp.sd3.gpaas.net
//   - Port: 25

const sendEmail = (from, to, subject, text, html) => {

  nodemailer.createTestAccount((err, account) => {
      // setup email data with unicode symbols
      let mailOptions = {
          from: '"Fred Foo 👻" <foo@example.com>', // sender address
          to: 'bfdlmdr@gmail.com, bfdlmdr@gmail.com', // list of receivers
          subject: 'Hello ✔', // Subject line
          text: 'Hello world?', // plain text body
          html: '<b>Hello world?</b>' // html body
      }
      // send mail with defined transport object
      transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
              return console.log(error);
          }
          console.log('Message sent: %s', info.messageId);
          // Preview only available when sending through an Ethereal account
          console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

      })
  })
}

module.exports = sendEmail
