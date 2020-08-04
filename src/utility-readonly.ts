export {};

type Profile = {
  name: string;
  age: number;
};

const me: Profile = {
  name: 'Max',
  age: 43,
};

me.age++;
type PersonalDataType = Readonly<Profile>;

const friend: PersonalDataType = {
  name: 'Shigeru',
  age: 40,
};
// friend.age++;

type YomitoriSenyo<T> = {
  readonly [P in keyof T]: T[P];
};

type YomitoriSenyoProfile = YomitoriSenyo<Profile>;
