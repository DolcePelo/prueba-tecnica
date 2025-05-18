import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Ejercicio1() {
    function maximoRecursivo(array, index = 0) {
        if (index === array.length - 1) {
            return array[index];
        }

        const maximoDelResto = maximoRecursivo(array, index + 1);
        return array[index] > maximoDelResto ? array[index] : maximoDelResto;
    }

    const [input, setInput] = useState("");
    const [resultado, setResultado] = useState(null);
    
    const handleCalcular = () => {
        const numeros = input.split(",").map(Number);
        const maximo = maximoRecursivo(numeros);
        setResultado(maximo);
    }

    return (
        <div>
            <h2 className="mb-3 text-primary">Ejercicio 1</h2>
            <p className="text-muted">Ingresá una lista de números separados por comas:</p>
            <div className="mb-3 d-flex flex-column flex-sm-row gap-2">
                <input
                    type="text"
                    className="form-control"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ej: 1,2,3,4,5"
                />
                <button className="btn btn-primary" onClick={handleCalcular}>
                    Calcular Máximo
                </button>
            </div>

            {resultado !== null && (
                <div className="alert alert-success mt-3">
                    <h3 className="mb-0">Máximo: {resultado}</h3>
                </div>
            )}
        </div>
    );
}

export default Ejercicio1;