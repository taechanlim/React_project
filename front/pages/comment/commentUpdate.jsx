import React,{useState,useEffect} from 'react'
const axios = require('axios')
import { useCookies } from 'react-cookie';
import { useHistory } from 'react-router-dom';

const commentUpdate = ()=>{
    const [values,setValues] = useState({comment:''})
    const idx = location.href.split('=')[1]
    const comment_idx = location.href.split('=')[3]
    
    
    const handleChange = (e) => {
        
        const {name,value} = e.target
        setValues({
            ...values,
            [name]:value
        })
    }

    const body = {comment_idx,values}

    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            if(values.comment ==''){
                alert('빈칸은 있을 수 없다.')
                return
            }
            const result = await axios.post('http://localhost:4001/api/comment/update',body)
            if(result.data.errno === 0){
                alert('작성 완료')
                location.href=`/`///comment/${idx}
            }else{
                alert('작성 실패')
            }
        }catch(e){
            console.log(e)
        }
        
        
    }
    return(
        <>
         <div class="commentUpdate">
            <form onSubmit={handleSubmit}>
                <div><input name="comment" type="text" placeholder="내용" value={values.comment} onChange={handleChange}/></div>
                <div><button type="submit">수정 완료</button></div>
            </form>
        </div>
        </>
    )
}

export default commentUpdate;