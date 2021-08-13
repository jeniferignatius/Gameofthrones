//import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navigation } from './components/navigation';
import { Header } from './components/header';
import { Concepts } from './components/concept';
//import { General } from './pages/general';
import { About } from './components/about';
import { Card } from './components/card';
import { Contact } from './components/contact';
import { Gallery } from './components/gallery';
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
     <Card data={landingPageData.Card} />
     
     <About data={landingPageData.About} />
     <Gallery />
     
     <Contact data={landingPageData.Contact} />
    </Router>
    </div>
  );
}

export default App;
