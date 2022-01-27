let x = 0;
let i = 1;

while (i <= 10) {
	x += i;
	console.log("i=%d, x=%d", i, x);
	i++;
}

console.log("1부터 10까지의 합: " + x)

/*
i=1, x=1
i=2, x=3
i=3, x=6
i=4, x=10
i=5, x=15
i=6, x=21
i=7, x=28
i=8, x=36
i=9, x=45
i=10, x=55
1부터 10까지의 합: 55
*/