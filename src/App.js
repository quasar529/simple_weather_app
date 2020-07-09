import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import Seoul from "./components/Seoul";
import Jeju from "./components/Jeju";
import Gwangju from "./components/Gwangju";
import Busan from "./components/Busan";
import Chuncheon from "./components/Chuncheon";
import Daejeon from "./components/Daejeon";
import Daegu from "./components/Daegu";
import Incheon from "./components/Incheon";
import Hwaseong from "./components/Hwaseong";
function App() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Home} />
      <Route path="/seoul" component={Seoul} />
      <Route path="/jeju" component={Jeju} />
      <Route path="/gwangju" component={Gwangju} />
      <Route path="/busan" component={Busan} />
      <Route path="/chuncheon" component={Chuncheon} />
      <Route path="/daejeon" component={Daejeon} />
      <Route path="/daegu" component={Daegu} />
      <Route path="/incheon" component={Incheon} />
      <Route path="/hwaseong" component={Hwaseong} />
    </HashRouter>
  );
}
export default App;
