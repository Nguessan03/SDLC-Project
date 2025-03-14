const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors')

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const connectRouter = require('./routes/connect')
const anonymRouter = require('./routes/anonyms')
const articlesRouter = require('./routes/articles')
const cryptoRouter = require('./routes/crypto') 

// Ligne pour importer les route de test
const securityTestRoutes = require('./routes/test-routes');

var app = express();

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//app.use('/', indexRouter);
app.use('/' , connectRouter)
app.use('/users', usersRouter); 
app.use('/anonyms', anonymRouter) 
app.use('/articles' , articlesRouter)  
app.use('/cryptos' , cryptoRouter)

//Condition pour n'activer les route de test qu'en environnemennt non-production
if (process.env.NODE_ENV !== 'production') {
  app.use('/api/security-tests', securityTestRoutes);
  console.log('Security test routes enabled');
}

module.exports = app;