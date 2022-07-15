const Categoria = require("./Categoria");

class Categorias {
    _listado = {};

    get listadoArr() {
        const listado = [];
        Object.keys(this._listado).forEach(key => {
            const categoria = this._listado[key];
            listado.push(categoria);
        });

        return listado;
    }

    crearCategoria(nombre = '', imgURL = '') {
        const categoria = new Categoria(nombre, imgURL);
        this._listado[categoria.id] = categoria;
    }

    cargarCategoriasFromArr(categorias = []) {
        categorias.forEach(categoria => {
            this._listado[categoria.id] = categoria;
        });
    }

    listadoCompleto() {
        this.listadoArr.forEach((categoria, index) => {
            const { nombre, imgURL } = categoria;
            // console.log(`${index + 1}. ${nombre}, ${imgURL}`)

        });
    }

    borrarCategoria = (id = '') => {
        if (this._listado[id]) {
            delete this._listado[id];
        }
    }

    actualizarCategoria = (id, nombre = 'Categoria', imgURL = '') => {
        const categoria = this._listado[id];
        categoria.nombre = nombre;
    }

    constructor() {
        this._listado = {};
    }
}

module.exports = Categorias;