import React from 'react'
import {Layout} from 'antd';
import {TopBar,TextArea, ToolBar, BottomBar} from './index.js'
const { Header, Sider, Content, Footer } = Layout;
function Main() {
  return (
   <Layout className='layout'>
   <Header className="header">
   <TopBar/>
   </Header>
   <Content>
    <ToolBar/>
    <TextArea/>
   </Content>
   {/* <Sider>
    sider
   </Sider> */}
   <Footer className='footer-container'>
    <BottomBar/>
   </Footer>
   </Layout>
  )
}

export default Main
