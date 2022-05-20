const axios = require('axios')
import React, { Fragment } from "react";
import Link from "next/link";


const List = (props) => {
    const list = props.list
    const deleteBtn = async (i) => {
        const body = {idx:i}
        const result = await axios.post('http://localhost:4001/api/feed/delete',body)
        alert('삭제되었습니다')
        location.href='/feed/list'
    }
    const updateBtn = (i) => {
        console.log(i);
    }
    // const openCommentBtn = async (i) => {
    //     const body = {idx:i}
    //     const result = await axios.get('http://localhost:4001/api/comment/list',body)
    // }
    return(
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
                        <button onClick={()=>deleteBtn(info.idx)}>삭제</button>
                        <Link href={`/feed/update?${info.idx}`}><button onClick={()=>updateBtn(info.idx)}>수정</button></Link>
                        <Link href={`/comment/${info.idx}`}><button>댓글보기</button></Link>
                    </div>
                    );
                    })}
                </div>
	</Fragment>
                
            

        </div>
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


export default List