const User = require('../models/user');
const Report = require('../models/report')
module.exports = {
    index,
    addReport,
    delReport,
    newReport,
    show,
    addComment
};

function addComment(req, res, next) {
    Report.findById(req.params.id, function(err, report) {
        req.body.user = req.user._id
        report.comments.push(req.body)
        report.save(function(e){
            res.redirect(`back`)
        })

    })
}

function newReport(req, res, next) {
    res.render('reports/new', {user: req.user})
}

function index(req, res, next) {
    Report.find({}, function(err, reports) {
        res.render('reports/index', {user: req.user, reports})
    })
}

function show(req, res, next) {
    let commentUsers = []
    Report.findById(req.params.id, function(err, report) {
        User.find({}, function(err, allUsers) {
            report.comments.forEach(c=> {
                allUsers.forEach(u=> {
                    if (c.user.toString() == u._id.toString()) {
                        commentUsers.push(u.name)
                    }
                })
            })
            res.render('reports/show', {user: req.user, report, commentUsers})
        })
    })
}

function addReport(req, res, next) {
    req.body.user = req.user._id
   let report = new Report(req.body)
   report.save(function(e){
       res.redirect("/reports")
   })
}

function delReport(req, res, next) {
    Report.findByIdAndDelete(req.params.id, function(err, report) {
        res.redirect('/reports')
    })
}