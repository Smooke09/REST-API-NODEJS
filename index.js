// Carregando o modulo HTTP
// const http = require('http');
// Express
const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

let app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(expressValidator());

// Chama o consign e incliur todas as rotas no app
consign().include('routes').include('utils').into(app);



// Ouvindo a porta 3000
app.listen(3000, '127.0.0.1', () => {

    console.log('Servidor Back-End On')

})
