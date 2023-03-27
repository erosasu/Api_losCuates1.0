const { composicion_producto } = require("./index_cotizador")


function descomponerMensaje(msg){
    let porcganacia=2.5
    let alto
    let ancho
    let submsg = [];

    let gasto = 0;
    let gastosUnitarios = []; 
    let Productos=[];
    
    submsg = msg.split(/,/)
   
    
    for(i=0;i<submsg.length;i++){
        let por_ganancia;
        let cantidad = 1;
        
        let medidas;
        
        if(/\d+.?\d? x \d+.?\d?/.test(submsg[i])){
            //define el grosor del vidrio
        
            alto=parseFloat(submsg[i].substring(submsg[i].search(/\d+.?\d? x \d+.?\d?/),submsg[i].search(/ x /)))
            
            ancho=parseFloat(submsg[i].substring(submsg[i].search(/ x /)+3,submsg[i].search(/ x /)+8))
            
            medidas = submsg[i].match(/\d+.?\d?/g)

            if(submsg[i].search(/\d{1,2}/)==0){
            cantidad = parseInt(medidas.shift())   
            }
            

            if(/corrediza/i.test(submsg[i])){
                por_ganancia=2.4;
            }
            else if(/domo/i.test(submsg[i])){
                por_ganancia=3;
            }
            else if(/puerta/i.test(submsg[i])&&(/aluminio/i.test(submsg[i])||/tres cuartos/.test(submsg[i]))){
                por_ganancia=2.3;
            }
            else if(/proyeccion/i.test(submsg[i])){
                por_ganancia=2.5
            }
            else if(/cancel/.test(submsg[i])&&/baño/i.test(submsg[i])&&/templado/.test(submsg[i])){
                por_ganancia=2
            }
            else if(/cancel/i.test(submsg[i])&&/baño/i.test(submsg[i])){
                por_ganancia=2.4
            }
            else if(/cubierta/i.test(submsg[i])){
                por_ganancia=3
            }
            else if(/fijo?/i.test(submsg[i])){
                por_ganancia=2.3
            }
            else if(/plegadiza/.test(submsg[i])){
                por_ganancia=2.3
            }else{
                if(/instalado/.test(submsg[i])&&gasto<200){
                    por_ganancia = 4.5 }
                else if(/instalado/.test(submsg[i])&&gasto>200&&gasto<1000){
                    por_ganancia = 3.7}
                else if(/instalado/.test(submsg[i])&&gasto>1000&&gasto<4000){
                    por_ganancia = 3}
                else if(/instalado/.test(submsg[i])&&gasto>4000&&gasto<15000){
                    por_ganancia = 2.4}
                else if(/instalado/.test(submsg[i])&&gasto>15000){
                    por_ganancia = 2}
                else if((/sin instalacion/.test(submsg[i])||/al corte/.test(submsg[i])||/sin instalar/.test(submsg[i]))){
                    por_ganancia = 2.5}
                else if((/sin instalacion/.test(submsg[i])||/al corte/.test(submsg[i])||/sin instalar/.test(submsg[i]))&&gasto>1000){
                    por_ganancia = 2}
                else{
                    por_ganancia=2.5
                }
            }

            console.log('la descripcion es:'+submsg[i])
            const descripcionActual = submsg[i]
            const gastoProducto=Math.trunc(composicion_producto(submsg[i], alto, ancho))
            gastosUnitarios.push(gastoProducto*cantidad)
            
            
            const Producto={
                quantity:cantidad,
                descripcion:descripcionActual,
                gastomaterial:gastoProducto,
                porcientoganancia:por_ganancia,
                precioUnitario:gastoProducto*por_ganancia,
                importe:gastoProducto*por_ganancia*cantidad
                }
            
            
            Productos.push((Producto))
            }  
           
    }


    return Productos;

}

module.exports={descomponerMensaje}