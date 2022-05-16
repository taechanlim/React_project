import DefaultLayout from "../components/DefaultLayout"
import 'antd/dist/antd.css'
const App = ({Component,pageProps}) => {
    return(
        <>
            <DefaultLayout>
                <Component {...pageProps} />
            </DefaultLayout>
            
        </>
    )
}

export default App