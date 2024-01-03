const nodemailer = require('nodemailer');
const Mailgen = require('mailgen');
require('dotenv').config()


export default async function handler(req, res) {
    const mymail = process.env.MAIL;
    const pass = process.env.PASS;
    try {
        // Configure mailgen by setting a theme and your product info
        const mailGenerator = new Mailgen({
            theme: 'default',
            product: {
                // Appears in header & footer of e-mails
                name: 'Tonmoy Biswas',
                link: 'https://mailgen.js/'
                // Optional product logo
                // logo: 'https://mailgen.js/img/logo.png'
            }
        });

        const emailToSender = {
            body: {
                name: req.body.name,
                intro: "Thanks for visiting my portfolio website. Your message has been sent successfully and you will be contacted soon.",
                // action: {
                //     instructions: 'To get started with Mailgen, please click here:',
                //     button: {
                //         color: '#22BC66', // Optional action button color
                //         text: 'Confirm your account',
                //         link: 'https://mailgen.js/confirm?s=d9729feb74992cc3482b350163a1a010'
                //     }
                // },
                outro: 'Have a nice day.'
            }
        };

        const emailToOwner = {
            body: {
                name: "Tonmoy biswas",
                intro: `A user, ${req.body.name}, with email address ${req.body.email} has sent the follow message from your portfolio website.`,
                // action: {
                //     instructions: 'To get started with Mailgen, please click here:',
                //     button: {
                //         color: '#22BC66', // Optional action button color
                //         text: 'Confirm your account',
                //         link: 'https://mailgen.js/confirm?s=d9729feb74992cc3482b350163a1a010'
                //     }
                // },
                outro: `Message: <br> ${req.body.message}`
            }
        };
        
        const emailToSenderHTML = mailGenerator.generate(emailToSender);
        const emailToOwnerHTML = mailGenerator.generate(emailToOwner);

        // to send the mail using nodemailer...
        const transporter = nodemailer.createTransport({
            service:'gmail',
            auth: {
                user: mymail,
                pass: pass
            }
        });

        // //sending mail to owner
        const info1 = await transporter.sendMail({
            from: 'Tonmoy Biswas', // sender address
            to: "tonmoybiswas19122002@gmail.com", // list of receivers
            subject: "Message from Tonmoy's portfolio website.", // Subject line
            // text: "Hello world text?", // plain text body
            html: emailToOwnerHTML, // html body
        });

        // //sending mail to sender
        const info2 = await transporter.sendMail({
            from: 'Tonmoy Biswas', // sender address
            to: req.body.email, // list of receivers
            subject: "Response from Tonmoy's portfolio website.", // Subject line
            // text: "Hello world text?", // plain text body
            html: emailToSenderHTML, // html body
        });
        // console.log("Body:", req.body);

        // res.send(emailToOwnerHTML);

        res.status(200).json({ ok: true, message: "Message sent successfully." });
    }
    catch (err) {
        return res.status(500).json({ ok: false, message: "Failed to send message.",err:err.message });
    }
}