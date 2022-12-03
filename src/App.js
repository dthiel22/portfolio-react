import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Kitten from "./pages/Kitten";

function App() {
  return (
    <div className="app">
      <Router basename="/router-example">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/taco" element={<h1>taco page</h1>}/>
          <Route path="/kitten/:id" element={<Kitten/>}/>
          <Route path="*" element={<h1>404 page</h1>}/>
        </Routes>
        <h1>Footer</h1>
      </Router>
    </div>
  );
}

export default App;
