
import  React from 'react';
import logo from './logo.svg';
import './App.css';
import Post from './Post';

function App() {
  // const [posts,setPosts] = useState([
  //   {
  //     username:'clever',
  //     caption : 'bnbnnb',
  //     imageUrl : "../corona.jpg"
  //   }

  // ]);
  return (
    <div className="App">
        <h1>  CYWORLDSTARGRAM</h1>
    {/*header*/}
    <div className='app__header'>
      <img className ="app__headerImage"
       //</div>src="" 우리가 헤더에 쓸 로고 이미지
      alt=""
      />

    </div>


    <Post />
    
    <Post />
    
    <Post />
    
    <Post />
            {/*post*/}
            {/*post*/}
            {/*post*/}
        
    </div>
  );
}

export default App;
