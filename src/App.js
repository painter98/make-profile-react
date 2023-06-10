import './App.css';
import {Routes,Route,useNavigate} from 'react-router-dom';
import SignUp from './components/signup';
import Profile from './components/profile'
import {useEffect} from 'react';


function App() {
  let accessToken = JSON.parse(localStorage.getItem('accessToken'));
  let navigate = useNavigate();

  useEffect(() => {
       if(!accessToken && window.location.pathname == "/profile" ){
              navigate("/")
       }
       if(accessToken && window.location.pathname == "/" ){
              navigate("/profile")
       }
  }
  )

  return (
    <div className="App">
      <Routes path='/'>
        <Route index element={<SignUp/>}/>
        <Route path='Profile' element={<Profile/>}/>
      </Routes>
    </div>
  );
}

export default App;
