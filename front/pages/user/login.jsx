import React,{useState,useEffect} from 'react'
const axios = require('axios')
import { useCookies } from 'react-cookie';
import Update from './update';
import Link from 'next/link';
import { Input, Space } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';


const Login = () => {

    const [values,setValues] = useState({userid:'',userpw:''})
    const [submit,setSubmit] = useState(false)
    const [isLogin,setisLogin] = useState()

    
    const handleChange = (e) => {
        // console.log(e.target.name,e.target.value)
        const {name,value} = e.target
        setValues({
            ...values,
            [name]:value
        })
    }
    
    const COOKIE_KEY = document.cookie
    const [, , removeCookie] = useCookies([COOKIE_KEY]);

    const logout = async () => {
        removeCookie(COOKIE_KEY, { path: '/' });
        location.href='/'
    }
    const body = {
        userid:values.userid,
        userpw:values.userpw
        
    }
    const logincheck = () => {
        if(document.cookie){
            setisLogin(true)
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        setSubmit(true)
        const result = await axios.post('http://localhost:4001/api/user/login',body,{
            'Content-type':'application/json',
            withCredentials:true,
        })
        
        setTimeout(()=>{
            if(result.data.errno === 0){
                setisLogin(true)
                alert(`
                    아이디 : ${values.userid}
                `)
                location.href='/'
            }else{
                alert('로그인실패')
            }
            setSubmit(false)
        },1000)
    }

    useEffect(()=>{
        logincheck()
    },[isLogin]) //isLogin이 바뀔때마다 코드실행

    return(
        <>
        <div style={{width:'15%',height:'50%',border:'1px solid lightgray',marginLeft:'42%',marginRight:'42%',marginTop:'55px',background:'#ffffff'}}>
            <form onSubmit={handleSubmit} >
                <ul style={{listStyle:'none'}}>
                    {isLogin 
                    ? <> <li><button  onClick={logout} style={{background:'#FFFFFF', border:'1.5px solid lightgray',width:'200px',height:'80px'}}>로그아웃</button></li> 
                    
                    <Link href='/user/update' ><div style={{background:'#FFFFFF', border:'1.5px solid lightgray',width:'200px',height:'80px',paddingLeft:'18%',paddingTop:'10%'}}>프로필 수정/탈퇴 </div></Link>
                   
                    </>
                    :  <>
                    <Space direction="vertical">
                        <Input
                        name="userid" onChange={handleChange}
                        placeholder="input userid"
                        />
                        <Input.Password
                        name="userpw" onChange={handleChange}
                        placeholder="input password"
                        iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                        />
                    </Space>
                    {/* <li>
                        <label>아이디</label>
                        <input type="text" name="userid" onChange={handleChange} />
                    </li>
                    <li>
                        <label>패스워드</label>
                        <input type="password" name="userpw" onChange={handleChange} />
                    </li> */}
                    <li><input type="submit" value="로그인" disabled={submit} /></li> 
                    </>}
                    
                </ul>
            </form>
        </div>
        </>
    )
}


export default Login