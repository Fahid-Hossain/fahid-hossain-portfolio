import './App.css';
import Home from './components/Home/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Switch, Route } from 'react-router-dom'
import ProjectDetails from './components/Home/projects/projectDetails/ProjectDetails';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
// import ProjectDetails from './components/Home/projects/projectDetails/ProjectDetails';
// import Layout from '../containers/Layout'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Route>
        <Navigation></Navigation>
      </Route>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/projectDetail/:_id">
            <ProjectDetails></ProjectDetails>
          </Route>
        </Switch>
        <Route>
        <Footer></Footer>
      </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
