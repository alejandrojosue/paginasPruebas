const Productos = require("../models/Productos");
const Categorias = require("../models/Categorias");

const {
    guardarBDDProductos,
    leerDBProductos,
    guardarBDDCategorias,
    leerDBCategorias
} = require('./bdd');
const { version } = require("uuid");

const mainProductos = (nombre = '', des = '', precio = 0, categoria = '', agotado = false, imgURL = '') => {

    // productos.borrarProducto('1784cad5-c83f-4107-b778-804a7b68d269');

    //productos.listadoCompleto();

    const productos = new Productos();

    const leerBDDProductos = leerDBProductos();

    if (leerBDDProductos) {
        productos.cargarProductosFromArr(leerBDDProductos);
    }

    //productos.crearProducto("Mostaza", "Es un producto que puedes añadirlo a tus comidas", 10, "Salsas");

    //productos.borrarProducto('1784cad5-c83f-4107-b778-804a7b68d269');

    //productos.listadoCompleto();
    //productos.actualizarProducto('9e44a01f-2bdf-457e-a41c-dc631be0e4bb');
    //guardarBDDProductos(productos.listadoArr);


}

const mainCategorias = (producto = []) => {
    const categoria = new Categorias();

    const leerBDDCategorias = leerDBCategorias();

    if (leerDBCategorias) {
        categoria.cargarCategoriasFromArr(leerBDDCategorias);
    }

    //categoria.crearCategoria("Salsas", 'url');
    categoria.listadoCompleto();
    console.log();
    //productos.borrarProducto('1784cad5-c83f-4107-b778-804a7b68d269');
    console.log();

    //productos.listadoCompleto();
    categoria.actualizarCategoria('b7ce6658-8582-46e9-9fea-b1c9b6f9aaa1');
    guardarBDDCategorias(categoria.listadoArr);

    /*
    const productos = new Productos();

    const leerBDDProductos = leerDBProductos();

    if (leerBDDProductos) {
        productos.cargarProductosFromArr(leerBDDProductos);
    }

    //productos.crearProducto("Mostaza", "Es un producto que puedes añadirlo a tus comidas", 10, "Salsas");
    productos.listadoCompleto();
    console.log();
    //productos.borrarProducto('1784cad5-c83f-4107-b778-804a7b68d269');
    console.log();

    //productos.listadoCompleto();
    //productos.actualizarProducto('9e44a01f-2bdf-457e-a41c-dc631be0e4bb');
    guardarBDDProductos(productos.listadoArr);

    */
}
module.exports = { mainProductos };