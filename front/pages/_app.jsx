import DefaultLayout from "../components/DefaultLayout"
import 'antd/dist/antd.css'
const App = ({Component,pageProps}) => {
    return(
        <>

            <DefaultLayout >
            <div  style={{background:'#FAFAFA',width:'100%',marginTop:'50px'}}>
                <Component {...pageProps} />
            </div>
            </DefaultLayout>

        </>
    )
}

export default App