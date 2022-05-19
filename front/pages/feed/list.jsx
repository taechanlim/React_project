const axios = require('axios')
// import { useEffect } from 'react'
import React, { Fragment } from "react";
// import Link from "next/link";

const List = (props) => {
    const list = props.list
    
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