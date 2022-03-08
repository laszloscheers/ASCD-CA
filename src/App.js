import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import "./App.css";

import Home from './views/Home';
import Bram from './views/Bram';
import Anne from './views/Anne';
import Charles from './views/Charles';
import Dame from './views/Dame';
import Ernest from './views/Ernest';
import Privacy from './views/Privacy';
import NavbarApp from './components/NavbarApp';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Router>
        <ScrollToTop />
        <div>
          <NavbarApp/>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/bram" element={<Bram/>}/>
            <Route exact path="/anne" element={<Anne/>}/>
            <Route exact path="/charles" element={<Charles/>}/>
            <Route exact path="/dame" element={<Dame/>}/>
            <Route exact path="/ernest" element={<Ernest/>}/>
            <Route exact path="/privacy" element={<Privacy/>}/>
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
