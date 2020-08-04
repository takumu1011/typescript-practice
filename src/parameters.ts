export {};

const debugProfile = (name: string, age: number) => {
  console.log({ name, age });
};

debugProfile('Max', 43);

type Profile = Parameters<typeof debugProfile>;

type MyParameters<T extends (...args: any) => any> = T extends (
  ...args: infer P
) => any
  ? P
  : never;
