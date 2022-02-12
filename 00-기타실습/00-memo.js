const object1 = {};

Object.defineProperty(object1, 'property1', {
  value: 42,
  writable: false
});

console.log(object1);

object1.property1 = 77;
// throws an error in strict mode

console.log(object1.property1);
// expected output: 42
