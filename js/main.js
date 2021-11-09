const products = [
    {   
        id: 1,
        title: 'Mac Mini',
        subtitle: 'Nuovi muscoli. Nuovi traguardi.',
        url: `mac_mini.jpg`,
        price: 1999.99,
        category: 'laptop',
        description: 'Il nostro computer desktop più versatile si lancia in una nuova dimensione. Mac mini ora ha il rivoluzionario chip Apple M1, CPU fino a 3 volte più rapida, grafica fino a 6 volte più scattante e il Neural Engine più evoluto, che assicura performance fino a 15 volte migliori per il machine learning. Preparati a lavorare, giocare e creare con una velocità e una potenza che prima d’ora non avresti mai immaginato.',
        io: ['ethernet, wifi, thunderbolt, USB-A, Jack cuffie', 'HDMI 2.0'],
    },
    {   
        id: 2,
        title: 'MacBook Air',
        subtitle: 'C’è una nuova potenza nell’Air.',
        url: `macbook_air.jpg`,
        price: 1299.00,
        category: 'laptop',
        description: 'Ti presentiamo il nuovo MacBook Air: il nostro portatile più sottile e leggero, completamente trasformato dal chip Apple M1. CPU fino a 3,5 volte più veloce. GPU fino a 5 volte più scattante. Il Neural Engine più evoluto di sempre, che assicura performance di machine learning fino a 9 volte migliori. Un’autonomia che su un MacBook Air non si era mai vista. E una tecnologia silenziosa, perché senza ventola. Ha una potenza senza precedenti, ed è pronto a seguirti ovunque.',
        io: ['wifi, thunderbolt, USB-A, Jack cuffie', 'SSD', 'retina']
    },
    {   
        id: 3,
        title: 'MacBook Pro',
        subtitle: 'Potenza allo stato Pro.',
        url: 'macbook_pro.jpg',
        price: 1699.99,
        category: 'portable',
        description: 'Il MacBook Pro più potente di sempre è qui. Ha i velocissimi chip M1 Pro o M1 Max, i primi progettati da Apple per il mondo professionale, ed è capace di performance rivoluzionarie con un’incredibile durata della batteria. E poi ci sono un display Liquid Retina XDR spettacolare, il sistema audio e la videocamera migliori mai visti su un Mac, e tutte le porte che ti servono. MacBook Pro è un portatile di una nuova specie. Ed è un mostro di potenza.',
        io: ['ethernet, wifi, thunderbolt, USB-C, SSD']
    },
    {   
        id: 22,
        title: 'iMac 24"',
        subtitle: 'Eccolo: di’ ciao al nuovo iMac.',
        url: 'imac.png',
        price: 1499.00,
        category: 'all-in-one',
        description: 'Ispirato al meglio di Apple, rivoluzionato dal chip M1. Si fa notare ovunque e si adatta perfettamente al tuo mondo.',
        io: ['wifi, thunderbolt, USB-C, HDMI 2.0, SSD']
    },
    {   
        id: 245,
        title: 'Mac Pro',
        subtitle: 'Il potere di cambiare tutto.',
        url: 'mac_pro.jpg',
        price: 3699.99,
        category: 'desktop',
        description: 'Nasce un Mac estremo, da ogni punto di vista. Con prestazioni, espansione e opzioni di configurazione al top, è il sistema dedicato agli utenti professionali che vogliono superare i limiti del possibile.',
        io: ['ethernet, wifi, thunderbolt, USB-A, Jack cuffie', 'HDMI 2.0']
    },
    {   
        id: 250,
        title: 'iPhone 13 Pro',
        subtitle: 'Super. Ultra. Pro.',
        url: 'iphone.jpg',
        price: 1199.00,
        category: 'smartphone',
        description: 'Un nuovo, sorprendente salto di qualità per le fotocamere. Un display così reattivo che anche i gesti di sempre ti stupiranno. Il chip per smartphone più veloce al mondo. Robustezza eccezionale. E autonomia senza precedenti.',
        io: ['wifi, USB-C, waterproof']
    },
    {   
        id: 313,
        title: 'iPad',
        subtitle: 'Tuttofare. Tuttofacile',
        url: 'ipad.png',
        price: 1999.99,
        category: 'tablet',
        description: 'Potente. Semplice da usare. Versatile. E progettato per fare tutto quello che ti piace. Con il nuovo iPad lavori, giochi, crei, impari e rimani sempre in contatto con chi vuoi. Ed è incredibile anche nel prezzo.',
        io: ['ethernet, wifi, USB-C, Jack cuffie', 'waterproof']
    },
    {   
        id:457,
        title: 'iPhone 12',
        subtitle: 'Veloce che è una meraviglia.',
        url: 'iphone12.jpg',
        price: 1999.99,
        category: 'smartphone',
        description: 'Un chip superpotente. La velocità del 5G. Un sistema evoluto a doppia fotocamera. La resistenza del Ceramic Shield, più robusto di qualsiasi vetro per smartphone. E uno sfolgorante display OLED. iPhone 12 ha proprio tutto. Anche due formati perfetti.',
        io: ['wifi, USB-C, Jack cuffie', 'waterproof']
    }
];


//creiamo le card

const productCont = document.querySelector('.product-conteiner')


for (let i = 0; i < products.length; i++) {
    productCont.innerHTML += `
    <div class="item-card">
        <div class="card-head">
            <h2>${products[i].title}</h2>
            <h3>${products[i].subtitle}</h3>
            <img src="./img/${products[i].url}" alt="">
        </div>
        <div class="d-none item-details">
            <p class="item-description">${products[i].description}</p>
            <h4 class="item-price">€ ${products[i].price}</h4>
            <div class="sub-details">
                <div class="item-category">${products[i].category}</div>
                <div class="item-io">${products[i].io}</div>
            </div>
            <div class="cta">
                <button class="fav-btn cta-btn">
                    <i class="fas fa-heart "></i>
                </button>
                <button class="cart-btn cta-btn">
                    <i class="fas fa-cart-plus"></i>
                </button>
            </div>
        </div>
    </div>
    `
}


const itemCards = document.querySelectorAll('.item-card img');

for (let i = 0; i < itemCards.length; i++) {
    const itemDetails = document.getElementsByClassName('item-details');
    
    itemCards[i].addEventListener('click', function() {
        itemDetails[i].classList.toggle('d-none')
     
    })

}

const cartButton = document.querySelectorAll('.cart-btn')
const cartItem = [];

for (let i = 0; i < cartButton; i++) {
    cartButton[i].addEventListener('click', function() {

        cartItem.push(products[i])
    
        
    })

}
console.log(cartItem);   


const cartValour = document.querySelector('.cart-counter');
const buyBtn = document.querySelectorAll('.buy-btn');









