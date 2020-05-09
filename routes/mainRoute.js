const express = require('express');
const app = express.Router(),
      nodemailer = require("nodemailer");

app.get("/", (req, res)=>{
    res.render("index");
})

app.post('/contact', function (req, res) {
  var transporter = nodemailer.createTransport({
     host: 'smtp.gmail.com',
     port: 465,
     secure: true, 
     auth: {
            user: 'jatinderbirditech@gmail.com',
            pass: 'Kiranbirdi1@'
        }
    });
    
    const mailOptions = {
        from: req.body.email,
        to: 'jatinderbirditech@gmail.com',
        subject: 'Contact from GGS AutoCollision',
        html: `Name: ${req.body.name} <br>
               Phone: ${req.body.email} <br>
               Email: ${req.body.message} <br>
        `
    };
    
    transporter.sendMail(mailOptions, function (err, info) {
       if(err){
           console.log(err);
           res.send("<h1 style='text-align:center'> Error Send Mail </h1> <a href='/'><button>Go Back</button></a>")
       }
       else {
         console.log(info);
         res.send("Mail has been sent")
       }
    });
});

module.exports = app;