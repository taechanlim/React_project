import React,{useState,useEffect} from 'react'
const axios = require('axios')
const Update = ()=>{
    const [nickname,setNickname] = useState('')
    const [userpw,setUserpw] = useState('')
    const [phonenumber,setPhonenumber] = useState('')
    
    const onNickname = (event) =>{
        setNickname(event.target.value)
    }
    const onPasswordHandler = (event) =>{
        setUserpw(event.target.value)
    }
    const onPhoneHandler = (event)=>{
        setPhonenumber(event.target.value)
    }


    const token = document.cookie
    const body = {nickname,userpw,phonenumber,token}
    console.log(body);

    const onSubmit = async (event) =>{
        event.preventDefault()
        const result = await axios.post('http://localhost:4001/api/user/register',body) 
        console.log(result);
        return(
            alert('계정의 수정이 완료')
        )
    }
    return(
        <>
         <div class="loginUpdate">
            <form onSubmit={onSubmit}>
                <div><input name="nickname" type="text" placeholder="이메일" value={nickname} onChange={onNickname}/></div>
                <div><input name="userpw" type="password" placeholder="비밀번호" value={userpw} onChange={onPasswordHandler}/></div>
                <div><input name="phonenumber" type="text" placeholder="핸드폰" value={phonenumber} onChange={onPhoneHandler}/></div>
                <div><button type="submit">계정 업데이트</button></div>
            </form>
        </div>
        </>
    )
}
export default Update;