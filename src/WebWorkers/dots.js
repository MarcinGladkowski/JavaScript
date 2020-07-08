const initDots = () => {
    setInterval(() => {
       let button =  document.createElement('button')
       button.innerHTML = 'button'
       document.body.appendChild(button);
    }, 250)
}

export default initDots;