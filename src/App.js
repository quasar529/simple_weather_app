import React from 'react';
import Weather from "./Weather";
import axios from "axios";
import PropTypes from "prop-types";
class App extends React.Component{
  constructor(props){
    super(props);
    console.log("cons");
    this.state={
      isLoading:true,
      data:{}
    };
  }
  // state={
  //   data:""
  // };
  getWeather= async () =>{
    const {data}=await axios.get("http://api.openweathermap.org/data/2.5/weather?q=seoul&appid=20dd54e163bbd3575a7ed6ddb7994735");
    this.setState({data, isLoading:false});
  };
  componentDidMount(props){
    this.getWeather();
  };
  render() {
    const {data,isLoading}=this.state;
    return (
      isLoading ? (<div className="loader"><span>Loading...</span></div>) :
      <div className="data">
       <Weather 
          temp={data.main.temp}
          temp_max={data.main.temp_max}
          temp_min={data.main.temp_min}
          recentWeather={data.weather[0].main}
          humidity={data.main.humidity}
          description={data.weather[0].description}
          icon={data.weather[0].icon}
          name={data.name}
        /> 
      </div>
      );
  }
}
export default App;
