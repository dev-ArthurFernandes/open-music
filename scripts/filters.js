const filterButtons = document.querySelectorAll(".filter")
let filterId      = 0
function handlingFilter(){

    let filteredArray = products.filter(product => product.price < rangeInput.value)

    if(filterId){
        filteredArray = filteredArray.filter(product => product.category === filterId)
    }
    
    renderCard(filteredArray)    
}

handlingFilter()

rangeInput.addEventListener('input', handlingFilter)

addEventListener('click', () => {
    filterButtons.forEach(button => {
        if(event.path[0].id == button.id){
            filterId = Number(button.id)
            handlingFilter()
        }
    })
})