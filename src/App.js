import React from 'react';
import {HashRouter, Route} from "react-router-dom";
import Home from "./routes/Home";
import Seoul from "./components/Seoul";
import Jeju from "./components/Jeju";
import Gwangju from './components/Gwangju';
import Busan from './components/Busan';
function App(){
  return (<HashRouter>
    <Route path='/' exact={true} component={Home} />
    <Route path='/seoul' component={Seoul} />
    <Route path='/jeju' component={Jeju} />
    <Route path='/gwangju' component={Gwangju} />
    <Route path='/busan' component={Busan} />
  </HashRouter>
  );
}
export default App;