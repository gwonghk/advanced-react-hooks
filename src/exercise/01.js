// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import {useReducer} from 'react';

const countReducer = (state, action) => {
  if (action.type === 'INCREMENT') {
    return {
      count: state.count + action.step
    }
  }
}

function Counter({initialCount = 0, step = 1}) {
  const [state, dispatch] = useReducer(countReducer, {
    count: initialCount,
  })
  const {count} = state
  const increment = () => dispatch({type: 'INCREMENT', step})

  return <button onClick={increment}>{count}</button>;
}

function App() {
  return <Counter />;
}

export default App;

