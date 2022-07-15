const Productos = require('./Productos')

const {
    guardarBDDProductos,
    leerDBProductos,
    guardarBDDCategorias,
    leerDBCategorias
} = require('./bdd');

const main = () => {
    const productos = new Productos();
    const leerBDDProductos = leerDBProductos();

    if (leerBDDProductos) {
        productos.cargarProductosFromArr(leerBDDProductos);
    }
    document.querySelector('#insertar').innerHTML = productos.listadoCompleto();
}

main();