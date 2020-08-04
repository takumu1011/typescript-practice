export {};

type Profile = {
  name: string;
  age: number;
};

// type Partial<T> = {
//   [P in keyof T]?: T[P];
// };
type PartialProfile = Partial<Profile>;
type PropertyTypes = keyof Profile;

//customaize
type Optional<T> = {
  [P in keyof T]?: T[P] | null;
};

type OptionalProfile = Optional<Profile>;
