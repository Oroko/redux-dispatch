function changeState(state, action){
  switch (action.type) {
    case 'INCREASE_COUNT':
      return {count: state.count + 1}
    default:
      return state;
  }
}

let state = {count: 0}
let action = {type: 'INCREASE_COUNT'}

function render() {
  document.body.textContent = state.count;
}


function dispatch(action){
  state=changeState(state, action) 
  render()

}


dispatch({ type: "INCREASE_COUNT" });
dispatch({ type: "INCREASE_COUNT" });


// state = changeState(state, action)
// console.log(state)


// state = changeState(state, action);
// console.log(state);

// state = changeState(state, action);
// console.log(state);


// state = changeState(state, action);
// console.log(state);

// console.log(changeState(state, action))
// console.log(changeState(state, action));
// console.log(changeState(state, action));
// console.log(changeState(state, action));