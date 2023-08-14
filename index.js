const server = require('express');
const { engine } = require('express-handlebars');

// console.log(handlebars);

const app = server();
const port = 3000;
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');


app.get('/home/:n', (request, response) => {
    const name = request.params.n;
    response.render('index', {
        userName: name,
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
    });

}
);

app.listen(port, () => {
    console.log("Server is running");
});

