const { v4: uuidv4 } = require('uuid');
class Producto {
    id = '';
    nombre = '';
    desc = '';
    precio = '';
    categoria = '';
    agotado = false;
    imgURL = '';

    constructor(nombre, desc, precio, categoria, agotado = false, imgURL) {
        this.id = uuidv4();
        this.nombre = nombre;
        this.desc = desc;
        this.precio = precio;
        this.categoria = categoria;
        this.agotado = agotado;
        this.imgURL = imgURL;
    }
}

module.exports = Producto;