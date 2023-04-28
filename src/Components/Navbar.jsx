import React from 'react'

function Navbar() {
  return (
    <div className='grid grid-flow-row gap-6'>
      <div className='col-start-1 col-end-2' id='musica-logo'></div>
      <form >
        <input type='search' placeholder='search artists' />
      </form>
    </div>
  )
}

export default Navbar
