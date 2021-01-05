let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();

let employeeSchema = require('../models/Employee');

router.post('/create-employee',(req, res, next) => {
  employeeSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// READ employees
router.get('/',(req, res) => {
  employeeSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get Single employee
router.get('/edit-employee/:id',(req, res) => {
  employeeSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update employee
router.put('/update-employee/:id',(req, res, next) => {
  employeeSchema.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data)
    }
  })
})

// Delete employee
router.delete('/delete-employee/:id',(req, res, next) => {
  employeeSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = router;