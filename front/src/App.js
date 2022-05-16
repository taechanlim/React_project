import './App.css';
import Index from './Pages/Index';
import {BrowserRouter as Router, Link, Routes, Route} from 'react-router-dom'
import Login from './Pages/User/Login';
import Register from './Pages/User/Register';
import Minihome from './Pages/Minihomepage/Minihome';
import Feed_idx from './Pages/Feeds/Feed_idx';

function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path="/" index element={<Index />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Minihomepage" element={<Minihome />} />
            <Route path="/feed/idx" element={<Feed_idx />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
