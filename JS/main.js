//Definición objeto Promociones

function promociones (producto, bebida, precio)
{
    this.producto=producto;
    this.bebida=bebida;
    this.precio=precio;
}
   
//Definición promociones 

const promocion1 = new promociones("24 empanadas", "gaseosa de 2lts", 7000, );
const promocion2 = new promociones("2 pizzas", "gaseosa de 2lts", 7500);
const promocion3 = new promociones("1 pizza y 12 empanadas", "gaseosa de 2lts", 8000);


//Creación del carrito

const carrito = [];
localStorage.setItem('carrito',JSON.stringify(carrito))

//Mostrar el carrito en DOM
function mostrarmisProductos(carrito){
const carritoLista=document.getElementById("micarrito");
carritoLista.innerHTML="";
for (const promociones of carrito){
    const li=document.createElement("li");
    li.textContent=`${promociones.producto}:${promociones.precio}`;
    carritoLista.appendChild(li)
}
}
//Calcular total carrito

/*function calculartotal(carrito){
let total=0;
    for (const promociones of carrito) {
        total += promociones.precio; 
    }
    return total;
}*/
const totalCarrito = carrito.reduce((acc,promociones)=> {
    return acc + promociones.precio

}, 0);

 function mostrarPrecioTotal(totalCarrito){
    const totalPrecio=document.getElementById("totalcarrito");
    totalPrecio.textcontent=`El total de tu pedido es: $${total}`
 } 
//Mostrar total del carrito
function totalMiCarrito(carrito){
    const totalcarrito=document.getElementById("totalcarrito");
    totalcarrito.innerHTML="";
        const final=document.createElement("p");
        final.textContent=`El total de tu pedido es: $${totalCarrito}`;
        totalcarrito.appendChild(final)
    }

//Creación de las tarjetas de promos

const div1=document.createElement("div");
div1.innerHTML= `<div class="card">
    <h3>${promocion1.producto}</h3>
    <h3>$ ${promocion1.precio}</h3>
    <img class="fotopromo" src="./imagenes/Copia de promoempanadas.jpeg" alt="promocion de 24 empanadas">
    <button class=boton1> Agregar al Carrito</button>
</div>`
console.log(div1);

document.body.append(div1);



const div2=document.createElement("div");
div2.innerHTML= `<div class="card">
    <h3>${promocion2.producto}</h3>
    <h3>$ ${promocion2.precio}</h3>
    <img class="fotopromo" src="./imagenes/Copia de pizza2.jpeg" alt="promocion de 2 muzzarellas">
    <button class=boton2> Agregar al Carrito</button>;
</div>`
console.log(div2);

document.body.append(div2);

const div3=document.createElement("div");
div3.innerHTML= `<div class="card">
    <h3>${promocion3.producto}</h3>
    <h3>$ ${promocion3.precio}</h3>
    <img class="fotopromo" src="./imagenes/Copia de pizza-y-empanadaspng.webp" alt="promocion de 1 muzzarella y 12 empanadas">
    <button class=boton3> Agregar al Carrito</button>;
</div>`


console.log(div3);

document.body.append(div3);

const div4=document.createElement("div");
div4.innerHTML= `<div>
    <img class="fotocarrito" src="./imagenes/carro-de-la-compra.png" alt="tu carrito de compras">
    <button class=boton4> finalizar pedido </button>;
</div>`
console.log(div4);

document.body.append(div4);

//Asignar eventos a los botones

const boton= document.getElementsByClassName("boton1");
console.log(boton)

let botonpromo1=boton[0];

botonpromo1.addEventListener('click', ()=>{
   
    carrito.push(promocion1);
    mostrarmisProductos(carrito);
    console.log(carrito);

})

const boton2= document.getElementsByClassName("boton2");
console.log(boton2);

let botonpromo2=boton2[0];

botonpromo2.addEventListener('click', ()=>{
    
    carrito.push(promocion2);
    mostrarmisProductos(carrito);
})

const boton3= document.getElementsByClassName("boton3");
console.log(boton3);

let botonpromo3=boton3[0];

botonpromo3.addEventListener('click', ()=>{
   
    carrito.push(promocion3);
    mostrarmisProductos(carrito);

})
const boton4= document.getElementsByClassName("boton4");
console.log(boton4);

let botonfinpedido=boton4[0];

botonfinpedido.addEventListener('click', ()=>{

    totalMiCarrito(carrito);
})










    /*alert(`El total de tu pedido es: $${totalCarrito}`);


    alert ("Gracias por elegirnos! Qué lo disfrutes");*/



/*// Función para saludar e inicio del simulador

function saludar (){
    alert ("Bienvenido a Ruta 11 - Casa de Comidas");
}

saludar (); 

let ingreso=prompt("Ingresa tu nombre para realizar el pedido");


let ingreso1= prompt ("Hola " + (ingreso) + "! Ingresa 1 para elegir tu promo, o cualquier otro caracter para salir."
    );


    if (ingreso1!=1){

        alert("Gracias por visitarnos, te esperamos cuando quieras nuevamente.")
        
    } 

    else{
        for (let i=0; i<3; i++){


        let respuesta= prompt ("PROMOS AGOSTO \n Ingresa una opción. \n 1 -24 empanadas y 1 gaseosa de 2 lts, $7000 \n 2- 2 muzarellas y 1 gaseosa de 2 litros $7500 \n 3- 1 muzarella y 12 empanadas, más 1 gaseosa de 2 litros $8000");
    

        switch (respuesta){

            case '1':
            alert ("Seleccionaste la promo 1: 24 empanadas y 1 gaseosa de 2 lts, $7000. Esta promo se ha agregado a tu pedido.");

            carrito.push (promocion1);

            break;
        
            case '2':
            alert ("Seleccionaste la promo 2: 2 muzarellas y 1 gaseosa de 2 litros $7500. Esta promo se ha agregado a tu pedido");

            carrito.push (promocion2);

            break;

            case '3':
            alert ("Seleccionaste la promo 3: 1 muzarella y 12 empanadas, más 1 gaseosa de 2 litros $8000. Esta promo se ha agregado a tu pedido");

            carrito.push (promocion3);

            break;

            default:
            alert("Opción inválida");
            break;
            } 
               
        let ingreso2= prompt("Ingresa 1 para elegir otra promo. Ingresa 2 para finalizar tu pedido")
        
        if(ingreso2 !=1){

        alert ("Procede a finalizar tu pedido");
        break;
        }
    }   

    alert ("Promociones en el carrito:");
    
    carrito.forEach (promociones =>{alert(`${promociones.producto} - $${promociones.precio}`);});

    
    const totalCarrito = carrito.reduce((acc,promociones)=> {
        return acc + promociones.precio
    
    }, 0);

    alert(`El total de tu pedido es: $${totalCarrito}`);


    alert ("Gracias por elegirnos! Qué lo disfrutes");
    }
    
    */
   
    console.log("hola mundo");

   
   