import Leftside from './components/Leftside';
import Main from './components/Main';
import Rightside from './components/Rightside';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
     <NavBar />
     <Leftside />
     <Main />
     <Rightside />
    </div>
  );
}

export default App;
