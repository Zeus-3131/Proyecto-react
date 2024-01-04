const productos = [
    { id: "1", nombre: "zapatilla nike", precio: 300, imagen: "url", idcat: "1" },
    { id: "2", nombre: "zapatilla nike", precio: 400, imagen: "url", idcat: "1" },
    { id: "3", nombre: "zapatilla nike", precio: 600, imagen: "url", idcat: "1" },
    { id: "4", nombre: "zapatilla puma", precio: 300, imagen: "url", idcat: "2" },
    { id: "5", nombre: "zapatilla puma", precio: 500, imagen: "url", idcat: "2" },
    { id: "6", nombre: "zapatilla puma", precio: 600, imagen: "url", idcat: "2" },
    { id: "7", nombre: "zapatilla conver", precio: 300, imagen: "url", idcat: "3" },
    { id: "8", nombre: "zapatilla conver", precio: 700, imagen: "url", idcat: "3" },
    { id: "9", nombre: "zapatilla conver", precio: 600, imagen: "url", idcat: "3" },
    { id: "10", nombre: "zapatilla lacose", precio: 500, imagen: "url", idcat: "4" },
    { id: "11", nombre: "zapatilla lacose", precio: 400, imagen: "url", idcat: "4" },
    { id: "12", nombre: "zapatilla lacose", precio: 600, imagen: "url", idcat: "4" },
    { id: "13", nombre: "zapatilla adidas", precio: 400, imagen: "url", idcat: "5" },
    { id: "14", nombre: "zapatilla adidas", precio: 300, imagen: "url", idcat: "5" },
    { id: "15", nombre: "zapatilla adidas", precio: 600, imagen: "url", idcat: "5" },
    { id: "16", nombre: "zapatilla rebook", precio: 700, imagen: "url", idcat: "6" },
    { id: "17", nombre: "zapatilla rebook", precio: 400, imagen: "url", idcat: "6" },
    { id: "18", nombre: "zapatilla rebook", precio: 500, imagen: "url", idcat: "6" },
]

export const getProductos = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(productos);
        }, 100)
    })

}

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = productos.find(item => item.id === id);
            resolve(producto);
        }, 100)
    })

}

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const ProductosCategoria = productos.filter(item => item.idcat === idCategoria);
            resolve(ProductosCategoria);
        },100);
    })
}     
