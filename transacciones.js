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