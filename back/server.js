// libraries
import cors from 'cors';
import express from 'express';
import nodemailer from 'nodemailer';
import * as dotenv from 'dotenv';
dotenv.config();


// projects data
import projects from "./projects.json" assert { type: "json" };

// vars
const app = express();
const port = process.env.PORT || 3001;

// cors
const corsOptions = {
  origin: `${process.env.CLIENT_URL}`,
  methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
  optionsSuccessStatus: 200, 
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'device-remember-token', 'Access-Control-Allow-Origin', 'Origin', 'Accept']
};
app.use(cors(corsOptions)); 
app.use(express.json({ extended: false }));

// nodemailer
function contactEmail( {name, email, message} ) {
  return new Promise((resolve, reject) => {
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_SENDER,
        pass: process.env.PASSWORD_SENDER,
      },
    });

    const mail_configs = {
      from: email,
      to: process.env.EMAIL_SENDER,
      subject: `Message from ${name} with ${email}`,
      text: message,
    };

    transporter.sendMail(mail_configs, function (error, info) {
      if (error) {
        console.log(error);
        return reject ({ message: `An error has occured` });
      }
      return resolve ({ message: "Email sent successfully" });
    });
  });
}

/* Routes */
// Liste des projets : GET /

app.get('/', (req,res) => {
    console.log('helloooo');
});

app.get('/projects', (req,res) => {
    console.log('>>GET /projects');
    res.json(projects);
});

app.post('/contact', (req,res) => {
  contactEmail(req.body)
    .then((response) => res.send(response.message))
    .catch((error) => res.status(500).send(error.message));
});

/*
 * Server
 */
app.listen(port, () => {
    console.log(`listening on *:${port}`)
})
