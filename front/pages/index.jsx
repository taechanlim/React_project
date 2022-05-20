import Link from 'next/link'
import List from './feed/list'
const axios = require('axios')
import React, { Fragment,useState,useEffect } from "react";



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
        location.href='/'
    }
    const updateBtn = (i) => {
        console.log(i);
    }

    

    return(
        <>
            -------------메인페이지------------ <br />
            <div>
            <Fragment>
                
                <div>
                    {list?.map((info) => {
                    return (
                    <div key={info.idx}>
                        {/* <Link href={`/user/main/reservation/detail/${info.idx}`}>
                        <input type="button" value={"button" + info.idx} alt="" />
                        </Link> */}
                        <div>글번호 : {info.idx}</div>
                        <div />
                        <div>제목 : {info.subject}</div>
                        <div />
                        <div>내용 :{info.content}</div>
                        <div>작성자 :{info.nickname}</div>
                        {isCookie ? <button onClick={()=>deleteBtn(info.idx)}>삭제</button>
                                  : <div />        
                        }
                        {isCookie ? <Link href={`/feed/update?${info.idx}`}><button onClick={()=>updateBtn(info.idx)}>수정</button></Link>
                                  : <div />
                        }
                        <Link href={`/comment/${info.idx}`}><button>댓글보기</button></Link>
                        <p>-------------------------------------</p>
                    </div>
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