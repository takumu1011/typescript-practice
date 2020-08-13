type SomeType = {
  foo: string;
  bar: string;
  baz: string;
};

let someKey: keyof SomeType;

const myObject = {
  foo: 'Foo',
  bar: 'BAR',
  baz: 'BAZ',
};
let myObjectKey: keyof typeof myObject;
