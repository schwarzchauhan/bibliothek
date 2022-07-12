const nodemailer = require('nodemailer')


let transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.NODEMAILER_UNAME,
      pass: process.env.NODEMAILER_PWD
    }
 });

exports.sendMail = async (receiverData)  => {
    try {

        const mailOptions = {
            from: process.env.NODEMAILER_UNAME, // Sender address
            to: receiverData.to, // List of recipients
            subject: 'Node Mailer', // Subject line
            text: (receiverData.text || 'Hola! Amigos, Bienvenidos, APPLIKATION STARTET'), // Plain text body
       };
       
        const info = await transport.sendMail(mailOptions)
        console.error('info', info);

        return info;
    } catch (error) {
        throw error;
    }
}