import logo from './logo.svg';
import './App.css';


import { BrowserRouter as Router,
Switch, 
Route,
Link } from "react-router-dom"
import AppCars from './components/AppCars';

function App() {
  return (
    <div className="App">
     <h1>Cars App</h1>
     <Router>
     <nav>
       <ul>
         <li>
           <Link to="/cars">CarsLink</Link>
         </li>
       </ul>
       <Switch>
         <Route path="/cars">
           <AppCars></AppCars>
           </Route>
       </Switch>
     </nav>
     </Router>
    </div>
  );
}


export default App;
