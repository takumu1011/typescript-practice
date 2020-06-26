export {};

enum Months {
  January = 1,
  Feburary,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December,
}

console.log(Months.January);
console.log(Months.Feburary);
console.log(Months.December);

// const MonthsJs = {
//   January: 0,
//   Febrary: 1,
//   March: 2,
// };

// console.log(MonthsJs.January);

enum COLORS {
  RED = '#ff0000',
  WHITE = '#ffffff',
  GREEN = '#008000',
  BLUE = '#0000ff',
  // YELLOW = '#ffff00',
  BLACK = '#000000',
}

let green = COLORS.GREEN;
console.log(green);

enum COLORS {
  YELLOW = '#ffff00',
  GRAY = '#808080',
}
console.log(COLORS);
COLORS.YELLOW;
