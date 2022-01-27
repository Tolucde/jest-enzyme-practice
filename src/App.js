import React, { useState } from 'react'

const App = () => {
  const [counter, setCounter] = useState(0)
  return (
    <div style={{ padding: '100px' }}>
      <div style={{ fontSize: '50px' }} className='counter-display'>
        {counter}
      </div>
      <button>INCREASE</button>
    </div>
  )
}

export default App
