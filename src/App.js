import {
  BrowserRouter as Router,
  Route, Switch
} from "react-router-dom";
import Layout from "./components/Layout";
import About from "./pages/about";
import Blog from "./pages/blog";
import Faq from "./pages/faq";
import Home from "./pages/home";
import './styles/index.scss';
function App() {
  return (
    <Router>
      <Switch>
          <Route path='/home' component={Home} />
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/faq' component={Faq} />
          <Route path='/blog' component={Blog} />
          <Route path='/temp' component={Layout} />

          
      </Switch>      
    </Router>
  );
}

export default App;
