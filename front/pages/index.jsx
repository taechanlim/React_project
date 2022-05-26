import Link from 'next/link'
import Router from 'next/router'
import List from './feed/list'
const axios = require('axios')
import React, { Fragment,useState,useEffect } from "react";
import { Card ,Popover, Button} from 'antd';
const { Meta } = Card;


const Index = (props) => {
    const list = props.list
    
    const [isCookie,setisCookie] = useState()
    
    const cookiecheck = () => {
        if(document.cookie){
            const token = document.cookie
            
            const [,payload,] = token.split('.')
            const decodingPayload = Buffer.from(payload,'base64').toString()
            const nickname = JSON.parse(decodingPayload).nickname
            const matchnickname = list.map(v=>v.nickname)
            
            for (let i=0;i<matchnickname.length;i++){
                // console.log(matchnickname[i])
                if(matchnickname[i] == nickname){setisCookie(true)}
            }
            
        }
    }
    useEffect(()=>{
        cookiecheck()
        
    },[isCookie]) 

    const deleteBtn = async (i) => {
        const body = {idx:i}
        
        const result = await axios.post('http://localhost:4001/api/feed/delete',body)
        console.log(result);
        alert('삭제되었습니다')
        Router.push('/')
    }
    const updateBtn = (i) => {
        console.log(i);
    }
    
    

    return(
        <>
            <div  style={{background:'#FAFAFA' }}>
            <Fragment>
                
                <div>
                    {list?.map((info) => {
                    return (
                        <>
                        
                    <div key={info.idx} style={{width:'30%',margin:'0 auto'}}>
                        {/* <Link href={`/user/main/reservation/detail/${info.idx}`}>
                        <input type="button" value={"button" + info.idx} alt="" />
                        </Link> */}
                        <Card
                        hoverable
                        style={{
                          width: 600,
                          marginTop:30,
                          border:'1px solid lightgray',
                          borderRadius:'10px 10px'
                        }}
                        
                      >
                        <div />
                        <div />
                        <div style={{fontWeight:'bold',fontSize:'40px'}}>{info.nickname}</div>
                        <div style={{fontSize:'25px',marginTop:'10px'}}>{info.content}</div> 
                        <div style={{fontSize:'15px',marginTop:'10px'}}>{info.date}</div> 
                        
                        {isCookie ? <button onClick={()=>deleteBtn(info.idx)} style={{width:'100px',background:'#FFFFFF', border:'1.5px solid lightgray',marginRight:'10px',marginTop:'20px',color:'red'}}>삭제</button>
                                  : <div />        
                        }
                        {isCookie ? <Link href={`/feed/update?${info.idx}`}><button onClick={()=>updateBtn(info.idx)} style={{width:'100px',background:'#FFFFFF', border:'1.5px solid lightgray',marginRight:'10px'}}>수정</button></Link>
                                  : <div />
                        }
                        <Link href={`/comment/${info.idx}`}><button style={{background:'#FFFFFF', border:'1.5px solid lightgray',marginRight:'10px',width:'100px',color:'blue'}}>댓글보기</button></Link>
                        <Card hoverable
                        style={{
                          width: 550,
                          marginTop:50,
                          height:550,
                          minWidth:550,
                          minHeight:550,
                          maxWidth:550,
                          maxHeight:550,
                        }} cover={<img src={`/static/feedImg/${info.filename}`} style={{width:'550px',height:'550px'}}/>}/>
                        </Card>
                    </div>
                    </>
                    );
                    })}
                </div>
	        </Fragment> 
        </div>
        </>
        
    )

}
export async function getServerSideProps(){
    
    const response = await axios.get('http://localhost:4001/api/feed/list')
    
    const list = response.data.result
    
    return{
        props:{
            list:list
        }
    }
}







export default Index