type User2 = {
  name: string;
  [k: string]: any;
};

const userA: User2 = {
  name: 'Taro',
  age: 26,
};

type User3 = {
  name: string;
  [k: string]: number | string;
};
