import React,{useState,useEffect} from 'react'
import Router from 'next/router'
const axios = require('axios')
import { useCookies } from 'react-cookie';

const Update = ()=>{
    const [values,setValues] = useState({subject:'',content:''})
    const idx = location.href.split('?')[1]
    
    const handleChange = (e) => {
        
        const {name,value} = e.target
        setValues({
            ...values,
            [name]:value
        })
    }

    const token = document.cookie
    const body = {idx,token,values}

    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            if(values.subject=='' || values.content ==''){
                alert('빈칸은 있을 수 없다.')
                return
            }
            const result = await axios.post('http://localhost:4001/api/feed/update',body)
            if(result.data.errno === 0){
                alert('작성 완료')
                Router.push(`/comment/${idx}`)
            }else{
                alert('작성 실패')
            }
        }catch(e){
            console.log(e)
        }
        
        
    }
    return(
        <>
         <div class="feedUpdate" style={{borderRadius:'5px 5px 5px 5px',border:'1px solid lightgray',width:'15.7%',margin:'0 auto'}}>
            <form onSubmit={handleSubmit}>
                <div><input name="subject" type="text" placeholder="제목" value={values.subject} onChange={handleChange} style={{width:'300px',border:'1px solid lightgray',borderRadius:'5px 5px'}}/></div>
                <div><input name="content" type="text" placeholder="내용" value={values.content} onChange={handleChange} style={{width:'300px',height:'200px',border:'1px solid lightgray',borderRadius:'5px 5px'}}/></div>
                <div><button type="submit" style={{background:'#FFFFFF', border:'1.5px solid lightgray',width:'300px',height:'80px'}}>피드 업데이트</button></div>
            </form>
        </div>
        </>
    )
}
export default Update;