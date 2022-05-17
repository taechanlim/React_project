import React, { useState } from "react"

const Register = () => {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [confirmPassword,setConfirmPassword] = useState('')
    const [phone,setPhone] = useState('')
    
    const onNameHandler = (event) =>{
        setName(event.currenTarget.value)
    }
    const onEmailHandler = (event) =>{
        setEmail(event.currenTarget.value)
    }
    const onPasswordHandler = (event) =>{
        setPassword(event.currenTarget.value)
    }
    const onConfirmPasswordHandler = (event)=>{
        setConfirmPassword(event.currenTarget.value)
    }
    const onPhoneHandler = ( event)=>{
        setPhone(event.currenTarget.value)
    }
    const onSubmit = (event) =>{
        event.preventDefault()
        if(password !== confirmPassword){
            return alert('비밀번호와 비밀번호 확인이 불일치')
        }else{
            return alert('성공되다 가입')
        }
    }
    return(
        <div class="loginregister">
            <form>
                <div><input name="name" type="text" placeholder="이름" value={name} onChange={onNameHandler}/></div>
                <div><input name="email" type="email" placeholder="이메일" value={email} onChange={onEmailHandler}/></div>
                <div><input name="password" type="password" placeholder="비밀번호" value={password} onChange={onPasswordHandler}/></div>
                <div><input name="confirmPassword" type="password" placeholder="비밀번호 확인" value={confirmPassword} onChange={onConfirmPasswordHandler}/></div>
                <div><input name="Phone" type="text" placeholder="핸드폰" value={phone} onChange={onPhoneHandler}/></div>
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