import './stylesheets/App.css';
import Tarjeta from './Tarjeta';
import { datos } from './data';


function App() {
  return (
    <div className="App">
      <h1>Users</h1>
      {datos.map(item => 
        <Tarjeta
          url={item.url}
          id={item.id}
          texto={item.testimonio}
        />
      )}
    </div>
  );
}

export default App;