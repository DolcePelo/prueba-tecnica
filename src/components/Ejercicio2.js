import data from "../data/ejercicio2.json";
import 'bootstrap/dist/css/bootstrap.min.css';

function Ejercicio2() {
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
        </div>
    );
}

export default Ejercicio2;