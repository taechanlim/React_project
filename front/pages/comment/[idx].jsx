const axios = require('axios')
import React, { Fragment ,useState} from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Input, Space } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';


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
                <div style={{width:'25%',height:'50%',border:'1px solid lightgray',marginLeft:'38%'}}>
                <h1>댓글 쓰기</h1>
                <form onSubmit={handleSubmit}>
                    <Space direction="vertical">
                        <Input
                        name="comment" onChange={handleChange}
                        placeholder="input comment"
                        />
                    </Space>
                    <input type='submit' value='작성' style={{background:'#FFFFFF', border:'1.5px solid lightgray',width:'200px',height:'32px',marginLeft:'50px'}}></input>
                </form>
                </div>
            </>
            <Fragment>

                <div >
                    {list?.map((info) => {
                    return (
                    <div key={info.comment_idx} style={{width:'15%',height:'50%',border:'1px solid lightgray',marginLeft:'43%'}}>

                        
                        <div style={{fontWeight:'bold'}}>{info.nickname}</div>
                        <div>{info.comment}</div>
                        <div>{info.date}</div>
                        <button onClick={()=>deleteBtn(info.comment_idx) } style={{background:'#FFFFFF', border:'1.5px solid lightgray',marginRight:'10px',marginTop:'20px'}}>삭제</button>
                        <Link href={`/comment/commentUpdate?feed=${info.idx}=comment=${info.comment_idx}`}><button onClick={()=>updateBtn(info.comment_idx)}style={{background:'#FFFFFF', border:'1.5px solid lightgray',marginRight:'10px',marginTop:'20px'}}>수정</button></Link>
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