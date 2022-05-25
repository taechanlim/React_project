import {useState,useEffect} from 'react'
const axios = require('axios')
import Img from './imgUpload'
import { Input, Space } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import Router from 'next/router'

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
            if(values.subject=='' || values.content ==''){
                alert('빈칸은 있을 수 없다.')
                return
            }
            const result = await axios.post('http://localhost:4001/api/feed/write',body)
            if(result.data.errno === 0){
                alert('작성 완료')
                Router.push('/')
            }else{
                alert('작성 실패')
            }
        }catch(e){
            console.log(e)
        }
        
        
    }

    return(
        <>
        <div style={{width:'27%',height:'50%',margin:'0 auto',border:'1px solid lightgray',marginTop:'55px',borderRadius:'10px 10px 10px 10px'}}>
            <h3 style={{fontWeight:'bold'}}>피드 쓰기</h3>
            <form onSubmit={handleSubmit}>
                <Space direction="vertical">
                        <Input
                        name="subject" onChange={handleChange}
                        placeholder="input subject"
                        />
                        <Input
                        name="content" onChange={handleChange}
                        placeholder="input content"
                        />
                    </Space>
                <input type='submit' value='작성' style={{background:'#FFFFFF', border:'1.5px solid lightgray',width:'200px',height:'32px',marginLeft:'120px'}}></input>
            </form>
            <Img/>
        </div>
        </>
        
    )
}

export default Write