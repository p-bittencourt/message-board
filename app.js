const express = require('express');
const morgan = require('morgan');
const createError = require('http-errors');
const path = require('path');
const expressLayout = require('express-ejs-layouts');

// routers
const indexRouter = require('./routes/index');
const newPostRouter = require('./routes/newpost');

const app = express();
const port = 3000;

// set up view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(expressLayout);

// set up middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

// connect to database

// routes
app.use('/', indexRouter);
app.use('/new', newPostRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handling
app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

// activate
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
