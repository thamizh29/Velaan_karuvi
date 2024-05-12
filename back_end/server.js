const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const EmployeeModel = require('./manage');
const UserModel = require('./manage');

const app = express();
app.use(cors());
app.use(express.json())
mongoose.connect("mongodb://127.0.0.1:27017/employee");

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  EmployeeModel.findOne({ email: email })
    .then(user => {
      if (user) {
        if (user.password === password) {
          res.json("success")
        } else {
          res.json("password is in correct")
        }
      } else {
        res.json("no user exist")
      }
    })
})

app.get('/tipper', (req, res) => {
  UserModel.find({type: 'Tipper'})
    .then(users =>
      res.json(users)
    )
    .catch(err => console.log(err))
})

app.get('/cultivator', (req,res) =>{
  UserModel.find({type: 'Cultivatore'})
  .then(users => res.json(users))
  .catch(err => console.log(err))
})

app.get('/rotavator', (req,res) =>{
  UserModel.find({type: 'Rotavator'})
  .then(users => res.json(users))
  .catch(err => console.log(err))
})

app.get('/mini-rotavator', (req,res) =>{
  UserModel.find({type: 'Mini Rotavator'})
  .then(users => res.json(users))
  .catch(err => console.log(err))
})

app.get('/mini-cultivator', (req,res) =>{
  UserModel.find({type: 'Mini Cultivatore'})
  .then(users => res.json(users))
  .catch(err => console.log(err))
})

app.get('/p-harvaster', (req,res) =>{
  UserModel.find({type: 'paddy Harvaster'})
  .then(users => res.json(users))
  .catch(err => console.log(err))
})

app.get('/s-harvaster', (req,res) =>{
  UserModel.find({type: 'SugarCan Harvaster'})
  .then(users => res.json(users))
  .catch(err => console.log(err))
})

app.get('/c-harvaster', (req,res) =>{
  UserModel.find({type: 'Corn Harvaster'})
  .then(users => res.json(users))
  .catch(err => console.log(err))
})

app.get('/powertiller', (req,res) =>{
  UserModel.find({type: 'PowerTiller'})
  .then(users => res.json(users))
  .catch(err => console.log(err))
})

app.get('/sprayer', (req,res) =>{
  UserModel.find({type: 'Sprayer'})
  .then(users => res.json(users))
  .catch(err => console.log(err))
})

app.get('/riceplanter', (req,res) =>{
  UserModel.find({type: 'RiceTrans Planter'})
  .then(users => res.json(users))
  .catch(err => console.log(err))
})

app.post('/register', (req, res) => {
  EmployeeModel.create(req.body)
    .then(employees => res.json(employees))
    .catch(err => res.json(err))
})
// app.post('/create', (req,res)=> {
//   EmployeeModel.create(req.body)
//   .then(employees => res.json(employees))
//   .catch(err => res.json(err))
// })
app.post('/user', (req, res) => {
  UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => console.log(err))
})

app.listen(5000, () => {
  console.log("sever is running...")
})
