import FeedComment from "./Feed_comment"
import { Link } from "react-router-dom"

function Feed_idx(){
    return(
        <>
        <Link to="/">메인페이지 돌아가기</Link> 
        <h1>피드 눌렀을때 view 역할</h1>
        <h3><FeedComment /></h3>
        </>
        
    )
}

export default Feed_idx