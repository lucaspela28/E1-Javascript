const pizzas = [
{
    id:1,
    Nombre: 'Muzzarella',
    Ingredientes: ['Salsa de tomate', 'Muzzarella'],
    Precio: 400,
},
{    
    id:2,
    Nombre: 'Fugazzetta',
    Ingredientes: ['Cebolla', 'Muzzarella'],
    Precio: 550,
},
{ 
    id:3,
    Nombre:'Calabresa',
    Ingredientes: ['Salsa de tomate', 'Longaniza calabresa', 'Muzzarella'],
    Precio: 650,
}, 
{    
    id:4,
    Nombre: 'Tropical',
    Ingredientes: ['Salsa de tomate', 'Ananá', ' Muzzarella'],
    Precio: 650
}, 
{    
    id:5,
    Nombre:'Especial',
    Ingredientes: ['Salsa de tomate', 'Jamon cocido', 'Morrones', 'Muzzarella'],
    Precio: 580,
}, 
{    
    id:6,
    Nombre: 'Serrana',
    Ingredientes: ['Salsa de tomate', 'Jamón crudo', 'Rúcula', 'Parmesano', 'Muzzarella'],
    Precio: 800
}];

console.log(`Nuetras impares:`)
const pizzasImpres = pizzas.forEach((e)=>{
   if (e.id % 2 !==0){
    console.log (`La pizza de ID ${e.id}, es la pizza ${e.Nombre}`);
   }
})



console.log ('Si tu presupuesto no supera los $600, tenemos lo q buscas:');
const pizzasBajoPrecio = pizzas.map((e)=>{
    if (e.Precio < 600){
        console.log (`-La ${e.Nombre}`);
    }
})


console.log ('A precios q no existen.');   

 

console.log ('No hablemos de precio, hablemos de calidad. Pero, si la economía te preocupa:')



const preciosDetodas = pizzas.map ((e)=>{
    console.log(`-${e.Nombre} $${e.Precio}`);
 })


 const ingrdientesDeCadaPizza = pizzas.forEach((e)=>{
    console.log(`La pizza ${e.Nombre} tiene:`)
   
    e.Ingredientes.forEach((ing)=>{
        console.log (`-${ing}`);
    })
 })