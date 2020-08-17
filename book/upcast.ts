function toNumber(value: string): any {
  return value;
}

const fiction: number = toNumber('1,000');
fiction.toFixed();
