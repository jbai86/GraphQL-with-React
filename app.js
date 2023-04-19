const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

//Connect to Mongo database
mongoose.connect('mongodb+srv://jbai:test123@graphql-jbai.2qbsiii.mongodb.net/test');
mongoose.connection.once('open', () => {
    console.log('connected to database');
})

const app = express();

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log("now listening for requests on port 4000");
});