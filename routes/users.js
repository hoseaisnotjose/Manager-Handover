var express = require('express');
const router = express.Router();
const usersCtrl = require('../controllers/users');

// GET /users
router.get('/users', usersCtrl.index);

// POST /reports
router.post('/reports', isLoggedIn, usersCtrl.addReport);

// DELETE /reports/:id
router.delete('/reports/:id', isLoggedIn, usersCtrl.delReport);

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated() ) return next();
  res.redirect('/auth/google');
}

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
