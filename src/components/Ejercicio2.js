import data from "../data/ejercicio2.json";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";

function Ejercicio2() {
    const [verDatos, setVerDatos] = useState(false);
    const { clientes, pedidos, productos, detallePedidos } = data;

    function calcularTotalPorCliente() {
        const resultado = [];

        for (const cliente of clientes) {
            const pedidosDelCliente = pedidos.filter(p => p.cliente_id === cliente.id);
            if (pedidosDelCliente.length === 0) continue;

            let total = 0;

            for (const pedido of pedidosDelCliente) {
                const detalles = detallePedidos.filter(p => p.id === pedido.id);

                for (const detalle of detalles) {
                    const producto = productos.find(p => p.id === detalle.producto_id);
                    if (producto) {
                        total += detalle.cantidad * producto.precio;
                    }
                }
            }

            resultado.push({
                cliente: cliente.nombre,
                totalGastado: total
            });
        }

        return resultado;
    }

    const resultado = calcularTotalPorCliente();

    return (
        <div>
            <h2 className="mb-4 text-primary">Ejercicio 2 - Total Gastado por Cliente</h2>
            <ul className="list-group">
                {resultado.map((cliente, index) => (
                    <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                        <span>{cliente.cliente}</span>
                        <span className="badge bg-success fs-6">${cliente.totalGastado}</span>
                    </li>
                ))}
            </ul>

            <button className="btn btn-outline-secondary mb-3" onClick={() => setVerDatos(!verDatos)}>
                {verDatos ? "Ocultar Datos" : "Ver Datos"}
            </button>

            {verDatos && (
                <div className="accordion" id="accordionDatos">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseDatos" aria-expanded="true">
                                Datos del ejercicio
                            </button>
                        </h2>
                        <div id="collapseDatos" className="accordion-collapse collapse show">
                            <div className="accordion-body">
                                <pre className="bg-light p-3 rounded small border">
                                    {JSON.stringify(data, null, 2)}
                                </pre>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}

export default Ejercicio2;