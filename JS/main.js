

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

const carrito = []


//Acceder al DOM

const conten= document.getElementsByTagName("conten");
console.log(conten);

//Creación de las tarjetas de promos

const div1=document.createElement("div");
div1.innerHTML= `<div>
    <h3>${promocion1.nombre}</h3>
    <p>Precio$ ${promocion1.precio}</p>
    <img src="./imagenes/Copia de promoempanadas.jpeg" alt="promocion de 24 empanadas">
</div>`

document.body.append(div1);












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

   
   