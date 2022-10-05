let rangeInput = document.querySelector("input[type='range']")
let numberInput = document.querySelector("input[type='number']")

function hadleInputChange(event){
    let target = event.target
    
    const min = target.min
    const max = target.max
    const value = target.value

    target.style.backgroundSize = (value - min) * 100 / (max - min) + '% 100%'
}

rangeInput.addEventListener('input', hadleInputChange)

numberInput.addEventListener('input', hadleInputChange)