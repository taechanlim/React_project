import React, { useState } from "react"
const axios = require('axios')
import { Input, Space } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import Router from 'next/router'
const BASE_URL = "http://localhost:4001/api";


const Register = () => {
    const [userid,setUserid] = useState('')
    const [nickname,setNickname] = useState('')
    const [userpw,setUserpw] = useState('')
    const [confirmPassword,setConfirmPassword] = useState('')
    const [phonenumber,setPhonenumber] = useState('')
    const [content, setContent] = useState("");
    const [uploadedImg, setUploadedImg] = useState({
      fileName: "",
      fillPath: ""
    });

    const onNameHandler = (event) =>{
        setUserid(event.target.value)
    }
    const onNickname = (event) =>{
        setNickname(event.target.value)
    }
    const onPasswordHandler = (event) =>{
        setUserpw(event.target.value)
    }
    const onConfirmPasswordHandler = (event)=>{
        setConfirmPassword(event.target.value)
    }
    const onPhoneHandler = (event)=>{
        setPhonenumber(event.target.value)
    }
    const onChange = e => {
        setContent(e.target.files[0]);
    };

    const body = {userid,userpw,nickname,phonenumber}

    const onSubmit = async (event) =>{
        event.preventDefault()
        try{
            if(userid=='' || nickname =='' || userpw=='' || confirmPassword==''|| phonenumber==''){
                alert('빈칸은 있을 수 없다.')
            }else if(userpw !== confirmPassword){
                alert('비밀번호 확인 부탁.')
            }
            else{
                const result = await axios.post('http://localhost:4001/api/user/register',body)
                if(content){
                    const formData = new FormData();
                    formData.append("img", content); 
                    formData.append("token",nickname)
                    axios.post("http://localhost:4001/api/upload/img",formData).then(res => {
                        
                        // console.log(fileName); 
                        setUploadedImg({ fileName, filePath: `${BASE_URL}/img/${fileName}` });
                        alert("The file is successfully uploaded");
                        
                    }).catch(err => {
                        console.error(err);
                    });
                }
                
                

                if(result.data.errno === 0){
                    alert('계정이 생성되었다.')
                    Router.push('/user/login')
                }
            }
            } catch(error){
                alert('응 아니되오')
            }

        
    
          

        
    
    }
    return(
        <div class="loginRegister" style={{border:'1px solid lightgray',width:'20%',margin:'0 auto',marginTop:'55px',background:'#ffffff'}}>
            <form onSubmit={onSubmit}>
                    <Space direction="vertical">
                        <Input
                        name="userid" onChange={onNameHandler}
                        placeholder="input userid"
                        style={{width:'149%'}}
                        />
                        <Input
                        name="nickname" onChange={onNickname}
                        placeholder="input nickname"
                        style={{width:'149%'}}
                        />
                        <Input.Password
                        name="userpw" onChange={onPasswordHandler}onPhoneHandler
                        placeholder="input password"
                        style={{width:'149%'}}
                        iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                        />
                        <Input.Password
                        name="userpw" onChange={onConfirmPasswordHandler}
                        placeholder="input password"
                        style={{width:'149%'}}
                        iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                        />
                        <Input
                        name="phonenumber" onChange={onPhoneHandler}
                        placeholder="input phone number"
                        style={{width:'149%'}}
                        />
                        <input type="file" onChange={onChange}/>
                    </Space>
                <div><button type="submit"style={{background:'#FFFFFF', border:'1.5px solid lightgray',width:'100%',height:'80px',marginTop:'40px'}} >계정 생성</button></div>
            </form>
        </div>
    )
}

export default Register