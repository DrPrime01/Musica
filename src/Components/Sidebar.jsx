import React from 'react'
import { NavLink } from 'react-router-dom/dist'

function Sidebar() {
  return (
    <aside className='border col-start-1 col-end-2 flex flex-col'>
      <div className='flex flex-col space-y-8 bg-dark-alt px-5 py-7 mb-5' id='sidebar-links'>

      </div>
      <div className='flex flex-col space-y-8 bg-dark-alt px-5 py-7' id='profile-logout'>
      
      </div>
    </aside>
  )
}

export default Sidebar;
