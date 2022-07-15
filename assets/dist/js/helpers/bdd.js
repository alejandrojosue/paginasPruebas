const fs = require('fs');
const bddProductos = './db/dataPrductos.json';
const bddCategorias = './db/dataCategorias.json';

const guardarBDDProductos = (data) => {
    fs.writeFileSync(bddProductos, JSON.stringify(data));
}

const guardarBDDCategorias = (data) => {
    fs.writeFileSync(bddCategorias, JSON.stringify(data));
}

const leerDBProductos = () => {
    if (!fs.existsSync(bddProductos)) return null;

    const info = fs.readFileSync(bddProductos, { encoding: 'utf-8' });
    const data = JSON.parse(info);
    // console.log(data)
    return data;
}

const leerDBCategorias = () => {
    if (!fs.existsSync(bddCategorias)) return null;

    const info = fs.readFileSync(bddCategorias, { encoding: 'utf-8' });
    const data = JSON.parse(info);
    // console.log(data)
    return data;
}

module.exports = {
    guardarBDDProductos,
    leerDBProductos,
    guardarBDDCategorias,
    leerDBCategorias
};