const producto = 'monitor de 28 pulgadas';

console.log(producto);
console.log(producto.replace('pulgadas', '"'));
console.log(producto.replace('monitor', 'monitoe curva'));


// slide para cprtar
console.log(producto.slice(0, 10));
console.log(producto.slice(0));
console.log(producto.slice(2, 1));

//alternativa a slice
console.log(producto.substring(0, 10));
console.log(producto.substring(2, 1));

const usuario = "juan";
console.log(usuario.substring(0, 1));
console.log(usuario.charAt(0));