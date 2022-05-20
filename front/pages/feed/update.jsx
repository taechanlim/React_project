import React,{useState,useEffect} from 'react'
const axios = require('axios')
import { useCookies } from 'react-cookie';
const Update = ()=>{
    const [values,setValues] = useState({subject:'',content:''})
    const idx = location.href.split('?')[1]
    console.log('여기는 지금 넘어왔',idx);
    
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
                location.href='/'
            }else{
                alert('작성 실패')
            }
        }catch(e){
            console.log(e)
        }
        
        
    }
    return(
        <>
         <div class="feedUpdate">
            <form onSubmit={handleSubmit}>
                <div><input name="subject" type="text" placeholder="제목" value={values.subject} onChange={handleChange}/></div>
                <div><input name="content" type="text" placeholder="내용" value={values.content} onChange={handleChange}/></div>
                <div><button type="submit">피드 업데이트</button></div>
            </form>
        </div>
        </>
    )
}
export default Update;