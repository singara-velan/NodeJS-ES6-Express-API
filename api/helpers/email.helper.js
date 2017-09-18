import nodemailer from 'nodemailer';
import smtpTransport from 'nodemailer-smtp-transport';
import appConstants from '../appConstants';

// smtp configuration
const mailTransport = nodemailer.createTransport(appConstants.emailConfig);

const sendEmail = (toEmail, mailSubject, mailBody) => {
    const mailOptions = {
        from: appConstants.emailConfig.auth.user,
        to: toEmail,
        subject: mailSubject,
        text: mailBody,
    };

    mailTransport.sendMail(mailOptions, (error, response) => {
        mailTransport.close();
        if (error) {
           console.log(error);
           return error;
        }
        console.log('Message sent: %s', info.messageId);
    });
};

export default {
    sendEmail,
};