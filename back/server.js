// libraries
const express = require('express');

// projects data
const projects = require('./projects.json');

// vars
const app = express();
const port = 3001;

// cors
const cors = require("cors");
const corsOptions = {
  origin: "http://localhost:3000",
};
app.use(cors(corsOptions));

/* Routes */
// Liste des projets : GET /
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
