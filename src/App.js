//import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navigation } from './components/navigation';
import { Header } from './components/header';
import { Concepts } from './components/concept';
//import { General } from './pages/general';
import { About } from './components/about';
import { Partsofcard } from './components/partsofcard';
import { Contact } from './components/contact';
import { Gallery } from './components/gallery';
import { Allbirthdays } from './pages/allbirthdays.jsx';
import JsonData from './data/data.json';



const App = () => {
  const [landingPageData, setLandingPageData] = useState({})
  useEffect(() => {
    setLandingPageData(JsonData)
  }, [])

  return (
    <div className="App">
    <Router>
     <Navigation />
     <Header data={landingPageData.Header}/>
     <Concepts data={landingPageData.Concepts} />
     <Partsofcard data={landingPageData.Partsofcard} />
     
     <About data={landingPageData.About} />
     <Gallery />
     
     <Contact data={landingPageData.Contact} />
    </Router>
    </div>
  );
}

export default App;
