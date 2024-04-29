
import './App.css';
import AddStudent from './component/AddStudent';
import AllStudent from './component/AllStudent';
import CounterClass from './component/counterClass';
import CounterFunction from './component/CounterFunction';
import Header from './component/Header';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (

    <Router>
      <div>

        <Header />
        
        <Routes>

        <Route path='/add' exact Component={AddStudent}/>
        <Route path='/' exact Component={AllStudent}/>
        </Routes>

      </div>
    </Router>



  );
}

export default App;
