
function changeDarkMode(){
    const dmButtom = document.querySelector('#dmButton')
    const dmIcon = document.querySelector('#dmIcon')
    const html = document.querySelector('html')

    let dmPref = localStorage.getItem('dmPref')
    dmButtom.addEventListener('click', () => {
        dmPref = localStorage.getItem('dmPref')
        if(!dmPref){
            localStorage.setItem('dmPref', true)
            html.classList = 'dark-mode'
            dmIcon.src = '/assets/img/sun.svg'
            dmIcon.alt = 'sun'
        }else{
            localStorage.removeItem('dmPref')
            html.classList.toggle('dark-mode')
            dmIcon.src = '/assets/img/moon.svg'
            dmIcon.alt = 'moon'
        }
    })

    if(dmPref){
        html.classList = 'dark-mode'
        dmIcon.src = '/assets/img/sun.svg'
        dmIcon.alt = 'sun'
    }
}

changeDarkMode()    


