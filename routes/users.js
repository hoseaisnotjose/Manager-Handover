var express = require('express');
const router = express.Router();
const usersCtrl = require('../controllers/users');

// GET /users
router.get('/', usersCtrl.index);

// POST /reports
router.post('/reports', isLoggedIn, usersCtrl.addReport);

// DELETE /reports/:id
router.delete('/reports/:id', isLoggedIn, usersCtrl.delReport);

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated() ) return next();
  res.redirect('/auth/google');
}

/* GET users listing. */


module.exports = router;
