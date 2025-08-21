//Aumentar en 10 unidades el stock del producto "Borojó deshidratado".

db.productos.updateOne({nombre:"Borojó deshidratado"},{$set:{stock:28}})

//Añadir el tag "bajo azúcar" a todos los productos de la categoría "Bebida".

db.productos.updateMany({categoria:"Bebida"},{$push:{tags:"bajo en azúcar"}})