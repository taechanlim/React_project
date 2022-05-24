import React,{useEffect, useState} from "react";
import { Layout } from 'antd';
import styled from 'styled-components';
import { UserOutlined, HomeOutlined } from '@ant-design/icons';
const { Header, Content, Footer } = Layout;
const axios = require('axios')




function Main(props) {
    const userdata = props.list[0]
    console.log(userdata)
  return (
      <Layout>
        <StyledHeader>Welcome To {userdata.nickname}'S MiniHomepage</StyledHeader>
        <StyledContent>
         <div>
           <ul>
             <li>닉네임:{userdata.nickname}</li>
             <li>phone:{userdata.phonenumber}</li>
             <li>지갑주소:{userdata.wallet}</li>
           </ul>
             
         </div>
        </StyledContent> 
        <Footer style={{ textAlign: 'center' }}>from ... </Footer>
      </Layout>
  );
}


const StyledHeader = styled(Header)`
  padding: 0;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  -webkit-box-shadow: 2px 1px 5px 0px rgba(0,0,0,0.26);
  -moz-box-shadow: 2px 1px 5px 0px rgba(0,0,0,0.26);
  box-shadow: 2px 1px 5px 0px rgba(0,0,0,0.26);
  background: #F0F3F4
`
 
const StyledContent = styled(Content)`
  height: 100vh;
  padding: 10px;
  overflow: initial;
`
export async function getServerSideProps(context){
    const nickname = context.query
    const body={nickname}
    const response = await axios.post('http://localhost:4001/api/user/info',body)
    
    const list = response.data.result
    return{
        props:{
            list:list,
        }
    }
}


export default Main
