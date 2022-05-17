const Feed = () => {
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

export default Feed