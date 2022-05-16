import { Link } from "react-router-dom"
import Feed from "./Feeds/Feed";


function Index(){
    return(
        <div>
            <h1>메인페이지</h1>
            <Link to="/">메인페이지 돌아가기</Link> <br />
            <Link to="/login">로그인</Link> <br />
            <Link to="/register">회원가입</Link> <br />
            <Link to="/minihomepage">미니홈피</Link> <br />
            <div style={{position:"absolute",right:"700px",color:"red"}}><h1><Feed /></h1></div>
        </div>
    )
}

export default Index;