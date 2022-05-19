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
                        <div>{info.idx}</div>
                        <div />
                        <div>{info.subject}</div>
                        <div />
                        <div>{info.content}</div>
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