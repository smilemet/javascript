let foo = function() {
    const time = new Date();
    const year = time.getFullYear();
    const month = time.getMonth();
    const date = time.getDate();
    const hour = time.getHours();
    const minute = time.getMinutes();
    const second = time.getSeconds();
    console.log(`${year}-${month}-${date} ${hour}:${minute}:${second}`);
};

foo();