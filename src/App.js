import './App.scss';
import {BrowserRouter} from 'react-router-dom'
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
