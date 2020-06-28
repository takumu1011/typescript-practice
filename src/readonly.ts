export {};

class VisaCard {
  // readonly owner: string;

  constructor(public readonly owner: string) {}
}

let myVisaCard = new VisaCard('tkm');
console.log(myVisaCard.owner);
// myVisaCard.owner = 'sumikawa';
