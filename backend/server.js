let express = require('express');
let mongoose = require('mongoose');
const app = express();

let cors = require('cors'); //cross origin resource sharing 
let bodyParser = require('body-parser');  //It will help ous to get json data from body/frontend

//route
const employeeRoute = require('../backend/routes/employee_route')

//connecting mongodb atlas

mongoose.connect("mongodb+srv://samruddh:thesam@cluster0.ayxvc.mongodb.net/test?retryWrites=true&w=majority", {
  useNewUrlParser: true
}).then(() => {
  console.log(`MongoDB Atlas sucessfully connected!`)
},
  error => {
    console.log(`Not able to connect MongoDB Atlas : ${error}`)
  }
)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors());
app.use('/emp', employeeRoute)


const port = process.env.PORT || 8000;
const server = app.listen(port, () => {
  console.log(`Connected to port ${port}`)
})


app.use((req, res, next) => {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
