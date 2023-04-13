
class FijoSerie3500{
    constructor(id, alto, ancho, colorAluminio, tipovidrio, lugar){
    
    this.id=id;
    this.alto= alto;
    this.ancho= ancho
    this.color= colorAluminio
    this.mosquitero= mosquitero
    this.cantidadCorredizas= cantidadCorredizas
    this.lugar=lugar

    this.Perfiles=[{nombre:`Cerco serie 3500 ${this.color}`,cortes:[alto, alto, ancho, ancho]},
    {nombre:`Junquillo redondo serie 3500 ${this.color}`,cortes:[alto-5.448*2,alto-5.448*2,alto-5.448*2,alto-5.448*2,ancho-5.448*2,ancho-5.448*2,ancho-5.448*2,ancho-5.448*2]},
    {nombre:'Angula escuadra', cortes:[4,4,4,4]}]
       
    this.vidrio={nombre:tipovidrio, medidas:`${alto-5.448*2-1} x ${ancho-5.448*2-1}`}


    }
}

module.exports = {FijoSerie3500}