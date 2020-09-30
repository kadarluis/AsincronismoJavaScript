const somthinWillHappen = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey!');
        } else {
            reject('Whoooops!');
        }
    });
};

somthinWillHappen()
    .then(response => console.log(response))
    .catch(err => console.error(err));

const somthinWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if (false) {
            setTimeout(() => {
                resolve('True');
            }, 2000);
        } else {
            const error = new Error('Whooop!');
            reject(error);
        }
    });
};

somthinWillHappen2()
    .then(response => console.log(response))
    .catch(err => console.error(err));

Promise.all([somthinWillHappen(), somthinWillHappen2()])
    .then(response => {
        console.log(response);
    })
    .catch(err => {
        console.error(err);
    });