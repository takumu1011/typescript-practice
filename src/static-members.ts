export {};

class Me {
  static isProgrammer: boolean = true;
  static firstName: string = 'Takumu';
  static lastName: string = 'Sumikawa';

  static work() {
    return `Hey, guys! Thist is ${this.firstName}! Are you interested in TypeScript? Let's dive into Typescript!`;
  }
}

// let me = new Me();
// console.log(me.isProgrammer);
console.log(Me.isProgrammer);
console.log(Me.work());
