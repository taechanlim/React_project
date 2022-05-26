import React,{useEffect, useState} from "react";
import styled from 'styled-components';
import { UserOutlined, HomeOutlined } from '@ant-design/icons';
const axios = require('axios')

//   padding: 0;
//   text-align: center;
//   font-weight: bold;
//   font-size: 20px;
//   -webkit-box-shadow: 2px 1px 5px 0px rgba(0,0,0,0.26);
//   -moz-box-shadow: 2px 1px 5px 0px rgba(0,0,0,0.26);
//   box-shadow: 2px 1px 5px 0px rgba(0,0,0,0.26);
//   background: #F0F3F4

function Main(props) {
    const userdata = props.list[0]
    const userimg = props.list2.result[0]
    console.log(userimg);
  return (
    <>
      <div className="header" style={{padding:'20px',textAlign:'center',fontWeight:'bold',fontSize:'20px',boxShadow:'2px 1px 5px 0px rgba(0,0,0,0.26)',backgroundColor:'#F0F3F4'}}>Welcome To {userdata.nickname}'S MiniHomepage</div>
        
         <div className="content"  style={{float:'left',display:'inline-block',width:'20%',height:'700px',padding:'20px',textAlign:'center',fontWeight:'bold',fontSize:'15px',boxShadow:'2px 1px 5px 5px rgba(0,0,0,0.26)',backgroundColor:'#F0F3F4',borderRadius:'0px 10px 10px 0px',marginTop:'10px'}}>
           <p>닉네임:</p>
           <p>{userdata.nickname}</p>
           <p>phone:</p>
           <p>{userdata.phonenumber}</p>
           <p>지갑주소:</p>
           <p>{userdata.wallet}</p>

           {/* 영광적인 프로필 이미지 */}
           <div>{userimg ? <img src={`../static/savedImg/${userimg.filename}`} style={{marginTop:'150px',width:'300px',height:'250px'}} />
                         : <div style={{marginTop:'150px',width:'300px',height:'250px',border:'1px solid lightgray',borderRadius:'50%'}}><p style={{marginTop:'40%'}}>프로필 이미지가 없습니다</p></div>}
           </div>
          
         </div>
         <div className="content2" style={{float:'right',marginRight:'10px',display:'inline-block',width:'78%',height:'700px',padding:'20px',textAlign:'center',fontWeight:'bold',fontSize:'15px',boxShadow:'2px 1px 5px 5px rgba(0,0,0,0.26)',backgroundColor:'#F0F3F4',borderRadius:'10px 10px 10px 10px',marginTop:'10px'}}>
            
           
           {/* 미니룸 들어가는 div */}
           <div style={{position:'absolute',zIndex:'1'}}><img src="/static/miniroom.png" style={{float:'left',width:'1300px',marginLeft:'6%'}}/></div>
           
           
           {/* NFT 들어가는 div */}
           <div style={{transform:'rotate(-25deg)',borderRadius:'50%',position:'absolute',zIndex:'5',width:'18%',height:'37%',border:'1px solid gray',marginLeft:'10%',marginTop:'2%'}}><img src="/static/따봉도치.png" style={{transform:'rotate(-25deg)',borderRadius:'50%',zIndex:'5',width:'100%',height:'100%'}}></img></div>
         </div>
      </>
  );
}

export async function getServerSideProps(context){
  const nickname = context.query
  const body={nickname}
  const response = await axios.post('http://localhost:4001/api/user/info',body)
  const response2 = await axios.post('http://localhost:4001/api/upload/userimg',body)
  const list = response.data.result
  const list2 = response2.data.result
  console.log('여긴 리스트2',list2);
  return{
      props:{
          list:list,
          list2:list2
      }
  }
}


// const StyledHeader = styled.header`

// `
 
// const StyledContent = styled.content`
//   width:20%;
//   height: 100vh;
//   padding: 10px;
//   overflow: initial;
//   /* border:1px solid black; */
//   border-radius:0px 10px 10px 0px;
//   margin-top:10px;
//   box-shadow: 2px 1px 5px 5px rgba(0,0,0,0.26);
// `
// const StyledContent2 = styled.content2`
//   width:60%;
//   height: 100vh;
//   padding: 10px;
//   overflow: initial;
//   /* border:1px solid black; */
//   border-radius:0px 10px 10px 0px;
//   margin-top:10px;
//   box-shadow: 2px 1px 5px 5px rgba(0,0,0,0.26);
// `





export default Main
