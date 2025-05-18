import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Ejercicio1 from './components/Ejercicio1';
import Ejercicio2 from './components/Ejercicio2';
import Ejercicio3 from './components/Ejercicio3';
import Ejercicio4 from './components/Ejercicio4';

function App() {
  const [vista, setVista] = useState(1);

  return (
    <div className="container py-5">
      <header className="text-center mb-5">
        <h1 className="display-4 fw-bold text-primary">Prueba Técnica</h1>
      </header>

      <div className="mb-3 d-flex flex-wrap gap-2">
        <button className={`btn btn-primary ${vista === 1 ? 'fw-bold opacity-100' : 'opacity-75'}`} onClick={() => setVista(1)}>Ejercicio 1</button>
        <button className={`btn btn-primary ${vista === 2 ? 'fw-bold opacity-100' : 'opacity-75'}`} onClick={() => setVista(2)}>Ejercicio 2</button>
        <button className={`btn btn-primary ${vista === 3 ? 'fw-bold opacity-100' : 'opacity-75'}`} onClick={() => setVista(3)}>Ejercicio 3</button>
        <button className={`btn btn-primary ${vista === 4 ? 'fw-bold opacity-100' : 'opacity-75'}`} onClick={() => setVista(4)}>Ejercicio 4</button>
      </div>


      <div className="card shadow-sm">
        <div className="card-body">
          {vista === 1 && <Ejercicio1 />}
          {vista === 2 && <Ejercicio2 />}
          {vista === 3 && <Ejercicio3 />}
          {vista === 4 && <Ejercicio4 />}
        </div>
      </div>
    </div>
  );
}

export default App;
