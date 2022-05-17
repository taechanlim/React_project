import Link from 'next/link'
import {Menu,Row,Col} from 'antd'
import {MailOutlined , AppstoreOutlined, SettingOutlined} from '@ant-design/icons'
import Footer from './Footer'


const DefaultLayout = ({children}) => {
    return(
        <>      
        {/* 카카오 로그인 임시 */}
        <script src="https://developers.kakao.com/sdk/js/kakao.js"></script>
        <script>Kakao.init("자바스크립트 앱키");</script>

                <h1><Link href="/">LOGO</Link></h1>
                <br />
                <Col>
                <Menu theme='dark' mode="horizontal">
                
                <Row>
                    <Menu.Item><Link href="/">홈으로</Link></Menu.Item>
                    <Menu.Item><Link href="/user/login">로그인</Link></Menu.Item>
                    <Menu.Item><Link href="/user/register">회원가입</Link></Menu.Item>
                    <Menu.Item><Link href="/user/minihomepage">미니홈피</Link></Menu.Item>
                    <Menu.Item><Link href="/feed/write">New 피드작성</Link></Menu.Item>
                </Row>
                
                </Menu>
                </Col>
                
               
                
            <div>
                {children}
            </div>
            <br /><br /><br /><br />
            <div>
                <h3><Footer /></h3>
            </div>
            
        </>
    )
}



export default DefaultLayout