import data from "../data/ejercicio3.json";

const { ventas } = data;

function Ejercicio3() {
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
        </div>
    );
}

export default Ejercicio3;
