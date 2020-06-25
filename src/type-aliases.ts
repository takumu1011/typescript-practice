export {};

type Mojiretsu = string;

const fooString: string = 'Hello';
const fooMojiretsu: Mojiretsu = 'Hello';

const example1 = {
  name: 'tkm',
  age: 22,
};

type profile = {
  name: string;
  age: number;
};

const exapmle2: profile = {
  name: 'tkm',
  age: 22,
};

const example3: profile2 = {
  name: 'tkm',
  age: 22,
};

type profile2 = typeof example1;
