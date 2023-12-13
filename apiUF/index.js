import express from 'express';
import { buscarUfs, buscarUfPorNome, buscarUfPorId } from './servicos/servico.js';
const app = express();



app.get('/ufs', (req,res) => {
    const nomeUF = req.query.busca;
    const resultado = nomeUF ? buscarUfPorNome(nomeUF) : buscarUfs();

    if (resultado.length > 0) {
        res.json({resultado: resultado});

    } else {
        res.status(404).send({'Erro': 'Não foi possível localizar'})
    }
})


app.get('/ufs/:iduf', (req,res) => {
    const uf = buscarUfPorId(req.params.iduf)

    if (uf) {
        res.json(uf)
    } else if (isNaN(parseInt(req.params.iduf))) {
        res.status(400).send({'ERRO': 'requisição inválida'})
    } else {
        res.status(404).send({'erro': 'UF Não encontrada'})
    }
})


app.listen(8080, () => {
    console.log('Servidor iniciado')
})