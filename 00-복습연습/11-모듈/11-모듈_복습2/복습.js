const my = require('./Mymodule1.js');
my();



const my2 = require(`./Mymodule2.js`);

console.log(my2.name);
console.log(my2.property.id);
console.log(my2.property.type);
my2.say()
my2.home.getAddress()



const my3 = require('./Mymodule3');
const module_obj = new my3();
module_obj.say();

const my4 = require('./Mymodule4');
my4.say();

// const module_obj2 = new my4();
// module_obj2.say();