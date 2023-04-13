
class PuertaSerie3500{
    constructor(alto, ancho, colorAluminio, tipoPuerta, vistas, tipoVidrio, intermedios){

        this.alto=alto
        this.ancho=ancho
        this.color=colorAluminio
        this.tipo=tipoPuerta

        if(intermedios=0){
        this.perfiles=[{nombre:`Cerco serie 3500 ${this.color}`,cortes:[alto-4, alto-4, ancho, ancho]},
                        {nombre:`Junquillo serie 3500 ${this.color}`,cortes:[alto-4-5.448*2, alto-4-5.448*2,alto-4-5.448*2,alto-4-5.448*2, ancho-6-5.448*2-2, ancho-6-5.448*2-2,ancho-6-5.448*2-2,ancho-6-5.448*2-2]},
                        {nombre:`Cabezal serie 3500 ${this.color}`,cortes:[ancho-6-5.448*2]},
                        {nombre:`Zoclo serie 3500 ${this.color}`,cortes:[ancho-6-5.448*2]},
                        {nombre:`Contramarco serie 3500 ${this.color}`,cortes:[ancho,alto-3,alto-3]},
                        {nombre:'Angula escuadra', cortes:[4,4,4,4]}]
        }
        else if(intermedios==1){
            this.perfiles=[{nombre:`Cerco serie 3500 ${this.color}`,cortes:[alto-4, alto-4, ancho, ancho]},
{nombre:`Junquillo serie 3500 ${this.color}`,cortes:[(alto-4-5.448*3)/2,(alto-4-5.448*3)/2,(alto-4-5.448*3)/2,(alto-4-5.448*3)/2,(alto-4-5.448*3)/2,(alto-4-5.448*3)/2,(alto-4-5.448*3)/2,(alto-4-5.448*3)/2, ancho-6-5.448*2-2, ancho-6-5.448*2-2,ancho-6-5.448*2-2,ancho-6-5.448*2-2,ancho-6-5.448*2-2, ancho-6-5.448*2-2,ancho-6-5.448*2-2,ancho-6-5.448*2-2]},
                        {nombre:`Cabezal serie 3500 ${this.color}`,cortes:[ancho-6-5.448*2]},
                        {nombre:`Zoclo serie 3500 ${this.color}`,cortes:[ancho-6-5.448*2]},
                        {nombre:`Intermedio serie 3500 ${this.color}`,cortes:[ancho-6-5.448*2]},
                        {nombre:`Contramarco serie 3500 ${this.color}`,cortes:[ancho,alto-3,alto-3]},
                        {nombre:'Angula escuadra', cortes:[4,4,4,4,4,4]}]
        }
        else if(intermedios==2){
            this.perfiles=[{nombre:`Cerco serie 3500 ${this.color}`,cortes:[alto-4, alto-4, ancho, ancho]},
                        {nombre:`Cabezal serie 3500 ${this.color}`,cortes:[ancho-6-5.448*2]},
                        {nombre:`Zoclo serie 3500 ${this.color}`,cortes:[ancho-6-5.448*2]},
                        {nombre:`Intermedio serie 3500 ${this.color}`,cortes:[ancho-6-5.448*2,ancho-6-5.448*2]},
                        {nombre:`Contramarco serie 3500 ${this.color}`,cortes:[ancho,alto-3,alto-3]}]

        }
        else if(intermedios==3){
            this.perfiles=[{nombre:`Cerco serie 3500 ${this.color}`,cortes:[alto-4, alto-4, ancho, ancho]},
                        {nombre:`Cabezal serie 3500 ${this.color}`,cortes:[ancho-6-5.448*2]},
                        {nombre:`Zoclo serie 3500 ${this.color}`,cortes:[ancho-6-5.448*2]},
                        {nombre:`Intermedio serie 3500 ${this.color}`,cortes:[ancho-6-5.448*2,ancho-6-5.448*2,ancho-6-5.448*2]},
                        {nombre:`Contramarco serie 3500 ${this.color}`,cortes:[ancho,alto-3,alto-3]}]

        }
        else if(intermedios==4){
            this.perfiles=[{nombre:`Cerco serie 3500 ${this.color}`,cortes:[alto-4, alto-4, ancho, ancho]},
                        {nombre:`Cabezal serie 3500 ${this.color}`,cortes:[ancho-6-5.448*2]},
                        {nombre:`Zoclo serie 3500 ${this.color}`,cortes:[ancho-6-5.448*2]},
                        {nombre:`Intermedio serie 3500 ${this.color}`,cortes:[ancho-6-5.448*2,ancho-6-5.448*2,ancho-6-5.448*2,ancho-6-5.448*2]},
                        {nombre:`Contramarco serie 3500 ${this.color}`,cortes:[ancho,alto-3,alto-3]}]

        }
        else if(intermedios==5){
            this.perfiles=[{nombre:`Cerco serie 3500 ${this.color}`,cortes:[alto-4, alto-4, ancho, ancho]},
                        {nombre:`Cabezal serie 3500 ${this.color}`,cortes:[ancho-6-5.448*2]},
                        {nombre:`Zoclo serie 3500 ${this.color}`,cortes:[ancho-6-5.448*2]},
                        {nombre:`Intermedio serie 3500 ${this.color}`,cortes:[ancho-6-5.448*2,ancho-6-5.448*2,ancho-6-5.448*2,ancho-6-5.448*2,ancho-6-5.448*2]},
                        {nombre:`Contramarco serie 3500 ${this.color}`,cortes:[ancho,alto-3,alto-3]}]

        }

    }
}

module.exports={PuertaSerie3500}