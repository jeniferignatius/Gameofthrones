//import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import { Navigation } from './components/navigation';
import { Header } from './components/header';
import { Birthdays } from './components/birthdays';
import { About } from './components/about';
import { Family } from './components/family';
import { Friends } from './components/friends';
import { Testimonials } from './components/testimonials';
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
     <Navigation />
     <Header data={landingPageData.Header}/>
     <Birthdays data={landingPageData.Birthdays} />
     <Family data={landingPageData.Family} />
     <About data={landingPageData.About} />
     <Gallery />
     <Friends data={landingPageData.Friends} />
     <Testimonials data={landingPageData.Testimonials} />
     <Contact data={landingPageData.Contact} />
    </div>
  );
}

export default App;
