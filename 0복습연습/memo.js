const data = {
	name: 'Dave',
	age: 20,
	brand: 'fun-coding',
	get_message: function() {
		return 'Hello! You can do it!'
	}
}

console.log(Object.entries(data)); // [ ['name', 'Dave'], ... ]
console.log(Object.values(data)); // [ ['name', 'Dave'], ... ]