import React, { useState } from "react"
const axios = require('axios')

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
        <div class="loginRegister">
            <form onSubmit={onSubmit}>
                <div><input name="userid" type="text" placeholder="이름" value={userid} onChange={onNameHandler}/></div>
                <div><input name="nickname" type="text" placeholder="닉네임" value={nickname} onChange={onNickname}/></div>
                <div><input name="userpw" type="password" placeholder="비밀번호" value={userpw} onChange={onPasswordHandler}/></div>
                <div><input name="confirmPassword" type="password" placeholder="비밀번호 확인" value={confirmPassword} onChange={onConfirmPasswordHandler}/></div>
                <div><input name="phonenumber" type="text" placeholder="핸드폰" value={phonenumber} onChange={onPhoneHandler}/></div>
                <div><button type="submit">계정 생성</button></div>
            </form>
        </div>
    )
}

export default Register