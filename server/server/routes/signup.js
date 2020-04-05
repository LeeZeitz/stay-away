import express from 'express';

var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
  console.log(req.body);
});

router.options('/', function(req, res, next) {
  console.log('here');
  res.send('');
})

export default router;
