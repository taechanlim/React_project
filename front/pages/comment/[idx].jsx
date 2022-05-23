const axios = require('axios')
import React, { Fragment ,useState} from "react";
import Link from "next/link";
import { useRouter } from "next/router";


const commentList = (props) => {
    const [values,setValues] = useState({comment:''})
    const list = props.list
    const router = useRouter() //idx값 따오기
    const handleChange = (e) => {
    const {name,value} = e.target
    setValues({
        ...values,
        [name]:value
    })
}
    const token = document.cookie
    const body = {values,token,router}

    const deleteBtn = async (i) => {
        const body = {comment_idx:i}
        const result = await axios.post('http://localhost:4001/api/comment/delete',body)
        alert('삭제되었습니다')
        location.href='/'
    }
    const updateBtn = (i) => {
        console.log('fdsfmsdolkgmsgkm;lgms;lgms;lgmsd;lg!!!!!!',i);
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            if(list.content ==''){
                alert('빈칸은 있을 수 없다.')
                return
            }
            const result = await axios.post('http://localhost:4001/api/comment/write',body) 
            console.log(result);
            if(result.data.errno === 0){
                alert('작성 완료')
                location.href='/'
            }else{
                alert('작성 실패')
            }
        }catch(e){
            console.log(e)
        }
        
        
    }
    return(
        <div>
            <>
                <h1>댓글 쓰기</h1>
                <form onSubmit={handleSubmit}>
                    <input type='text' name="comment" placeholder="내용" onChange={handleChange}></input> <br />
                    <input type='submit' value='작성'></input>
                </form>
                <p>-------------------------------------</p>
            </>
            <Fragment>

                <div>
                    {list?.map((info) => {
                    return (
                    <div key={info.comment_idx}>

                        <div>내용 :{info.comment}</div>
                        <div>작성자 :{info.nickname}</div>
                        <div>작성일자 :{info.date}</div>
                        <button onClick={()=>deleteBtn(info.comment_idx)}>삭제</button>
                        <Link href={`/comment/commentUpdate?feed=${info.idx}=comment=${info.comment_idx}`}><button onClick={()=>updateBtn(info.comment_idx)}>수정</button></Link>
                        <p>-------------------------------------</p>
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