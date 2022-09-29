import './App.css';
import Homepage from './component/homepage/homepage';
import Login from './component/login/login';
import Signup from './component/signup/signup';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { useState } from 'react';


function App() {

  const [user, setLoginUser] = useState({})
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            {
              user && user._id ? <Homepage setLoginUser={setLoginUser}/> : <Login setLoginUser={setLoginUser}/>
           } 
            </Route>
          <Route path='/login'>
            <Login setLoginUser={setLoginUser}/></Route>
          <Route path='/signup'><Signup /></Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
