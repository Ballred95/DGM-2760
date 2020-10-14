
const pizza = {
    crust: 'thin',
    size: 'small', 
    topping: 'pepperoni',
    buildPizza: function() {
       return document.querySelector('.message').innerHTML=(`You ordered a ${pizza.size} pizza with ${pizza.crust} crust, and ${pizza.topping} toppings. Hooray! `)
    },
    shopPizza: () => {
        let flour = 1
        pizza.crust === 'thick' && pizza.size === 'large' ? flour*=4 : pizza.crust === 'thick' || pizza.size === 'large' ? flour*=2 : null
        return document.querySelector('.message').innerHTML=(`You need ${flour} cups of flour and 1lb of ${pizza.topping} `)
    }
}

document.querySelector('#thin').addEventListener('click', () => pizza.crust = 'thin')
document.querySelector('#thick').addEventListener('click', () => pizza.crust = 'thick')
document.querySelector('#pepperoni').addEventListener('click', () => pizza.topping = 'pepperoni')
document.querySelector('#sausage').addEventListener('click', () => pizza.topping = 'sausage')
document.querySelector('#small').addEventListener('click', () => pizza.size = 'small')
document.querySelector('#large').addEventListener('click', () => pizza.size = 'large')

document.querySelector('#build').addEventListener('click', pizza.buildPizza)
document.querySelector('#shop').addEventListener('click', pizza.shopPizza)