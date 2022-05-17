const axios = require('axios')

const Feed = (props) => {

    return(
        <>
            <div className="main">
                <div className="feed">
                    <div className="feed_header">
                        <ul>
                            <li>프로필사진</li>
                            <li>닉네임,유저네임</li>
                        </ul>
                    </div>
                    <div className="feed_body">
                        <div>
                            피드내용-사진
                        </div>
                        <div>
                            <section>좋아요,댓글의 icon</section>
                            <div className="comment">
                                댓글 부분
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

// export async function getServerSideProps(){
//     console.log ('hello server')
//     // await axios 로 데이터를 받아와서 아래 props로 넘겨주면 OK (글번호,제목,내용,작성자등 받아와서)
//     const result = await axios.get('http://localhost:4001/feed/list')
//     const list = result.data.result
    
//     return{
//         props:{
//             list:list
//         }
//     }
// }


export default Feed