import data from "../data/ejercicio3.json";
import { useState } from "react";

const { ventas } = data;

function Ejercicio3() {
    const [verDatos, setVerDatos] = useState(false);
    const agrupado = {};

    for (const venta of ventas) {
        if (!agrupado[venta.producto_id]) {
            agrupado[venta.producto_id] = 0;
        }

        agrupado[venta.producto_id] += venta.cantidad;
    }

    let maximaCantidad = 0;
    let productoMasVendido = null;

    for (const id in agrupado) {
        if (agrupado[id] > maximaCantidad) {
            maximaCantidad = agrupado[id];
            productoMasVendido = id;
        }
    }

    return (
        <div>
            <h2 className="mb-4 text-primary">Ejercicio 3 - Producto más vendido</h2>
            <div className="alert alert-info fs-5">
                El producto más vendido es el <strong>ID: {productoMasVendido}</strong> con una cantidad de <strong>{maximaCantidad}</strong> unidades.
            </div>

            <button className="btn btn-outline-secondary mb-3" onClick={() => setVerDatos(!verDatos)}>
                {verDatos ? "Ocultar Datos" : "Ver Datos"}
            </button>

            {verDatos && (
                <div className="accordion" id="accordionVentas">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseVentas" aria-expanded="true">
                                Datos del ejercicio
                            </button>
                        </h2>
                        <div id="collapseVentas" className="accordion-collapse collapse show">
                            <div className="accordion-body">
                                <pre className="bg-light p-3 rounded small border">
                                    {JSON.stringify(ventas, null, 2)}
                                </pre>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Ejercicio3;
