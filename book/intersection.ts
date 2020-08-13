function returnNever(): never {
  throw new Error();
}
//string&number&booleanはnever型として解釈されエラーは出ない
let unexistenceType: string & number & boolean = returnNever();
