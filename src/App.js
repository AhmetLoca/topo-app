import './App.css';
import Create from './components/create/create'
import Read from './components/read/read'
import Update from './components/update/update';


function App() {

  return (
    <div className="main">
      <div>
        <h3>Todo List</h3>
      </div>
      <div>
        <Create />
      </div>
      <div style={{ marginTop: 30 }}>
        <Read />
      </div>

      <div><Update /></div>

    </div>

  );
}

export default App;
