import './App.css';
import Login from './components/Login';
import Navbar from './components/Navbar';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from 'react-router-dom';
import AfterLogin from './components/AfterLogin'

function App() {
  return (
    <>
      <Navbar/>
      <Router>
        <Routes>
          <Route exact path='/' element={<Login/>}/>
          <Route exact path='/home' element={<Login/>}/>
        </Routes>
      </Router>
      
    </>    
  );
}

export default App;
