import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Homepage from "./Screen//Home/Home_screen";
function App() {
  return (
    <div className="App">
      
      <Router>
          <div>
            <switch>
            <Route path="/" exact component={Homepage} />
              {/* <Route path="/about" exact component={About} />
              <Route path="/contact" exact component={Contact} />
              <Route path="/work" exact component={Work} /> */}
            </switch>
          </div>
        </Router>

    </div>
  );
}

export default App;
