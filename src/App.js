import React, { useState } from 'react'

const App = () => {
  const [counter, setCounter] = useState(1)
  return (
    <div data-test='component-app' style={{ padding: '100px' }}>
      <div
        data-test='counter-display'
        style={{ fontSize: '50px' }}
        className='counter-display'>
        {counter}
      </div>
      <button
        onClick={() => setCounter(counter + 1)}
        data-test='button-increase'>
        INCREASED
      </button>
      <button
        onClick={() => setCounter(counter - 1)}
        data-test='button-decrease'>
        DECREASED
      </button>
    </div>
  )
}

export default App
