import Link from 'next/link'
import { Menu, Row, Col } from 'antd'
import { MailOutlined, AppstoreOutlined, SettingOutlined ,PlayCircleOutlined} from '@ant-design/icons'
import Footer from './Footer'
//import styles from 'layout.module.css'
import {useState,useEffect} from 'react'


const DefaultLayout = ({ children }) => {
    const [isCookie,setisCookie] = useState()

    const cookiecheck = () => {
        if(document.cookie){
            setisCookie(true)
        }
    }
    useEffect(()=>{
        cookiecheck()
    },[isCookie]) //isLogin이 바뀔때마다 코드실행

    return (
        <>      
            <img src="/static/logo.png" />
            
            <Col>
                <Menu theme='dark' mode="horizontal" style={{ display : 'flex', justifyContent:"center"}}>

                    <Row>
                        <Menu.Item icon ={<PlayCircleOutlined />}><Link href="/">홈으로</Link></Menu.Item>
                        {isCookie ? <Menu.Item icon ={<MailOutlined />}><Link href="/user/login">로그아웃/프로필수정</Link></Menu.Item>
                                  : <Menu.Item icon ={<MailOutlined />}><Link href="/user/login">로그인</Link></Menu.Item>
                        }
                        
                        <Menu.Item icon ={<AppstoreOutlined />}><Link href="/user/register">회원가입</Link></Menu.Item>
                        <Menu.Item icon ={<SettingOutlined />}><Link href="/user/minihomepage">미니홈피</Link></Menu.Item>
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