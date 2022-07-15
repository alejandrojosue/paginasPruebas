const { v4: uuidv4 } = require('uuid');
class Categoria {
    id = '';
    nombre = '';
    imgURL = ''

    constructor(nombre, imgURL) {
        this.id = uuidv4();
        this.nombre = nombre;
        this.imgURL = imgURL;
    }
}

module.exports = Categoria;