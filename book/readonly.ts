type State = {
  readonly id: number;
  name: string;
};

const state: State = {
  id: 1,
  name: 'Taro',
};

// const state: Readonly<State> = {
//   id: 1,
//   name: 'Taro';
// }

state.name = 'Hanako';
state.id = 2;
