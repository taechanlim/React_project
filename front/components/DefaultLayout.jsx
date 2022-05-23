import Link from 'next/link'
import { Menu, Row, Col } from 'antd'
import { InfoCircleOutlined, TeamOutlined, ShopOutlined ,InstagramOutlined,DollarCircleOutlined,GithubOutlined,PlusOutlined} from '@ant-design/icons'
import Footer from './Footer'
//import styles from 'layout.module.css'
import {useState,useEffect} from 'react'
import { useRouter } from 'next/router';




const DefaultLayout = ({ children }) => {
    const [isCookie,setisCookie] = useState()
    
    const router = useRouter();
    const feedURL = router.pathname.split('/')[1]
    
    const Auth = () => {
        if(feedURL == 'feed'){
            if(!document.cookie){
                alert('로그인 후 이용하세요')
                location.href='/'
            }
        }
    }
    Auth()
    

    
    

    const cookiecheck = () => {
        if(document.cookie){
            setisCookie(true)
        }
    }
    useEffect(()=>{
        cookiecheck()
        
    },[isCookie]) 

    return (
        <>      
        <div style={{width:'100%' }}><img src="/static/logo.png" /></div>
            
            
            <Col>
                <Menu theme='#FFFFFF' mode="horizontal" style={{ display : 'flex', justifyContent:"center", border:'1px solid lightgray'}}>

                    <Row>
                        <Menu.Item icon ={<InstagramOutlined />}><Link href="/">홈으로</Link></Menu.Item>
                        {isCookie ? <Menu.Item icon ={<InfoCircleOutlined />}><Link href="/user/login">로그아웃/프로필수정</Link></Menu.Item>
                                  : <Menu.Item icon ={<InfoCircleOutlined/>}><Link href="/user/login">로그인</Link></Menu.Item>
                        }
                        
                        <Menu.Item icon ={<TeamOutlined />}><Link href="/user/register">회원가입</Link></Menu.Item>
                        <Menu.Item icon ={<ShopOutlined />}><Link href="/user/minihomepage">미니홈피</Link></Menu.Item>
                        <Menu.Item icon={<PlusOutlined />}><Link href="/feed/write">피드작성</Link></Menu.Item>
                        <Menu.Item icon={<DollarCircleOutlined />}><Link href="/user/wallet">Meta mask연결</Link></Menu.Item>
                        <Menu.Item icon={<GithubOutlined />}><Link href="https://github.com/taechanlim/React_project">Github</Link></Menu.Item>
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