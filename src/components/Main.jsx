import React from 'react';
import {TopBar,TextArea, ToolBar, BottomBar} from './index.js'
function Main() {
  return (
   <div className='layout'>
   <div className="header">
   <TopBar/>
   </div>
   <div className='content'>
    <ToolBar/>
    <TextArea/>
   </div>
   {/* <Sider>
    sider
   </Sider> */}
   <div className='footer-container'>
    <BottomBar/>
   </div>
   </div>
  )
}

export default Main
