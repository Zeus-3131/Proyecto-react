const productos = [
    { id: "1", nombre: "zapatilla nike", precio: 300, imagen: "url", idcat: "2" },
    { id: "2", nombre: "zapatilla puma", precio: 200, imagen: "url", idcat: "2" },
    { id: "3", nombre: "zapatilla conver", precio: 400, imagen: "url", idcat: "3" },
    { id: "4", nombre: "zapatilla lacose", precio: 400, imagen: "url", idcat: "3" },
    { id: "5", nombre: "zapatilla adidas", precio: 200, imagen: "url", idcat: "5" },
    { id: "6", nombre: "zapatilla rebook", precio: 100, imagen: "url", idcat: "5" },
]

export const getProductos = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(productos);
        }, 2000)
    })

}

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = productos.find(item => item.id === id);
            resolve(producto);
        }, 2000)
    })

}

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const ProductosCategoria = productos.filter(item => item.idcat === idCategoria);
            resolve(ProductosCategoria);
        },2000);
    })
}     
