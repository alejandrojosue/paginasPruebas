const Producto = require("./Producto");

class Productos {
    _listado = {};

    get listadoArr() {
        const listado = [];
        Object.keys(this._listado).forEach(key => {
            const producto = this._listado[key];
            listado.push(producto);
        });

        return listado;
    }

    crearProducto(nombre = '', desc = '', precio, categoria, agotado = false, imgURL = '') {
        const producto = new Producto(nombre, desc, precio, categoria, agotado, imgURL);
        this._listado[producto.id] = producto;
    }

    cargarProductosFromArr(productos = []) {
        productos.forEach(producto => {
            this._listado[producto.id] = producto;
        });
    }

    listadoCompleto() {
        let vista = '';

        const f = new Intl.NumberFormat('es-HN', { style: 'currency', currency: 'HNL', minimumFractionDigits: 2 });
        this.listadoArr.forEach((producto, index) => {
            const { nombre, desc, precio, categoria, agotado, imgURL } = producto;
            let productoAgotado = '';
            agotado ? productoAgotado = 'Agotado' : '';
            //console.log(`${index + 1}. ${nombre}:: Precio:${precio}, Categoria:${categoria}, ${productoAgotado}, ${imgURL}`)
            vista += `
            <div class="col">
        <div class="card shadow-sm h-100" style="min-height: 450px;">
            <img src="https://drive.google.com/uc?export=download&id=${imgURL}" alt="" width="100%" height="225" class="bd-placeholder-img card-img-top" loading="lazy">
            <div class="card-body">
                <h4 class="card-title text-center">~ ${nombre} ~</h4>
                <p class="card-text">${desc}</p>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group position-absolute bottom-0 mb-3">
                        <span type="button" class="btn btn-sm btn-success">${f.format(precio)}</span>
                    </div>
                    <small class="position-relative position-absolute bottom-0 m-3 end-0">${categoria}</small>
                </div>
            </div>
        </div>
    </div>`
        });
        return vista;
    }

    borrarProducto = (id = '') => {
        if (this._listado[id]) {
            delete this._listado[id];
        }
    }

    actualizarProducto = (id, nombre = 'Producto', desc = 'Esta es una descripcion', precio = 100, categoria = 'cat', agotado = true) => {
        const producto = this._listado[id];
        producto.nombre = nombre;
        producto.desc = desc;
        producto.precio = precio;
        producto.categoria = categoria;
        producto.agotado = agotado;
    }

    constructor() {
        this._listado = {};
    }
}

module.exports = Productos;