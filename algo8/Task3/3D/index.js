const express = require('express');
const path = require('path');
var csv = require('csv-express');
const port = 8001;
const mongoose=require('./config/mongoose');
const student=require('./models/student');


const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join( __dirname, 'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));


app.get('/', function (req, res) {
  student.find({},function(err,students){
if(err){
  console.log('error');
  return;
}
return res.render(
  'home', {
      title: "student list",
      student_list:students
  });
      }
  );
});


app.get('/csv', function(req, res, next) {
  var filename   = "student.csv";
  student.find().lean().exec({}, function(err, students) {
      if (err) res.send(err)
      
      res.statusCode = 200
      res.setHeader('Content-Type', 'text/csv')
      res.setHeader("Content-Disposition", 'attachment; filename='+filename)
      res.csv(students, true)
  })
})








app.listen(port, function (err) {
  if (err) {
      console.log('error is running', err);
  }
  console.log('its running on ', port);
});