//Simular la entrada de nuevo inventario:
// a. Insertar un documento en `inventario` 
// b. Aumentar el stock del producto correspondienteTodo dentro de una transacción.

const session = db.getMongo().startSession();
const dbSession = session.getDatabase("Boro");
session.startTransaction();
try{
  dbSession.inventario.insertOne({
    
_id:11,
productoId:11,
lote:"L011",
cantidad:25,
entrada:new Date("2025-06-20")
  });
  dbSession.productos.updateOne(
    {nombre:"Chocolatina"},
    {$inc:{stock:25}}
  );
  session.commitTransaction();
  print("producto agregado exitosamente")
}catch(error){
  session.abortTransaction();
  print("producto no agregado")
  print(error)
}finally{
  session.endSession();
}

// 1. Simular una venta:
// a. Descontar del stock del producto
// b. Insertar la venta en la colección `ventas`

const descontar = db.getMongo().startSession();
const dbDescontar = descontar.getDatabase("BORO");
descontar.startTransaction();

try {
  dbDescontar.productos.updateOne({ _id: 1 }, { $inc: { stock: -8 } });
  dbDescontar.ventas.insertOne({ producto_id: 1, cantidad: 8, fecha: new Date() });

  descontar.commitTransaction();
  print("Venta registrada correctamente");
} catch (e) {
  descontar.abortTransaction();
  print("Error:", e);
} finally {
  descontar.endDescontar();
} 


// 3. Hacer una operación de devolución:
// a. Aumentar el stock
// b. Eliminar la venta correspondiente

const aumentar = db.getMongo().startSession();
const dbAumentar = aumentar.getDatabase("BORO");
aumentar.startTransaction();

try {
  dbAumentar.productos.updateOne({ _id: 7 }, { $inc: { stock: 5 } });
  dbAumentar.ventas.deleteOne({ producto_id: 7, cantidad: 5, fecha: new Date() });

  aumentar.commitTransaction();
  print("Devolucion registrada correctamente");
} catch (e) {
  aumentar.abortTransaction();
  print("Error:", e);
} finally {
  aumentar.endAumentar();
} 
