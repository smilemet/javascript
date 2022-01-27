let x = 0;

for (let i = 1; i < 6; i++) {
	let j = 6-i;
	console.log("[ %d, %d ]", i, j);
	x++;
}
console.log("경우의 수는 %d개 입니다.", x);