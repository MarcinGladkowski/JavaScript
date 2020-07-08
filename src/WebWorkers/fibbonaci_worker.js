function fib(num) {
    if (num <= 1) return 1;

    return fib(num - 1) + fib(num - 2);
}

onmessage = ({data}) => {
    console.log('onmessage!')
    const result = fib(data)
    postMessage(result)
}

onerror = (error) => {
    console.log('error')
}