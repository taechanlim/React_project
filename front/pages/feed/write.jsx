import {useState,useEffect} from 'react'
const axios = require('axios')

const Write = () => {
    const [values,setValues] = useState({subject:'',content:''})
    
    
    const handleChange = (e) => {
        
        const {name,value} = e.target
        setValues({
            ...values,
            [name]:value
        })
    }
    const token = document.cookie
    const body = {values,token}
    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            const result = await axios.post('http://localhost:4001/api/feed/write',body)
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
            <h1>피드 쓰기</h1>
            <form onSubmit={handleSubmit}>
                <input type='text' name="subject" placeholder="제목" onChange={handleChange}></input> <br />
                <input type='text' name="content" placeholder="내용" onChange={handleChange}></input> <br />
                <input type='submit' value='작성'></input>
            </form>
        </>
    )
}

export default Write