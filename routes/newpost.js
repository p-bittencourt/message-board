const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('newpost', { title: 'New Post' });
});

router.post('/', (req, res) => {
  console.log('Name: ' + req.body.name);
  console.log('Message: ' + req.body.message);
});

module.exports = router;
