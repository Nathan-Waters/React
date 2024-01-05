import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar'
import Main from './components/Main'

//adding something
function App() {
  return (
    <div className="container">
      {<Navbar />}
      {<Main />}
    </div>
  );
}

export default App;
