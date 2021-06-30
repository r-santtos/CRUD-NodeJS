const expres = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
// Iniciando o App
const app = expres();
app.use(expres.json());
app.use(cors());

// Iniciando DataBase
mongoose.connect('mongodb+srv://<user>:<pass>@omnistack-oh3nu.mongodb.net/semana09?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
require('./src/model/Product');

// Primeira Rota
app.use('/api', require('./src/routes'));

app.listen(3333);
