const Register = () => {
    return(
        <>
            <form>
                <input type="text" placeholder="아이디를 입력해주세요"></input> <br />
                <input type="password" placeholder="비밀번호를 입력해주세요"></input> <br />
                <input type="text" placeholder="닉네임을 입력해주세요"></input> <br />
                <input type="text" placeholder="번호를 입력해주세요"></input> <br />
                <input type="submit" value="회원가입"></input>
            </form>
        </>
    )
}

export default Register