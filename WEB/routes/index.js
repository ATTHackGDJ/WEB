var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Beavent' });
});
router.get('/dashboard', function(req, res, next) {
  res.render('new_place', { title: 'Dashboard - Places' });
});
router.get('/dashboard/places', function(req, res, next) {
  res.render('new_place', { title: 'Dashboard - Places' });
});
router.get('/dashboard/rooms', function(req, res, next) {
  res.render('new_room', { title: 'Dashboard - Rooms' });
});
router.get('/dashboard/events', function(req, res, next) {
  res.render('new_event', { title: 'Dashboard - Events' });
});
router.get('/dashboard/activities', function(req, res, next) {
  res.render('new_activity', { title: 'Dashboard - Activities' });
});
router.get('/dashboard', function(req, res, next) {
  res.render('new_room', { title: 'Dashboard - Rooms' });
});
module.exports = router;
