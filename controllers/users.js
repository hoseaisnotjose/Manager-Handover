const User = require('../models/user');

module.exports = {
    index,
    addReport,
    delReport
};

function index(req, res, next) {
    console.log(req.query);
    let modelQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};
    // default to sorting by name
    let sortKey = req.query.sort || 'name';
    User.find(modelQuery)
    .sort(sortKey).exec(function(err, users) {
        if(err) return next(err);
        // Passing search values, name & sortKey, for use in the EJS
        res.render('users/index', {users, name: req.query.name, sortKey});
    });
}

function addReport(req, res, next) {
    req.user.reports.push(req.body);
    req.user.save(function(err) {
        req.redirect('/users');
    });
}

function delReport(req, res, next) {
    
}