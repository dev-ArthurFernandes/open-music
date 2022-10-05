/* Desenvolva sua lógica aqui ... */
function renderCard(array){
    const cardFeed = document.querySelector(".cardFeed")

    cardFeed.innerHTML = ''

    array.forEach(product => {
        
        let productTitle    = product.title
        let productYear     = product.year
        let productBand     = product.band
        let productPrice    = product.price
        let productImage    = product.img
        let productId       = product.id

        const card          = document.createElement('li')
        const imgDiv        = document.createElement('div')
        const img           = document.createElement('img')
        const cardContent   = document.createElement('div')
        const spanBand      = document.createElement('span')
        const bandTitle     = document.createElement('p')
        const bandYear      = document.createElement('p')
        const spanTitle     = document.createElement('span')
        const title         = document.createElement('h2')
        const spanPrice     = document.createElement('span')
        const price         = document.createElement('input')
        const buyButton     = document.createElement('button')

        card.classList      = 'card'
        
        img.src             = productImage
        img.alt             = productTitle
        
        cardContent.id      = 'cardContent'
        spanBand.id         = 'band'
        bandTitle.innerText = productBand
        bandYear.innerText  = productYear
        spanBand.append(bandTitle, bandYear)

        spanTitle.id        = 'title'
        title.innerText     = productTitle
        spanTitle.append(title)
        
        spanPrice.id        = 'price'
        price.type          = 'text'
        price.value         = productPrice.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
        price.readOnly      = true
        buyButton.id        = 'buyButton'
        buyButton.innerText = 'Comprar'
        spanPrice.append(price, buyButton)

        cardContent.append(spanBand, spanTitle, spanPrice)
        imgDiv.appendChild(img)
        card.append(imgDiv, cardContent)

        cardFeed.append(card)
    })
}