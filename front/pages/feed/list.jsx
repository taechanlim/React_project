const axios = require('axios')
import { useEffect } from 'react'


// const Feed = () => {
//     const a = async () => {
//         const result = await axios.post('http://localhost:4001/api/feed/list')
        
//         const list = result.data.result
//         list.map(v=>{
//             console.log(v.idx)
//         })
        
//     }
//     useEffect(()=>{
//         a()
//     },[])
    

//     return(
//         <div>
//                  {v.idx}
//         </div>
//     )
// }
const List = (props) => {
    
    return(
        <div>
            
                
                <tr>
                    <td>{(props.list.map(v=>v.idx))}</td>
                    <td>{(props.list.map(v=>v.subject))}</td>
                    <td>{(props.list.map(v=>v.content))}</td>
                </tr>
                
            

        </div>
    )
}


export async function getServerSideProps(){
    
    const result = await axios.get('http://localhost:4001/api/feed/list')
    
    const list = result.data.result
    
    return{
        props:{
            list:list
        }
    }
}


export default List