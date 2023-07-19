const products = [
    {
        id:'1',
        name: 'Aceite Impregnante',
        price: 4990,
        category: 'solventes', 
        img:'./src/img/aceite-impregnante.png',
        stock: 12,
        description: 'Ayuda a proteger la madera de la destrucción por insectos y hongos'
    }

]

export const getProducts = () => {
    return new promise ((resolve) => {
        setTimeout (() => {
            resolve(products)
        }, 500)
    })
}