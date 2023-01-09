import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './about/about';
import { Route, Routes } from 'react-router-dom';
import Home from './home';
import Resumes from './resumes/resumes';
import FAQ from './faq/faq';
import HTW from './how_to_write/how_to_write';


function App() {


  return (
    <div className="App">
      <Routes>
      <Route path="/" element={ <Home />} />
      <Route path="about" element={ <About /> } />
      <Route path="resume" element={ <Resumes /> } />
      <Route path="how_to_write" element={ <HTW /> } />
      <Route path="FAQs" element={ <FAQ /> } />
      </Routes>
    </div>
  );

}

export default App;
