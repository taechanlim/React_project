import {MehOutlined} from '@ant-design/icons'
const Footer = () => {
    return(
        <footer>
            <div style={{position:'fixed',bottom:'0',width:'100%',zIndex:'10',backgroundColor:'lightgray'}}>
            <div style={{width:'100%'}}><img src="/static/logo.png" style={{float:'left'}}/></div>
                <div style={{marginLeft:'5%'}}>
                <h2>
                    React_pj
                </h2>
                <p style={{fontWeight:'bold'}}>2022-05-16 ~ 2022-05-31 Team : <MehOutlined />임태찬 <MehOutlined />김도움 <MehOutlined />이현진 <MehOutlined />지정환</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer