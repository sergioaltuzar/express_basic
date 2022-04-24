// Usando objeto express
const express = require('express');
// App de express que
const app = express();
//Puerto en que vamos a ver nuestra app: localhost:3000
const port = 3000;
//path inicial respondera a la url localhost:3000
app.get('/', (req,res) => {
    res.send('Hello World!');
});

//Con esto inicializamos esta app
app.listen(port, () => {
    console.log(`Èxample app listening on port ${port}`);
});


//respondiendo texto
//localhost:3000/launchx
app.get('/launchx', (req, res) => {
    res.send('Bienvenidos a launchx');
});

// regresando un objeto
// local host:3000/explorerInNode

app.get('/explorersInNode', (req, res) => {
    const explorer = {name: "Explorer", msg: "Hello"};
    res.send(explorer);
});
//Query Params: Recibir parametros por la url
// http://localhost:3000/explorers/carlo

