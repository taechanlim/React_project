import {MehOutlined} from '@ant-design/icons'
const Footer = () => {
    return(
        <footer>
            <div style={{border:'1px solid lightgray',position:'fixed',bottom:'0',width:'100%',zIndex:'10',background:'#ffffff'}}>
            <div style={{width:'100%'}}><img src="/static/logo.png" style={{float:'right'}}/></div>
                <h2>
                    React_pj
                </h2>
                <p style={{fontWeight:'bold'}}>2022-05-16 ~ 2022-05-31 Team : <MehOutlined />임태찬 <MehOutlined />김도움 <MehOutlined />이현진 <MehOutlined />지정환</p>
            </div>
        </footer>
    )
}

export default Footer