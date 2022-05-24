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
         <div class="commentUpdate" style={{margin:'0 auto'}}>
             
            <form onSubmit={handleSubmit}>
                <div style={{marginLeft:'35%',width:'100%' ,height:'100%'}}>
                    <p>{values.comment}</p>
                    <div style={{width:'100%',margin:'0 auto'}}><input name="comment" type="text" placeholder="내용" value={values.comment} onChange={handleChange} style={{width:'30%',margin:'0 auto',border:'1px solid lightgray'}}/></div>
                    <div style={{width:'100%',margin:'0 auto'}}><button type="submit" style={{ background:'#FFFFFF', border:'1.5px solid lightgray',width:'30%',height:'80px',marginTop:'40px'}}>수정 완료</button></div>
                </div>
            </form>
            
        </div>
        </>
    )
}

export default commentUpdate;