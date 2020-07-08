import initDots from './dots.js';
import fibonacci from './fibbonaci.js';
console.log('app.js')

initDots();

const index = 19;

if(!(window.Worker)) {
    throw Error('Worker is not enable!');
}

const calcButton = document.getElementById('calculate')
const calcResult = document.getElementById('calc_result')

calcButton.addEventListener('click', (event) => {
    calcResult.innerHTML = fibonacci(index)
})

const webWorker = document.getElementById('web_worker')
const calcWebWorkerResult = document.getElementById('web_worker_result')

webWorker.addEventListener('click', () => {
    const worker = new Worker('./fibbonaci_worker.js')

    worker.addEventListener('message', ({data}) => {
        calcWebWorkerResult.innerHTML = data;
        worker.terminate();
    })

    worker.postMessage(index);
})


