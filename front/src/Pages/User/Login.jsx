import { Link } from "react-router-dom"
// import useForm from "../../Hooks/useForm"
// import validate from "../../utils/validate/login.js"
// import { useSelector,useDispatch } from "react-redux"
// import { user_login_request } from "../../reducers/user"
// import AuthLayout, { Footer } from "../../Components/auth/AuthLayout"
// import { AuthInputBox } from "../../Components/form/inputs"
// import { StyledButton } from "../../Components/form/buttons"


function Login(){
    

    return(
        <>
        <Link to="/">메인페이지 돌아가기</Link> <br />
        <h1>로그인페이지</h1>
        <form>
            아이디:<input type='text' name='email' placeholder="아이디를 입력해주세요."></input>
            비밀번호:<input type='password' name='password' placeholder="비밀번호를 입력해주세요."></input>
            <br /><input type="submit" value="로그인"></input>
        </form>
        </>
    )
}

export default Login