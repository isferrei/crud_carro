const express = require('express');
const app = express();
const cors = require('cors');
const models = require("./models/");
const Locacao = models.Locacao;
const Usuario = models.Usuario;
const Carro = models.Carro;
const Cliente = models.Cliente;
const LocacaoItem = models.LocacaoItem;


app.use(express.json());
app.use(cors());
app.get("/", (req, resp) => {
    resp.json("ok");
});

// app.get("/carro", (req, resp) => {
//     resp.send(carro);
// });

app.get("/carro", (req, resp) => {
    Carro.findAll().then(function(carros){
        resp.send(carros);
    });
});

app.post("/carro", (req, resp) => {
    Carro.create(req.body).then( o => {
        resp.send(o.dataValues);
    });
});

app.put("/carro/:id", (req, resp) => {
    Carro.findByPk(req.params.id).then( o => {
        o.update(req.body).then( (o2) => resp.send(o2.dataValues));
    })
});

app.delete("/carro/:id", (req, resp) => {
    Carro.findByPk(req.params.id).then( o => {
        o.delete(req.body).then( (o2) => resp.send(o2.dataValues));
    })
});
    
app.get("/usuario", (req, resp) => {
    Usuario.findAll().then(function(usuarios){
        resp.send(usuarios);
    });
});

app.post("/usuario", (req, resp) => {
    Usuario.create(req.body).then( o => {
        resp.send(o.dataValues);
    });
});

app.get("/cliente", (req, resp) => {
    Cliente.findAll().then(function(clientes){
        resp.send(clientes);
    });
});

app.post("/cliente", (req, resp) => {
    Cliente.create(req.body).then( o => {
        resp.send(o.dataValues);
    });
});

app.get("/locacaoitem", (req, resp) => {
    resp.json('locacaoitem');
});

app.get("/locacao", (req, resp) => {
    Locacao.findAll({include: [Usuario, LocacaoItem]}).then(function(locacaos){
        resp.send(locacaos);
    });
});

app.put("/locacao/:id", (req, resp) => {
    Locacao.findByPk(req.params.id).then( o => {
        o.update(req.body).then( (o2) => resp.send(o2.dataValues));
    })
})

app.post("/locacao", (req, resp) => {
    Locacao.create(req.body, {include: [LocacaoItem]}).then( o => {
        resp.send(o.dataValues);
    });
})


app.use(function(req, res, next) {
       // Website you wish to allow to connect
       res.setHeader('Access-Control-Allow-Origin', '*');

       // Request methods you wish to allow
       res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
   
       // Request headers you wish to allow
       res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
   
       // Set to true if you need the website to include cookies in the requests sent
       // to the API (e.g. in case you use sessions)
       res.setHeader('Access-Control-Allow-Credentials', true);
       application/x-www-form-urlencoded
   
       // Pass to next layer of middleware
       next();
});



app.listen(8000, () => {
    console.log('Server running at http://127.0.0.1:8000/')
});