const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const multer = require("multer");
const path = require('path');
const app = express();

count = 0;
// file upload unit
const DIR = './uploads';

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

const db = require("./app/models/index.js");
const Role = db.roles;

db.sequelize.sync();
// db.sequelize.sync({ force: true }).then(() => {
//     console.log("Drop and re-sync db.");
//     if(count==0){
//       initial();
//       count++;
//     }
// });

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, DIR);
    },
    filename: (req, file, cb) => {
      cb(null, file.fieldname + '-' + Date.now() + '.' + path.extname(file.originalname));
    }
});

let upload = multer({storage: storage});


// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//file upload settings
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8081');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to EGA99 application." });
});

//upload route(important)
app.post('/api/upload',upload.single('file'), function (req, res) {
  if (!req.file) {
      console.log("Your request doesn’t have any file");
      return res.send({
        success: false
      });
  
    } else {
      console.log('Your file has been received successfully');
      return res.send({
        success: true
      })
    }
});

require("./app/routes/tutorial.routes")(app);
require("./app/routes/topic.routes")(app);
// routes
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);
// require('./app/routes/upload.routes')(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

function initial() {
  Role.create({
    id: 1,
    name: "user"
  });
 
  Role.create({
    id: 2,
    name: "moderator"
  });
 
  Role.create({
    id: 3,
    name: "admin"
  });
}
