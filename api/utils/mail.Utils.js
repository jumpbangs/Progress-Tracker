//https://ethereal.email/

const nodemailer = require("nodemailer");

class Mailer {

    async resetUserPassEmail(userEmail, newPass){


        let transport = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port : 587,
            secure: false,

            auth:{
                user: 'angelica.boehm68@ethereal.email',
                pass: 'DaGnxQZvRfZsQ4NQgY'
            }
        });


         transport.sendMail({
            from:'Progresstracker.io',
            to: userEmail,
            subject: 'Change of Password',
            html:'<h2>New Password</h2><br><p>This is a auto generated email, do not reply. Your new password is '+ newPass +'</p>'

        });

    }

}

module.exports = new Mailer();