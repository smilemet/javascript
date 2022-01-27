for (let i = 2; i < 10; i++) {
    console.group("구구단 %d단", i);
    for (let j = 1; j < 10; j++) {
        console.log("%d x %d = %d", i, j, i*j);
    }
    console.groupEnd();
}