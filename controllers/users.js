const User = require('../models/user');

module.exports = {
    index,
    addReport,
    delReport
};

function index(req, res, next) {
    User.find({}, function(err, users) {
        res.render('index', {user: req.user, users})
    })
}

function addReport(req, res, next) {
    req.user.reports.push(req.body);
    req.user.save(function(err) {
        req.redirect('/users');
    });
}

function delReport(req, res, next) {

}