import logo from './logo.svg';
import './App.scss';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {LandingPage,Section,Footer} from "./components";



function App() {
  return (
      <BrowserRouter>
        <div className="app">


          <LandingPage/>

<Section/>

<Footer/>
        </div>


      </BrowserRouter>
  );
}

export default App;
