var nodemailer = require('nodemailer');
var config = require('../config-mail.js');

var str = {
    Error:"Erreur dans l'application Wibes : ",
};

var mail = {
        send: function (subject, error) {
            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: config.user,
                    pass: config.pass
                }
            });

            var mailOptions = {
                from: config.user,
                to: config.user,
                subject: subject,
                text: subject+error
            };

            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log(error);
                } else {
                    console.log('Email sent: ' + info.response);
                }
            });
    }
};

module.exports = mail;