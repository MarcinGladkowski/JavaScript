// source: https://www.youtube.com/watch?v=OMvEQTMC8k0&t=552s&ab_channel=overment


const btn = document.querySelector('.js-count')

// Button listener
const init = () => {
    const element = document.querySelector('.js-display')
    let counter = 0

    return () => {
        counter+=1
        element.textContent = counter
    }
}

const buttonCounter = init()
btn.addEventListener('click',buttonCounter)