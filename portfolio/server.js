const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(cors());
// Middleware to parse JSON data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Replace these with your email account credentials
const emailConfig = {
    service: 'Gmail',
    auth: {
        user: 'YOUR_EMAIL@gmail.com',
        pass: 'YOUR_EMAIL_PASSWORD', // Use an App Password if using Gmail
    },
};

// Create a Nodemailer transporter
const transporter = nodemailer.createTransport(emailConfig);

// Endpoint to handle form submissions
app.post('/send_email', (req, res) => {
    const { name, email, message } = req.body;

    const mailOptions = {
        from: emailConfig.auth.user,
        to: 'Milladayoubi@gmail.com', // Change this to your desired recipient email
        subject: 'New Contact Form Submission',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    // Send email using Nodemailer
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            res.status(500).json({ success: false, message: 'Failed to send email' });
        } else {
            console.log('Email sent:', info.response);
            res.status(200).json({ success: true, message: 'Email sent successfully' });
        }
    });
});

// Start the server on port 3001 (or any other port you prefer)
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});