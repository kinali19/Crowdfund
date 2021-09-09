import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/navigation/Header'
import Home from './components/Home';


function App() {
  return (
    <div className="main">
      <Header />
      <Home />
    </div>
  );
}

export default App;
