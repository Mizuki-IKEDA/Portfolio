// libraries
import cors from 'cors';
import express from 'express';

// projects data
import projects from "./projects.json" assert { type: "json" };

// vars
const app = express();
const port = 3001;

// cors
const corsOptions = {
  origin: 'http://localhost:3000',
  methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
  optionsSuccessStatus: 200, 
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'device-remember-token', 'Access-Control-Allow-Origin', 'Origin', 'Accept']
};
app.use(cors(corsOptions)); 

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
//     res.header("Access-Control-Allow-credentials", true);
//     res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, UPDATE");
//     next();
// });

/* Routes */
// Liste des projets : GET /

app.get('/', (req,res) => {
    console.log('helloooo');
});

app.get('/projects', (req,res) => {
    console.log('>>GET /projects');
    res.json(projects);
});

/*
 * Server
 */
app.listen(port, () => {
    console.log(`listening on *:${port}`)
})
