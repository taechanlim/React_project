import React,{useState,useEffect} from 'react'
const axios = require('axios')
import { useCookies } from 'react-cookie';
import { Input, Space } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import Router from 'next/router'

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

    const onSubmit = async (event) =>{
        event.preventDefault()
        if(nickname=='' || userpw =='' || phonenumber==''){
            alert('빈칸은 있을 수 없다.')
        }else{
            const result = await axios.post('http://localhost:4001/api/user/update',body) 
            console.log(result.data.errno)
            if(result.data.errno === 0){
                alert('계정의 수정이 완료')
                Router.push('/')
            }
        }
        
    }
    const COOKIE_KEY = document.cookie
    const [, , removeCookie] = useCookies([COOKIE_KEY]);

    const logout = async () => {
        removeCookie(COOKIE_KEY, { path: '/' });
        Router.push('/')
    }

    const onDelete = async (event) =>{
        event.preventDefault()
        const result = await axios.post('http://localhost:4001/api/user/delete',body) 
        if(result.data.errno === 0){
            alert('계정의 탈퇴가 완료')
            logout()
        }
    }
    return(
        <>
         <div class="loginUpdate" style={{borderRadius:'10px 10px 10px 10px',width:'10.5%',height:'50%',border:'1px solid lightgray',marginLeft:'44%',marginTop:'55px',background:'#ffffff'}}>
            <form onSubmit={onSubmit}>
                
                <Space direction="vertical">
                        <Input
                        name="nickname" onChange={onNickname}
                        placeholder="input nickname"
                        />
                        <Input.Password
                        name="userpw" onChange={onPasswordHandler}
                        placeholder="input password"
                        iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                        />
                        <Input
                        name="phonenumber" onChange={onPhoneHandler}
                        placeholder="input phonenumber"
                        />
                    </Space>
                {/* <div><input name="nickname" type="text" placeholder="닉네임" value={nickname} onChange={onNickname}/></div>
                <div><input name="userpw" type="password" placeholder="비밀번호" value={userpw} onChange={onPasswordHandler}/></div>
                <div><input name="phonenumber" type="text" placeholder="핸드폰" value={phonenumber} onChange={onPhoneHandler}/></div> */}
                <div><button type="submit" style={{background:'#FFFFFF', border:'1.5px solid lightgray',width:'200px',height:'80px',marginTop:'30px'}}>계정 업데이트</button></div>
            </form>
            <form onSubmit={onDelete}>
                <div ><button type="submit" style={{background:'#FFFFFF', border:'1.5px solid lightgray',width:'200px',height:'80px',marginTop:'30px'}}>계정 탈퇴</button></div>
            </form>
        </div>
        </>
    )
}
export default Update;