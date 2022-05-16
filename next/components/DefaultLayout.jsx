import Link from 'next/link'
import {Menu,Row,Col} from 'antd'
import {MailOutlined , AppstoreOutlined, SettingOutlined} from '@ant-design/icons'

const DefaultLayout = ({children}) => {
    return(
        <>
                <h1>LOGO</h1>
                <br />
                <Row justify='end'>
                <Menu theme='dark' mode="horizontal">
                <Col>
                    <Menu.Item><Link href="/">홈으로</Link></Menu.Item>
                    <Menu.Item><Link href="/user/login">로그인</Link></Menu.Item>
                    <Menu.Item><Link href="/user/minihomepage">미니홈피</Link></Menu.Item>
                </Col>
                </Menu>
                </Row>
               
                
            <div>
                {children}
            </div>
            <br /><br /><br /><br />
            <div>
                <h3>footer</h3>
            </div>
            
        </>
    )
}



export default DefaultLayout