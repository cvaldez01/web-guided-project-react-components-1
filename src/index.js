import React, { useState } from 'react'
import { render } from 'react-dom'

/*
💥💥💥 Rules when DECLARING a React component 💥💥💥
  - Name is capitalized
  - Takes an object ("props") as its one argument
  - Must return SOMETHING (null, empty string, elements...)
  - React provides some built-in components that return HTML elements (h1, div, span...)
  - Attribute names with dashes are camelCased (except data- & aria-)
  - The `class` attribute is `className`, `for` attribute is `htmlFor`
  - We can INTERPOLATE 🔥 js expressions 🔥 using curly brackets
  - We interpolate attribute values and content
*/

/*
💥💥💥 Rules when USING a React component 💥💥💥
  - Components are utilized (invoked?) so we may obtain elements
  - Instead of invoking the component with parens, we invoke with < />
  - Instead of passing args with parens, we pass them with attribute-like syntax
  - Don't forget all tags need to close correctly
*/

function App(props) {
    const [count,setCount] = useState(0);
    const [weapon,setWeapon]= useState('rock');

  return (
    <div className='container'>
      <h1>Welcome to React, Web {props.cohort}</h1>
  <p> My name is {props.name}</p>
    <h2>the count is : {count}</h2>
  <button onClick={ e => setCount(count + 1) }>Increase</button>
  <button onClick={ e => setCount(count - 1) }>Decrease</button>
  <button onClick={ e => setCount(0) }>Reset Counter</button>

  <h3> the weapon state is :{weapon}</h3>
    <button onClick={e => setWeapon('paper')}>Paper</button>
    <button onClick={e => setWeapon('Scissor')}>Scissor</button>
    </div>
  )
}

render(
  <App cohort='37' name='Claudio' />,
  document.querySelector('#root')
)
