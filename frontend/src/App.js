import './App.css';
import Header from "./component/layout/Header/Header.js";
import Footer from "./component/layout/Footer/Footer.js";
import {BrowserRouter as Router, Route,Switch} from "react-router-dom";
import webFont from "webfontloader";
import React from 'react';
import Home from "./component/Home/Home.js";


function App() {

  React.useEffect(() =>{
    webFont.load({
      google:{
        families:["Roboto", "Droid Sans", "Chilanka"],
      },
    });
  },[]);

  return (
    <Router>
      <Header/>
      <Switch>
      <Route extact path='/' component={Home} />
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
