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

    const a = props.list.result

    return(
        <div>
            
                
                <tr>
                    <td>{a[0].idx}</td>
                    <td>{a[0].subject}</td>
                    <td>{a[0].content}</td>
                </tr>
                <tr>
                    <td>{a[1].idx}</td>
                    <td>{a[1].subject}</td>
                    <td>{a[1].content}</td>
                </tr>
                

                
            

        </div>
    )
}


export async function getServerSideProps(){
    
    const result = await axios.get('http://localhost:4001/api/feed/list')
    
    const list = result.data
    
    return{
        props:{
            list:list
        }
    }
}


export default List