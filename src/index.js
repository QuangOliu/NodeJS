const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = 3000;
const exphbs = require('express-handlebars');
const hbs = exphbs.create({ extname: '.hbs' });

app.use(express.static(path.join(__dirname, 'resources\\public')));
// TEMPLATE ENGINE

app.engine(
  'hbs',
  exphbs.engine({
    // defaultLayout: false,
    layoutsDir: __dirname + '/resources/views/layouts',
    extname: 'hbs',
  })
);

// app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources\\views')); // cách mình tìm đến file, hệ điều hành window

// console.log('PATH: ', path.join(__dirname, 'resources/views')) //xem đường dẫn

//
//HTTP logger
app.use(morgan('combined'));
app.get('/', (req, res) => {
  res.render('home');
});

app.get('/news', (req, res) => {
  res.render('news');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
