import { LayoutProps } from "antd";
import React, {FC} from "react";
import { Link } from "react-router-dom";

const Layout: FC<LayoutProps> = ({children}) => {
    return(
      <>
      
        <div>
          <span>h662-Animals</span>
        </div>

        <Link to="/">
          <button>Main</button>
        </Link>

        <Link to="my-animal">
          <button>My Animal</button>
        </Link>

        <Link to="sale-animal">
          <button>Sale Animal</button>
        </Link>

      <div>{children}</div>
      </>
    );
};

export default Layout;