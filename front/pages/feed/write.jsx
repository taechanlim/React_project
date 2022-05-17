
const Write = () => {
    return(
        <>
            <h1>피드 쓰기</h1>
            <form>
                <input type='text' placeholder="제목"></input> <br />
                <input type='file'></input> <br />
                <input type='file'></input> <br />
                <input type='file'></input> <br />
                <input type='text' placeholder="내용"></input> <br />
                <input type='submit' value='작성'></input>
            </form>
        </>
    )
}

export default Write