// async & await


// 1. async
async function fetchUser() {
    // 뭔가 오래걸리는 코드...
    return 'ellie';
}

const user = fetchUser();
user.then(console.log);
console.log(user);

/* 브라우저
Promise
[[Prototype]]: Promise
[[PromiseState]]: "fulfilled"
[[PromiseResult]]: "ellie"
*/



// 2. await
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(2000);
    return '🍎';
}

// function getBanana() {
//     return delay(3000)
//     .then(() => '🍌');
// }

async function getBanana() {
    await delay(1000);
    return '🍌';
}



// 콜백 지옥
function pickFruits() {
    return getApple().then(apple => {
        return getBanana().then(banana => `${apple} + ${banana}`);
    });
}


// 기본 코드
async function pickFruits() {
    const apple = await getApple();
    const banana = await getBanana();
    return `${apple} + ${banana}`;
}


// 에러 처리 코드
async function pickFruits() {
    try {
        const apple = await getApple();
        const banana = await getBanana();
        return `${apple} + ${banana}`;
    } catch(error) {
        // ...
    }
}


// apple과 banana는 독립적이므로 병렬처리한 코드 (이렇게 안씀)
async function pickFruits() {
    const applePromise = getApple();
    const bananaPromise = getBanana();
    const apple = await applePromise;
    const banana = await bananaPromise;
    return `${apple} + ${banana}`;
}

pickFruits().then(console.log);


// 병렬처리
function pickAllFruits() {
    return Promise.all([getApple(), getBanana()])
    .then(fruits => fruits.join(' + '));
}

pickAllFruits().then(console.log);


function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);




// const userStorage2 = new UserStorage2();
// const id2 = prompt('enter your id');
// const password2 = prompt('enter your password');
// userStorage2
// .loginUser(id2, password2)
// .then(userStorage2.getRoles)
// .then(user => alert(`Hello ${user.name}, you have a ${user.role} role`))
// .catch(console.log)