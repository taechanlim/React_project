import { LayoutProps } from "antd";
import React, {FC} from "react";
import { Link } from "react-router-dom";

const Layout: FC<LayoutProps> = ({children}) => {
    return(
      <>
      
        <div style={{width:'100%',height:'50px',border:'1px solid lightgray',marginTop:'-7px'}}>
         <img src="../../static/market2.jpg" style={{position:'absolute',width:'100%',height:'5.8%',zIndex:"0"}}></img>
          <span style={{position:'absolute',fontSize:'30px',marginLeft:'46%',color:'orange',fontWeight:'bold'}}>H662-ANIMALS</span>
        </div>
      <div style={{width:'100%',height:'50px',border:'1px solid lightgray'}}>
        <Link to="market/main">
          <button style={{width:'20%',height:'48px',fontSize:'30px',color:'#ffffff',backgroundColor:'violet',border:'2px solid gray'}}>Main</button>
        </Link>

        <Link to="market/my-animal">
          <button style={{width:'40%',height:'48px',fontSize:'30px',color:'#ffffff',backgroundColor:'violet',border:'2px solid gray'}}>My Animal</button>
        </Link>

        <Link to="market/sale-animal">
          <button style={{width:'40%',height:'48px',fontSize:'30px',color:'#ffffff',backgroundColor:'violet',border:'2px solid gray'}}>Sale Animal</button>
        </Link>
        </div>
      <div>{children}</div>
      </>
    );
};

export default Layout;