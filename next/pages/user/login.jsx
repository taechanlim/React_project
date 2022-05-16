const Login = () => {
    return(
        <>
            <form>
                아이디 : <input type='text' name="userid" placeholder="아이디를 입력해주세요"></input> <br />
                비밀번호 : <input type='password' name="userpw" placeholder="비밀번호를 입력해주세요"></input> <br />
                <input type="submit" value="로그인"></input>
            </form>
        </>
    )
}

// export async function getServerSideProps(){
//     console.log ('hello server')
//     // await axios 로 데이터를 받아와서 아래 props로 넘겨주면 OK (글번호,제목,내용,작성자등 받아와서)
//     const result = await axios.get('http://localhost:3500/comment/list')
//     const list = result.data.result
    
//     return{
//         props:{
//             list:list
//         }
//     }
// }



export default Login