

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


        let respuesta= prompt ("PROMOS AGOSTO \n Ingresa una opción. \n 1 - Dos muzzarellas y una gaseosa de 2 litros $6500 \n 2- Dos docenas de empanadas de carne y una cerveza de litro $7000 \n 3- Una muzarella y una docena de empanadas, más una gaseosa de 2 litros $7500");
    
        let num1= 6500;
        let num2= 7000;
        let num3= 7500;
    

        switch (respuesta){

            case '1':
            alert ("Seleccionaste la promo 1: Dos muzarellas y una gaseosa de dos litros $" +num1+ " Se ha agregado a tu pedido.");
            break;
        
            case '2':
            alert ("Seleccionaste la promo 2: Dos docenas de empanadas de carne y una cerveza de litro $" +num2 + " Se ha agregado a tu pedido");
            break;

            case '3':
            alert ("Seleccionaste la promo 3: una muzarella y una docena de empanadas, más una gaseosa de 2 litros $" +num3+ " Se ha agregado a tu pedido");
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

    alert ("El total de tu pedido es...");
    alert ("Gracias por elegirnos! Qué lo disfrutes");
    }
    

    
    
        
   

