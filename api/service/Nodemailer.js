const nodemailer = require('nodemailer')

exports.sendMail = async (receiverData)  => {

    return new Promise((resolve, reject) => {

        let transport = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
            user: process.env.NODEMAILER_UNAME,
            pass: process.env.NODEMAILER_PWD
            }
        });
    
        const mailOptions = {
            from: process.env.NODEMAILER_UNAME, // Sender address
            to: receiverData.to, // List of recipients
            subject: 'Node Mailer', // Subject line
            text: (receiverData.text || 'Hola! Amigos, Bienvenidos, APPLIKATION STARTET'), // Plain text body
       };
       console.error('mailOptions', mailOptions);
       
        transport.sendMail(mailOptions, function (err, info) {
            if (err) {
                console.error("error is ", error);
               reject(false); // or use rejcet(false) but then you will have to handle errors
            } 
           else {
               console.error('Email sent: ', info);
               resolve(true);
            }
        })

    })

}