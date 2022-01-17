function num(...args){
    let product = 0;
    for (const arg of args){
        product = arg[0] * arg[1];

    }

    return product;
}

console.log(num(2,3));