
import './App.css';
import CounterClass from './component/counterClass';
import CounterFunction from './component/CounterFunction';
import Header from './component/Header';

function App() {
  return (
    <div className="App">
      <h1>Hello React </h1>
      <CounterClass/>
      <CounterFunction/> 
      <Headers/>

    </div>
  );
}

export default App;
