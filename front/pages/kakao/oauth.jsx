import Auth from "../user/Auth";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function Kakao() {
    const REST_API_KEY = "6266298c6838d5835e1b2b4ec1b3c97c";
    const REDIRECT_URI = "http://localhost:3001/kakao/oauth";
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
    return (
      <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <h1><a href={KAKAO_AUTH_URL}>Kakao Login</a></h1>
          </Route>
          <Route path="/oauth/kakao/callback">
            <Auth />
          </Route>
        </Switch>
      </div>
      </Router>
    );
  }

  export default Kakao