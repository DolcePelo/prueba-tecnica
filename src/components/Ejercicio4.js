import { useState } from "react";

function Ejercicio4() {
    const [resultado, setResultado] = useState([])

    const ejecutarCodigo = () => {
        let a = [1, 2, 3];
        let b = a;
        b[0] = 99;
        setResultado(a);
    };

    
    return (
        <div>
            <h2 className="mb-4 text-primary">Ejercicio 4</h2>

            <div className="mb-3">
                <p className="text-muted">Simulamos el siguiente código en JavaScript:</p>
                <pre className="bg-light p-3 rounded border">
{`let a = [1, 2, 3];
let b = a;
b[0] = 99;
console.log(a);`}
                </pre>
            </div>

            <button className="btn btn-primary" onClick={ejecutarCodigo}>Ejecutar</button>

            {resultado.length > 0 && (
                <div className="alert alert-success mt-4">
                    <strong>Resultado de a:</strong> [{resultado.join(", ")}]
                    <p className="mb-0">
                        Explicación: como <code>b = a</code>, ambos apuntan al mismo array. Al modificar <code>b[0]</code>, también cambia <code>a[0]</code>.
                    </p>
                </div>
            )}
        </div>
    );
};


export default Ejercicio4;