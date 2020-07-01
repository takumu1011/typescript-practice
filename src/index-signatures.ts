export {};

interface Profile {
  name: string;
  [index: string]: string | number | boolean;
}

let profile: Profile = { name: 'tkm' };

//How to write index signatures
//{ [ index: typeforIndex ]: typeforValue }
profile.name = 'tkm';
profile.age = 22;
profile.nationality = 'Japan';
profile.underTwenty = false;
