const express = require('express');
const router = express.Router();
const formatter = require('date-format');

// TODO Give dates some treatment to render them more cleanly
const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: formatter('dd-MM-yyyy hh:mm:ss', new Date()),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: formatter('dd-MM-yyyy hh:mm:ss', new Date()),
  },
];

router.get('/', (req, res) => {
  res.render('index', { title: 'Message Board', messages: messages });
});

router.get('/new', (req, res) => {
  res.render('newpost', { title: 'New Post' });
});

router.post('/new', (req, res) => {
  messages.push({
    text: req.body.message,
    user: req.body.name,
    added: formatter('dd-MM-yyyy hh:mm:ss', new Date()),
  });
  res.redirect('/');
});

// TODO Add error handling middleware

module.exports = router;
