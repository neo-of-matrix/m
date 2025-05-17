interface State {
  age: number;
}
type Action = {
  type: "incremented_age";
};
function stateReducer(state: State, action: Action) {
  switch (action.type) {
    case 'incremented_age': {
      return {
       age: state.age + 1,
      };
    }
  }
  throw Error('Unknown action: ' + action.type);
}
export { stateReducer };