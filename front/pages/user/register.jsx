import React, { useState } from "react"
const axios = require('axios')
import { Input, Space } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

const Register = () => {
    const [userid,setUserid] = useState('')
    const [nickname,setNickname] = useState('')
    const [userpw,setUserpw] = useState('')
    const [confirmPassword,setConfirmPassword] = useState('')
    const [phonenumber,setPhonenumber] = useState('')
    
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
            console.log(result.data.errno)
            if(result.data.errno === 0){
                alert('계정이 생성되었다.')
                location.href='/'
            }
        }
        } catch(error){
            alert('응 아니되오')
        }
    }
    return(
        <div class="loginRegister" style={{border:'1px solid lightgray',width:'9.5%',marginLeft:'45%',marginTop:'55px'}}>
            <form onSubmit={onSubmit}>
                    <Space direction="vertical">
                        <Input
                        name="userid" onChange={onNameHandler}
                        placeholder="input userid"
                        />
                        <Input
                        name="nickname" onChange={onNickname}
                        placeholder="input nickname"
                        />
                        <Input.Password
                        name="userpw" onChange={onPasswordHandler}onPhoneHandler
                        placeholder="input password"
                        iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                        />
                        <Input.Password
                        name="userpw" onChange={onConfirmPasswordHandler}
                        placeholder="input password"
                        iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                        />
                        <Input
                        name="phonenumber" onChange={onPhoneHandler}
                        placeholder="input phone number"
                        />
                    </Space>
                <div><button type="submit"style={{background:'#FFFFFF', border:'1.5px solid lightgray',width:'182px',height:'80px',marginTop:'40px'}} >계정 생성</button></div>
            </form>
        </div>
    )
}

export default Register