// 1. Eliminar el cliente que tenga el correo "juan@email.com".
db.clientes.deleteOne({email:"juan@email.com"})

// 2. Eliminar todos los productos con stock menor a 5 (considera esto como un proceso de limpieza de inventario).
db.productos.deleteMany({stock:{$lt:5}})

