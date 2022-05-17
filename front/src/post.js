import React from "react";
import './Post.css'
import Avatar from'@material-ui/core/Avatar';

function Post(){
    return(
        <div className="post">

            <div className = "post__header">
            <Avatar
            className ="post__avatar"
            alt = 'wlwjdghks'
            src = "/static/images/avatar/1.jpg"
            />  
            <h3> wlwjdghks</h3>

            </div>
            
         
            {/*header -> avatar +username */}

            <img className = "post__image" src= "../cyworld.png" alt ="이미지" />
            {/*image */}
            <h4 className="post__text"><strong> wlwjdghks  </strong> : EVERYTHING 을 비롯해서 말 쓰는곳 </h4>
            {/*username+과 글쓰는공간 */}

        </div>

    )
}

export default Post