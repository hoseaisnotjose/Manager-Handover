var express = require('express');
const router = express.Router();
const usersCtrl = require('../controllers/reports');

// GET /users
router.get('/', usersCtrl.index);
router.get('/new', usersCtrl.newReport)
router.get('/:id', usersCtrl.show)
router.post('/:id/comments', isLoggedIn, usersCtrl.addComment)
router.get('/:id/edit', isLoggedIn, usersCtrl.edit)
router.put('/:id', isLoggedIn, usersCtrl.update)


// POST /reports
router.post('/', isLoggedIn, usersCtrl.addReport);

// DELETE /reports/:id
router.delete('/:id', isLoggedIn, usersCtrl.delReport);



function isLoggedIn(req, res, next) {
  if (req.isAuthenticated() ) return next();
  res.redirect('/auth/google');
}

/* GET users listing. */


module.exports = router;
