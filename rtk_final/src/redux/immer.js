import produce from 'immer';

const baseState = [
  {
    todo: 'Learn typescript',
    done: true,
  },
  {
    todo: 'Try immer',
    done: false,
  },
];

// Immer provides a function called produce, which accepts two arguments: your original state, and a callback function. // The callback function is given a "draft" version of that state, and inside the callback,
// it is safe to write code that mutates the draft value.
// Immer tracks all attempts to mutate the draft value and then replays those mutations
// using their immutable equivalents to create a safe, immutably updated result:

const nextState = produce(baseState, draftState => {
  // "mutate" the draft array
  draftState.push({ todo: 'Tweet about it' });
  // "mutate" the nested state
  draftState[1].done = true;
});

console.log(baseState === nextState);
// false - the array was copied
console.log(baseState[0] === nextState[0]);
// true - the first item was unchanged, so same reference
console.log(baseState[1] === nextState[1]);
// false - the second item was copied and updated
