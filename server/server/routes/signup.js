import express from 'express';

var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
  console.log(req.body);
  req.app.get('dbInterface').addUser(req.body.username, req.body.password);
  res.send('User Created');
});

router.options('/', function(req, res, next) {
  console.log('here');
  res.send('');
})

export default router;
