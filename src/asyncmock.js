const productos = [
    { id: "1", nombre: "Air Max", precio: 300, stock:20, imagen: "https://static.nike.com/a/images/t_default/8e0d887b-6987-4030-b272-8194514be6a8/sabrina-1-family-bonds-zapatillas-de-baloncesto-KdPT3V.png", idcat: "1"},
    { id: "2", nombre: "React Infinity Run", precio: 400, stock:20, imagen: "https://static.nike.com/a/images/t_default/4c413473-5aca-4850-9999-83bcaac522c3/calzado-air-max-sc-LR42xg.png", idcat: "1"},
    { id: "3", nombre: "Air Force 1", precio: 600, stock:20, imagen: "https://static.nike.com/a/images/t_default/35db0f3d-f8be-488d-8abb-c07fcc7087af/calzado-de-running-en-carretera-extraancho-flex-experience-run-12-lTHLhP.png", idcat: "1"},
    { id: "4", nombre: "Future Rider", precio: 300, stock:20, imagen: "https://content.stylitics.com/images/items/15039664?size=large", idcat: "2" },
    { id: "5", nombre: "RS-Fast", precio: 500, stock:20, imagen: "https://acdn.mitiendanube.com/stores/001/374/566/products/tenis-puma-california-original-mujer-color-blanco-negro-tienda-onlineshoppingcenterg-colombia-centro-de-compras-en-linea1-0f94547307b5aca08a16672806569504-640-0.png", idcat: "2" },
    { id: "6", nombre: "Suede Classic", precio: 600, stock:20, imagen: "https://balonmanoproshop.com/cdn/shop/files/Zapatillas-de-interior-Accelerate-NITRO-SQD-11.png?v=1697038607", idcat: "2" },
    { id: "7", nombre: "Chuck Taylor All Star", precio: 300, stock:20, imagen: "https://static.nike.com/a/images/t_default/36f3d117-6fbb-4079-b4fa-a0ecd3f132ef/calzado-converse-chuck-taylor-all-star-high-top-xX439O.png", idcat: "3" },
    { id: "8", nombre: "Jack Purcell", precio: 700, stock:20, imagen: "https://static.nike.com/a/images/t_default/glpjd3zwqkp5bkp6lxnr/calzado-talla-peque%C3%B1a-converse-chuck-taylor-all-star-high-top-2c8Kqp.png", idcat: "3" },
    { id: "9", nombre: "Run Star Hike", precio: 600, stock:20, imagen: "https://acdn.mitiendanube.com/stores/887/995/products/image-photoroom-png-photoroom-611-5c6165d93bcc03919816885628862851-1024-1024.png", idcat: "3" },
    { id: "10", nombre: "Lerond", precio: 500, stock:20, imagen: "https://i.ebayimg.com/00/s/MTAwMFgxMDAw/z/wo0AAOSwtQtg4von/$_58.png", idcat: "4" },
    { id: "11", nombre: "Chaymon", precio: 400, stock:20, imagen: "https://outletshoesmx.com/cdn/shop/files/2_d9d4585f-f197-4bf3-a8de-28d5057070a5_600x.png?v=1691867176", idcat: "4" },
    { id: "12", nombre: "Europa", precio: 600, stock:20, imagen: "https://ae01.alicdn.com/kf/H34ca3794ac9b449980e9a1688d6607c9J/Sandalias-informales-para-hombre-zapatos-de-lona-transpirables-a-la-moda-zapatillas-de-playa-para-verano.png", idcat: "4" },
    { id: "13", nombre: "Stan Smith", precio: 400, stock:20, imagen: "https://static.nike.com/a/images/t_default/f3276ae3-ab93-4ad3-abb8-b12f76e41401/calzado-de-carrera-en-carretera-vaporfly-3-8DD182.png", idcat: "5" },
    { id: "14", nombre: "Superstar", precio: 300, stock:20, imagen: "https://i.ebayimg.com/images/g/QJUAAOSws4FiLKbO/s-l400.png", idcat: "5" },
    { id: "15", nombre: "Ultraboost", precio: 600, stock:20, imagen: "https://i.ebayimg.com/00/s/MTAwMFgxMDAw/z/uc4AAOSwplVgWKtt/$_58.png", idcat: "5" },
    { id: "16", nombre: "Classic Leather", precio: 700, stock:20, imagen: "https://martimx.vtexassets.com/arquivos/ids/444852-800-800?v=637236909886000000&width=800&height=800&aspect=true", idcat: "6" },
    { id: "17", nombre: "Club C", precio: 400, stock:20, imagen: "https://i.ebayimg.com/00/s/MTAwMFgxMDAw/z/~Q8AAOSwlkBgRke0/$_58.png", idcat: "6" },
    { id: "18", nombre: "Nano X", precio: 500, stock:20, imagen: "https://www.provesicsa.com/wp-content/uploads/2021/03/ZAPA46713.png", idcat: "6" },
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
