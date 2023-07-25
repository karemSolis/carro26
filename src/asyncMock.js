

const products = [
    {
        id:'1',
        name: 'Aceite Impregnante',
        price: 4990,
        category: 'Solventes', 
        img:'./img/aceite-impregnante.png',
        stock: 12,
        description: 'Ayuda a proteger la madera de la destrucción por insectos y hongos'
    }, 

    {
        id:'2',
        name: 'Pintura Sanher',
        price: 21990,
        category: 'Pinturas', 
        img:'./img/pintura-sanher.png',
        stock: 6,
        description: '100% lavable y con bajo olor'
    }, 

    {
        id:'3',
        name: 'Cemento blanco',
        price: 3990,
        category: 'Superficie', 
        img:'./img/cemento-blanco.png',
        stock: 6,
        description: 'Hormigón arquitectónico, es de alta resistencia'
    }
]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise ((resolve)=> {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })

}


 
    export const getProductsByCategory = (categoryId) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId));
          }, 500);
        });
      };