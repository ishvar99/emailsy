import './App.css';
import { Provider } from "react-redux"
import Routing from './components/Routing/Routing'
import {BrowserRouter as Router} from 'react-router-dom'
import Header from './components/Header/Header'
import store from "./redux/store"
function App() {
  return (
    <Provider store={store}>
    
    <div className="App">
    <Router>
    <Header/>
      <Routing/>
    </Router>
    </div>
  </Provider>
  );
}

export default App;
