// Generated by CoffeeScript 1.8.0
(function() {
  var router;

  router = require('express').Router();

  router.route('/').get(function(req, res) {
    if (req.user) {
      return res.redirect('/aquarius');
    }
    return res.render('default');
  });

  router.route(['/signin', '/signup', '/forgot']).get(function(req, res) {
    return res.render('account');
  });

  module.exports = router;

}).call(this);