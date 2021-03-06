const express = require('express');
const path = require('path');
const consign = require('consign');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session')
const methodOverride = require('method-override');
const error = require('./middlewares/error');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(cookieParser('ntalk'));
app.use(expressSession());
app.use(express.json());
app.use(express.urlencoded());
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));

consign({ locale: 'pt-br' })
  .include('models')
  .then('controllers')
  .then('routes')
  .into(app)

app.use(error.notFound);
app.use(error.serverError)

app.listen(3000, () => console.log('Ntalk no ar.'))

