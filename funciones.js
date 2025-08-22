//Definir una función verificarStock(productoId, cantidadDeseada) que retorne si hay suficiente stock.

db.system.js.insertOne({
    _id: "verificarstock",
    value: new Code("function(stock,cantidadDeseada){return stock >= cantidadDeseada}")
});

const f3 = db.system.js.findOne({ _id: "verificarstock" });
const verificarstock = new Function("return " + f3.value.code)();
const borojo = db.productos.findOne({ nombre: "Aceite de borojó" });

verificarstock(borojo.stock, 20);

// 1. Definir una función calcularDescuento(precio, porcentaje) que devuelva el precio con descuento aplicado.

db.system.js.insertOne({
    _id: "calcularDescuento",
    value: new Code("function(precio, porcentaje){return precio-(precio*(porcentaje / 100));}")
});
const f1 = db.system.js.findOne({ _id: "calcularDescuento" });
const calcularDescuento = new Function('return ' + f1.value.code)();

calcularDescuento(100, 15);

// 2. Definir una función clienteActivo(idCliente) que devuelva true si el cliente tiene más de 3 compras registradas.

db.system.js.insertOne({
    _id: "clienteActivo",
    value: new Code ("function(clienteId) {return db.compras.countDocuments({ clienteId: clienteId }) > 3;}")
});

const f2 = db.system.js.findOne({ _id: "clienteActivo" });
const clienteActivo = new Function("return " + f2.value.code)();
const cliente=db.clientes.findOne({nombre:"Diana Suárez"});

clienteActivo(cliente.clienteId); 
