import {useState,useEffect} from 'react'
const axios = require('axios')

const Write = () => {

    const [values,setValues] = useState({userid:'',subject:'',content:''})
    const [submit,setSubmit] = useState(false)
    
    const handleChange = (e) => {
        console.log(e.target.name,e.target.value)
        const {name,value} = e.target
        setValues({
            ...values,
            [name]:value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmit(true)
        
        setTimeout(()=>{
            const result=true //const [result] = await axios.post('http://localhost:4001/api/user/login)
            if(result === true){
                
                location.href='/'
            }else{
                alert('작성 실패')
            }
            setSubmit(false)
        },1000)
    }

    return(
        <>
            <h1>피드 쓰기</h1>
            <form onSubmit={handleSubmit}>
                <input type='text' name="subject" placeholder="제목" onChange={handleChange}></input> <br />
                <input type='file'></input> <br />
                <input type='file'></input> <br />
                <input type='file'></input> <br />
                <input type='text' name="content" placeholder="내용" onChange={handleChange}></input> <br />
                <input type='submit' value='작성' disabled={submit}></input>
            </form>
        </>
    )
}

export default Write