let car = {
    color: prompt('which color?'),
    mark: prompt('which mark?'),
    engine: prompt('engine force?'),
    isTurbo: confirm('is turbo?'),
    hasHatch: confirm('with hatch?'),
    price: prompt('prise?'),
}



let cars = [
    {
        color: "white",
        mark: "lada_zhiguli06",
        engine: 3.0,
        isTurbo: false,
        hasHatch: false,
        price: 1500,
        img: "https://avatars.mds.yandex.net/i?id=f7fa48ba965ef47f7cd70e2beb63c65f-4538204-images-thumbs&n=13"
    },
    {
        color: "white",
        mark: "mustang",
        engine: 6.0,
        isTurbo: true,
        hasHatch: true,
        price: 1000000,
        img: "https://avatars.mds.yandex.net/i?id=61fce67a170382a6b79d101a298bf1085a71f1dd-4578804-images-thumbs&n=13&exp=1"
    },
    {
        color: "blue",
        mark: "lambargini",
        engine: 5.0,
        isTurbo: true,
        hasHatch: true,
        price: 60000,
        img: "https://avatars.mds.yandex.net/i?id=71effc931575ccc6cf2a98ef8a725df1-5644946-images-thumbs&n=13&exp=1"
    },
    {
        color: "grey",
        mark: "malibu",
        engine: 4.5,
        isTurbo: true,
        hasHatch: true,
        price: 50000,
        img: "https://avatars.mds.yandex.net/i?id=fe4f9f39f25cd9dfbe771c5f809f6794-4184248-images-thumbs&n=13&exp=1"
    },
    {
        color: 'blue',
        mark: 'lacceti',
        engine: 3.2,
        isTurbo: true,
        hasHatch: true,
        price: 12000,
        img: 'https://avatars.mds.yandex.net/i?id=5fe553aefc5fa669669ae25648c42a67_l-5287716-images-thumbs&n=13'

    },
    {
        color: 'yellow',
        mark: 'lamborgine urus',
        engine: 8.2,
        isTurbo: true,
        hasHatch: true,
        price: 500000,
        img: 'https://avatars.mds.yandex.net/i?id=ef9fa34842e638d11dc73528278e6577-5236667-images-thumbs&n=13'
    }
]

let filtered = cars.filter(item => {
    if(item.mark === car.mark){
        return item
    } else {
        console.log("<-- Столько машин вам не подходит");
    }
})
console.log(filtered);

// cars.filter(item => {
//     if(car.price >= item.price && car.engine >= item.engine) {
//         console.log(item);
//     } else {
//         console.log("<-- Столько машин вам не подходит");
//     }
// })
