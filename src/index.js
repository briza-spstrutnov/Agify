const express = require('express');

const app = express();

app.listen(8080, () => {
    console.log('listening on port 8080');
});

app.set('view engine', 'ejs');
app.use(express.static('www'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    return res.render('index', { title: 'Name API' });
});

app.use((req, res) => {
    res.status(404).render('404', { title: 'Stránka nenalezena' });
});