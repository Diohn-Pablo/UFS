import colecaoUf from '../../dados/dados.js';

export const buscarUfs = () => {
    return colecaoUf;
}

export const buscarUfPorNome = (nomeUF) => {
    return colecaoUf.filter(uf => uf.nome.toLowerCase().includes(nomeUF.toLowerCase()));
}

export const buscarUfPorId = (id) => {
    const idUF = parseInt(id);
    return colecaoUf.find(uf => uf.id === idUF);
}

