// Задание 1
var x = 2;
function isPrime(num) {
    var i = 2;
    while (i < num / 2) {
        if (num % i == 0) {
            return false;
        }
        i++;
    }
    return true
}
while (x <= 100) {
    if (isPrime(x)) {
        console.log(x)
    }
    x++;
}
//задание 2/3
var basket = [
    {
        title: "Товар 1",
        price: 700,
        count: 1
    },
    {
        title: "Товар 2",
        price: 950,
        count: 2
    },
    {
        title: "Товар 3",
        price: 1200,
        count: 3
    }
]

function countBasketPrice(mas) {
    var sumBasket = 0;
    for (var item of mas) {
        sumBasket += item.price * item.count;
    }
    return sumBasket;
}
console.log(countBasketPrice(basket))











