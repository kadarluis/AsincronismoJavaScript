const doSomthingAsync = () => {
    return new Promise((resolve, reject) => {
        (true) ?
        setTimeout(() => resolve('Do somthing Async'), 3000): reject(new Error('Test Error'));
    });
};

const doSomthing = async() => {
    const something = await doSomthingAsync();
    console.log(something);
};

console.log('Before1');
doSomthing();
console.log('After1');

const anotherFuncion = async() => {
    try {
        const something = await doSomthingAsync();
        console.log(something);
    } catch (error) {
        console.error(error);
    }
};

console.log('Before2');
anotherFuncion();
console.log('After2');