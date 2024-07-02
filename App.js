import logo from './logo.svg';
import './App.css';
import{BrowserRouter,Route,Router,Routes} from 'react-router-dom';
import Nav from './component/navbar.jsx'
import AboutUs from './component/about.jsx';
import SignUp from './component/signup.jsx';
import Login from './component/login.jsx';
import Error from './component/error.jsx';
import Contactus from './component/contactus.jsx';
function App() {
  return (
    
    
    <BrowserRouter>
    <Routes>
      <Route path='/Signup' element={<SignUp />}></Route>
      <Route path='/Login' element={<Login />}></Route>
      <Route path='/Aboutus' element={<AboutUs />}></Route>
      <Route path='/Contactus' element={<Contactus />}></Route>
      <Route path='/' element={<Nav />}></Route>
      <Route path='/*' element={<Error />}></Route>
    </Routes>
    </BrowserRouter>
  
  );
}

export default App;
