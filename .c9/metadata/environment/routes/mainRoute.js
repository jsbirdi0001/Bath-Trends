{"filter":false,"title":"mainRoute.js","tooltip":"/routes/mainRoute.js","undoManager":{"mark":8,"position":8,"stack":[[{"start":{"row":0,"column":0},"end":{"row":43,"column":21},"action":"insert","lines":["const express = require('express');","const app = express.Router(),","      nodemailer = require(\"nodemailer\");","","app.get(\"/\", (req, res)=>{","    res.render(\"index\");","})","app.post('/contact', function (req, res) {","  var transporter = nodemailer.createTransport({","     host: 'smtp.gmail.com',","     port: 465,","     secure: true, ","     auth: {","            user: 'jatinderbirditech@gmail.com',","            pass: 'Kiranbirdi1@'","        }","    });","    ","    const mailOptions = {","        from: req.body.email,","        to: 'jatinderbirditech@gmail.com',","        subject: 'Contact from GGS AutoCollision',","        html: `Name: ${req.body.first} (${req.body.last}) <br>","               Phone: ${req.body.phone} <br>","               Email: ${req.body.email} <br>","               Company: ${req.body.company} <br>","               Model: ${req.body.model} <br>","               Message: ${req.body.message}","        `","    };","    ","    transporter.sendMail(mailOptions, function (err, info) {","       if(err){","           console.log(err);","           res.send(\"<h1 style='text-align:center'> Error Send Mail </h1> <a href='/'><button>Go Back</button></a>\")","       }","       else {","         console.log(info);","         res.send(\"Mail has been sent\")","       }","    });","});","","module.exports = app;"],"id":1}],[{"start":{"row":7,"column":0},"end":{"row":41,"column":3},"action":"remove","lines":["app.post('/contact', function (req, res) {","  var transporter = nodemailer.createTransport({","     host: 'smtp.gmail.com',","     port: 465,","     secure: true, ","     auth: {","            user: 'jatinderbirditech@gmail.com',","            pass: 'Kiranbirdi1@'","        }","    });","    ","    const mailOptions = {","        from: req.body.email,","        to: 'jatinderbirditech@gmail.com',","        subject: 'Contact from GGS AutoCollision',","        html: `Name: ${req.body.first} (${req.body.last}) <br>","               Phone: ${req.body.phone} <br>","               Email: ${req.body.email} <br>","               Company: ${req.body.company} <br>","               Model: ${req.body.model} <br>","               Message: ${req.body.message}","        `","    };","    ","    transporter.sendMail(mailOptions, function (err, info) {","       if(err){","           console.log(err);","           res.send(\"<h1 style='text-align:center'> Error Send Mail </h1> <a href='/'><button>Go Back</button></a>\")","       }","       else {","         console.log(info);","         res.send(\"Mail has been sent\")","       }","    });","});"],"id":2}],[{"start":{"row":7,"column":0},"end":{"row":41,"column":3},"action":"insert","lines":["app.post('/contact', function (req, res) {","  var transporter = nodemailer.createTransport({","     host: 'smtp.gmail.com',","     port: 465,","     secure: true, ","     auth: {","            user: 'jatinderbirditech@gmail.com',","            pass: 'Kiranbirdi1@'","        }","    });","    ","    const mailOptions = {","        from: req.body.email,","        to: 'jatinderbirditech@gmail.com',","        subject: 'Contact from GGS AutoCollision',","        html: `Name: ${req.body.first} (${req.body.last}) <br>","               Phone: ${req.body.phone} <br>","               Email: ${req.body.email} <br>","               Company: ${req.body.company} <br>","               Model: ${req.body.model} <br>","               Message: ${req.body.message}","        `","    };","    ","    transporter.sendMail(mailOptions, function (err, info) {","       if(err){","           console.log(err);","           res.send(\"<h1 style='text-align:center'> Error Send Mail </h1> <a href='/'><button>Go Back</button></a>\")","       }","       else {","         console.log(info);","         res.send(\"Mail has been sent\")","       }","    });","});"],"id":3}],[{"start":{"row":6,"column":2},"end":{"row":7,"column":0},"action":"insert","lines":["",""],"id":4}],[{"start":{"row":23,"column":39},"end":{"row":23,"column":57},"action":"remove","lines":["(${req.body.last})"],"id":5},{"start":{"row":23,"column":38},"end":{"row":23,"column":39},"action":"remove","lines":[" "]}],[{"start":{"row":23,"column":32},"end":{"row":23,"column":37},"action":"remove","lines":["first"],"id":6},{"start":{"row":23,"column":32},"end":{"row":23,"column":33},"action":"insert","lines":["n"]},{"start":{"row":23,"column":33},"end":{"row":23,"column":34},"action":"insert","lines":["a"]},{"start":{"row":23,"column":34},"end":{"row":23,"column":35},"action":"insert","lines":["m"]},{"start":{"row":23,"column":35},"end":{"row":23,"column":36},"action":"insert","lines":["e"]}],[{"start":{"row":24,"column":33},"end":{"row":24,"column":38},"action":"remove","lines":["phone"],"id":7},{"start":{"row":24,"column":33},"end":{"row":24,"column":34},"action":"insert","lines":["e"]},{"start":{"row":24,"column":34},"end":{"row":24,"column":35},"action":"insert","lines":["m"]},{"start":{"row":24,"column":35},"end":{"row":24,"column":36},"action":"insert","lines":["a"]},{"start":{"row":24,"column":36},"end":{"row":24,"column":37},"action":"insert","lines":["i"]},{"start":{"row":24,"column":37},"end":{"row":24,"column":38},"action":"insert","lines":["l"]}],[{"start":{"row":25,"column":33},"end":{"row":25,"column":38},"action":"remove","lines":["email"],"id":8},{"start":{"row":25,"column":33},"end":{"row":25,"column":34},"action":"insert","lines":["m"]},{"start":{"row":25,"column":34},"end":{"row":25,"column":35},"action":"insert","lines":["e"]},{"start":{"row":25,"column":35},"end":{"row":25,"column":36},"action":"insert","lines":["s"]},{"start":{"row":25,"column":36},"end":{"row":25,"column":37},"action":"insert","lines":["s"]},{"start":{"row":25,"column":37},"end":{"row":25,"column":38},"action":"insert","lines":["a"]},{"start":{"row":25,"column":38},"end":{"row":25,"column":39},"action":"insert","lines":["g"]},{"start":{"row":25,"column":39},"end":{"row":25,"column":40},"action":"insert","lines":["e"]}],[{"start":{"row":25,"column":46},"end":{"row":28,"column":43},"action":"remove","lines":["","               Company: ${req.body.company} <br>","               Model: ${req.body.model} <br>","               Message: ${req.body.message}"],"id":9}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":25,"column":46},"end":{"row":25,"column":46},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":29,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1588926389303,"hash":"937d8537698db5e9730c32275ddadd58166b31f8"}