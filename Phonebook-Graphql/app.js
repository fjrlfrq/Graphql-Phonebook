var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var { graphqlHTTP } = require("express-graphql");
var { schema } = require("./schema/schema.gql");
var { root } = require("./resolvers/resolvers.js")

var indexRouter = require('./routes/index');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

app.use(
    "/graphql",
    graphqlHTTP({
      schema: schema,
      rootValue: root,
      graphiql: true,
    })
  )

module.exports = app;
