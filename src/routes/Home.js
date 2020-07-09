import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
function Cities() {
  return (
    <div className="cities">
      <Link to="/seoul" className="seoul city">
        Seoul
      </Link>
      <Link to="/chuncheon" className="chuncheon city">
        Chuncheon
      </Link>
      <Link to="/Incheon" className="Incheon city">
        Incheon
      </Link>
      <Link to="/Hwaseong" className="Hwaseong city">
        Hwaseong
      </Link>
      <Link to="/daejeon" className="daejeon city">
        Daejeon
      </Link>
      <Link to="/daegu" className="daegu city">
        Daegu
      </Link>
      <Link to="/gwangju" className="gwangju city">
        Gwangju
      </Link>
      <Link to="/busan" className="busan city">
        Busan
      </Link>
      <Link to="/jeju" className="jeju city">
        Jeju
      </Link>
    </div>
  );
}

export default Cities;
