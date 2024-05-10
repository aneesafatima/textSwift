import React from 'react'
function ToolBar() {
  return (
    <div className='toolbar'>
      <i className="fa-solid fa-bold toolbar-icons"></i>
      <i class="fa-solid fa-italic toolbar-icons"></i>
      <i class="fa-solid fa-underline toolbar-icons"></i>
      <i class="fa-solid fa-list toolbar-icons"></i>
      <i class="fa-solid fa-list-ol toolbar-icons"></i>
      <i class="fa-solid fa-align-left toolbar-icons"></i>
      <i class="fa-solid fa-align-justify toolbar-icons"></i>
      <i class="fa-solid fa-align-center toolbar-icons"></i>
      <i class="fa-solid fa-droplet toolbar-icons"></i>
      <i class="fa-solid fa-fill toolbar-icons"></i>
      <div className='dropdown'>
        <button className='dropdown-toggle'>Normal<i class="fa-solid fa-angle-down fa-2xs" style={{margin: "3px"}}></i></button>
        <ul className='dropdown-list'>
        <li>roboto</li>
        <li>mullis</li>
        <li>sans</li>
        
        </ul>
      </div>
    </div>
  )
}

export default ToolBar
