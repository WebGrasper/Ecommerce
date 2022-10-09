const nodeMailer = require('nodemailer');

const SendEmail = async (options) =>{
    const transportor = nodeMailer.createTransport({
        service:"gmail",
        auth:{
            user:process.env.SMPT_MAIl,
            password:process.env,SMPT_PASSWORD,
        },
    });

    const mailOptions = {
        from:"",
        to: options.email,
        subject: options.subject,
        text: options.message
    };
};

module.exports = sendEmail;