import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";


function App() {
  return (
    <div className="app // ">
      <Router basename="/">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Portfolio" element={<Portfolio/>}/>
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/Resume" element={<Resume/>}/>
          <Route path="*" element={<h1>404 page</h1>}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
