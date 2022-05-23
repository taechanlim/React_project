const axios = require('axios')
import React, { Fragment ,useState} from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Input, Space,Card } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
const { Meta } = Card;


const commentList = (props) => {
    const [values,setValues] = useState({comment:''})
    const list = props.list
    const list2 = props.list2
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
            <div  style={{background:'#FAFAFA'}}>
            <Fragment>
                
                <div>
                    {list2?.map((info) => {
                    return (
                        <>
                        
                    <div key={info.idx} style={{marginLeft:'34%',marginRight:'34%'}}>
                        {/* <Link href={`/user/main/reservation/detail/${info.idx}`}>
                        <input type="button" value={"button" + info.idx} alt="" />
                        </Link> */}
                        <Card
                        hoverable
                        style={{
                          width: 600,
                          marginTop:30,
                          border:'1px solid lightgray',
                        }}
                        
                      >
                        <div />
                        <div />
                        <div style={{fontWeight:'bold'}}>{info.nickname}</div>
                        <div >{info.content}</div>

                        <Card hoverable
                        style={{
                          width: 550,
                          marginTop:50,
                          minWidth:550,
                          minHeight:685,
                          maxWidth:550,
                          maxHeight:685
                        }} cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}/>
                        </Card>
                    </div>
                    </>
                    );
                    })}
                </div>
	        </Fragment> 
        </div>

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
    const response2 = await axios.post('http://localhost:4001/api/feed/list2',body)
    const list = response.data.result
    const list2 = response2.data.result
    return{
        props:{
            list:list,
            list2:list2
        }
    }
}


export default commentList