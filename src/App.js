import Navbar from "./component/Navbar";
import Movielist from "./component/Movielist";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
      </header>
      <Movielist/>
    </div>
  );
}

export default App;
