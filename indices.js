//Crear un índice en el campo email de clientes para validaciones rápidas de duplicados.
db.clientes.createIndex({email:1})

//Usar explain() en una consulta para mostrar si el índice de nombre está siendo utilizado.
db.productos.createIndex({nombre:1})
db.productos.find({nombre:"nombre_1"}).explain("executionStats")