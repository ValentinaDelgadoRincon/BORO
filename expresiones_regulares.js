// 1. Buscar productos cuyo nombre empiece por "Boro".
db.productos.find({nombre:{$regex:"^Boro",$options:"i"}})
  
// 2. Encontrar productos cuyo nombre contenga la palabra "con" (como en “Concentrado de borojó”).
db.productos.find({nombre:{$regex:/con\w*/i}})
  
// 3. Encontrar clientes cuyo nombre tenga la letra "z" (insensible a mayúsculas/minúsculas).
db.clientes.find({nombre:{$regex:"[z]",$options:"i"}})
