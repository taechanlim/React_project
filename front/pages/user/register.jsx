import React, { useState } from "react"

const Register = () => {
    const [userid,setUserid] = useState('')
    const [nickname,setNickname] = useState('')
    const [userpw,setUserpw] = useState('')
    const [confirmPassword,setConfirmPassword] = useState('')
    const [phonenumber,setPhonenumber] = useState('')
    
    const onNameHandler = (event) =>{
        setUserid(event.currenTarget.value)
    }
    const onEmailHandler = (event) =>{
        setNickname(event.currenTarget.value)
    }
    const onPasswordHandler = (event) =>{
        setUserpw(event.currenTarget.value)
    }
    const onConfirmPasswordHandler = (event)=>{
        setConfirmPassword(event.currenTarget.value)
    }
    const onPhoneHandler = ( event)=>{
        setPhonenumber(event.currenTarget.value)
    }
    const onSubmit = (event) =>{
        event.preventDefault()
        if(userpw !== confirmPassword){
            return alert('비밀번호와 비밀번호 확인이 불일치')
        }else{
            return alert('성공되다 가입')
        }
    }
    return(
        <div class="loginregister">
            <form>
                <div><input name="userid" type="text" placeholder="이름" value={userid} onChange={onNameHandler}/></div>
                <div><input name="nickname" type="text" placeholder="이메일" value={nickname} onChange={onEmailHandler}/></div>
                <div><input name="userpw" type="password" placeholder="비밀번호" value={userpw} onChange={onPasswordHandler}/></div>
                <div><input name="confirmPassword" type="password" placeholder="비밀번호 확인" value={confirmPassword} onChange={onConfirmPasswordHandler}/></div>
                <div><input name="phonenumber" type="text" placeholder="핸드폰" value={phonenumber} onChange={onPhoneHandler}/></div>
                <div><button type="submit" onSubmit={onSubmit}>계정 생성하기</button></div>
            </form>
        </div>
    )

    // return(
    //     <>
    //         <form>
    //             <input type="text" placeholder="아이디를 입력해주세요"></input> <br />
    //             <input type="password" placeholder="비밀번호를 입력해주세요"></input> <br />
    //             <input type="text" placeholder="닉네임을 입력해주세요"></input> <br />
    //             <input type="text" placeholder="번호를 입력해주세요"></input> <br />
    //             <input type="submit" value="회원가입"></input>
    //         </form>
    //     </>
    // )
}

export default Register