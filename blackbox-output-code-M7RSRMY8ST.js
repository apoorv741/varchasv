const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // Serve static files

app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;
    // Configure nodemailer to send email (use your SMTP settings)
    const transporter = nodemailer.createTransporter({ /* config */ });
   