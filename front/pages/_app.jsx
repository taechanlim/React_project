import DefaultLayout from "../components/DefaultLayout"
import 'antd/dist/antd.css'
import styled from 'styled-components'
import './App.css'

//layout.module.css
const App = ({Component,pageProps}) => {
    return( 
        <>
            <DefaultLayout>
            <div className="App" style={{
                background:'#FAFAFA',
                width:'100%',
                marginTop:'50px',
                }}>
                <Component {...pageProps} />
            </div>
            </DefaultLayout>
        </>
    )
}

export default App