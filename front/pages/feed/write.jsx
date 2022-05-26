import {useState,useEffect} from 'react'
const axios = require('axios')
import { Input, Space } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import Router from 'next/router'

const Write = () => {
    const [values,setValues] = useState({subject:'',content:''})
    const [contents, setContents] = useState("");
    const [uploadedImg, setUploadedImg] = useState({
      fileName: "",
      fillPath: ""
    });
    const handleChange = (e) => {
        
        const {name,value} = e.target
        setValues({
            ...values,
            [name]:value
        })
    }
    const onChange = e => {
        setContents(e.target.files[0]);
    };
    const token = document.cookie
    
    

    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            if(values.subject=='' || values.content =='' || !contents ){
                alert('작성을 완료해주세요! (글 혹은 사진이 비어있으면 안됨)')
                return
            }else{
                if(contents){
                    const formData = new FormData();
                    formData.append("img", contents); 
                    formData.append("subject",values.subject);
                    formData.append("content",values.content);
                    formData.append("token",token);
                    const result = await axios.post("http://localhost:4001/api/feed/write",formData)
                        
                    if(result.data.errno === 0){
                        alert('작성 완료')
                        Router.push('/')
                    }else{
                        alert('작성 실패')
                    }
                }
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
                <input type="file" onChange={onChange}/>
                <input type='submit' value='작성' style={{background:'#FFFFFF', border:'1.5px solid lightgray',width:'200px',height:'32px',marginLeft:'120px'}}></input>
            </form>

        </div>
        </>
        
    )
}

export default Write