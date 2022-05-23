import DefaultLayout from "../components/DefaultLayout"
import 'antd/dist/antd.css'
const App = ({Component,pageProps}) => {
    return(
        <>
            <div style={{background:'#FAFAFA'}}>
            <DefaultLayout >
            <div style={{marginTop:'50px'}}>
                <Component {...pageProps} />
            </div>
            </DefaultLayout>
            </div>
        </>
    )
}

export default App