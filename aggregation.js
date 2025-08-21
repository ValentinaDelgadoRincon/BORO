//Mostrar un listado de los productos más vendidos (suma total de unidades vendidas por producto).

db.ventas.aggregate([
  {
    $unwind:"$productos"
  },
  {$group:{
    _id:"$productos.productoId",
    total_ventas_producto:{
      $sum:"$productos.cantidad"
    }
  }},
  {$sort:{total_ventas_producto:-1}},
  {$limit:3}
])


//Agrupar clientes por cantidad de compras realizadas.
db.clientes.aggregate([
  {
    $project:{
      cantidad_compras:{$size:"$compras"}
    }
  },
  {$group:{
    _id:"$cantidad_compras",
    compras_realizadas:{$sum:1}
  }}
])


//Mostrar el total de ventas por mes (usa $group y $month).
db.ventas.aggregate([
  {
    $unwind:"$productos"
  },
  {$group:{
   _id:{$month:"$fecha"},
    total_ventas:{$sum:"$productos.cantidad"}
  }}
])