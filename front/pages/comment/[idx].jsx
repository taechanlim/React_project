const axios = require('axios')
import React, { Fragment } from "react";
import Link from "next/link";
import { useRouter } from "next/router";


const commentList = (props) => {
    const list = props.list
    const router = useRouter()
    return(
        <div>
            <Fragment>

                <div>
                    {list?.map((info) => {
                    return (
                    <div key={info.idx}>

                        <div>내용 :{info.comment}</div>
                        <div>작성자 :{info.nickname}</div>

                        {/* 좋아요 구현하기 */}

                        {/* <button onClick={()=>deleteBtn(info.idx)}>삭제</button>
                        <Link href={`/feed/update?${info.idx}`}><button onClick={()=>updateBtn(info.idx)}>수정</button></Link> */}
                    </div>
                    );
                    })}
                </div>
	        </Fragment>
        </div>
    )
}


export async function getServerSideProps(context){
    const idx =context.query
    const body = idx

    const response = await axios.post('http://localhost:4001/api/comment/list',body)
    
    const list = response.data.result
    
    return{
        props:{
            list:list
        }
    }
}


export default commentList