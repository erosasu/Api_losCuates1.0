

class VentanaCorrediza2in{
    constructor(id, alto, ancho, tipoVidrio, colorAluminio, cantidadHojas, mosquitero, cantidadCorredizas){
        this.id=id;
        this.alto= alto;
        this.ancho= ancho
        this.color= colorAluminio
        this.hojas=cantidadHojas
        this.mosquitero= mosquitero
        this.cantidadCorredizas= cantidadCorredizas

        if(this.mosquitero==true){
            this.jamba={nombrePerfil:'Jamba c/ mosquitero 2"', cortes:[this.alto-2.6, this.alto-2.6, this.ancho]}
            this.riel={nombrePerfil:'Riel c/ mosquitero 2"', cortes:[this.ancho]}
            this.verticalmosquitero={nombrePerfil:'Vertical mosquitero', cortes:[this.alto-2.5, this.alto-2.5,]}
            this.horizontalmosquitero={nombrePerfil:'Horizontal mosquitero', cortes:[(this.ancho/2)-2.5, (this.ancho/2)-2.5]}
        }else{
            this.jamba={nombrePerfil:'Jamba s/ mosquitero 2"', cortes:[this.alto-2.6, this.alto-2.6, this.ancho]}
            this.riel={nombrePerfil:'Riel s/ mosquitero 2"', cortes:[this.ancho]}
            this.verticalmosquitero={nombrePerfil:'Vertical mosquitero', cortes:[]}
            this.horizontalmosquitero={nombrePerfil:'Horizontal mosquitero', cortes:[]}
        }

        if(cantidadHojas==2&&cantidadCorredizas==1){
            this.cerco={nombrePerfil:'Cerco chapa 2"', cortes:[this.alto-3,this.alto-4]}
            this.traslape={nombrePerfil:'Traslape 2"', cortes:[this.alto-3,this.alto-4]}
            this.cabezal={nombrePerfil:'Cabezalito 2"', cortes:[(this.length-2.8-.4-13.5)/2,(this.length-2.8-.4-13.5)/2]}
            this.zoclo={nombrePerfil:'Zoclo 2 venas 2"', cortes:[(this.length-2.8-.4-13.5)/2,(this.length-2.8-.4-13.5)/2]}
            this.vidrio={tipoVidrio:this.tipoVidrio, cortes:[`${this.zoclo+1.5} x `,``]}
        }else if(cantidadHojas==3&&cantidadCorredizas==2){
            this.cerco={nombrePerfil:'Cerco chapa 2"', cortes:[this.alto,this.alto-4]}
            this.traslape={nombrePerfil:'Traslape 2"', cortes:[this.alto,this.alto-4,this.alto-4,this.alto-4]}
            this.cabezal={nombrePerfil:'Cabezalito 2"', cortes:[(this.length-2.8-.4-18)/3,(this.length-2.8-.4-18)/3,(this.length-2.8-.4-18)/3]}
            this.zoclo={nombrePerfil:'Zoclo 2 venas 2"', cortes:[(this.length-2.8-.4-18)/3,(this.length-2.8-.4-18)/3,(this.length-2.8-.4-18)/3]}
        }else if(cantidadHojas==4&&cantidadCorredizas==2){
            this.cerco={nombrePerfil:'Cerco chapa 2"', cortes:[this.alto-3,this.alto-3,this.alto-4,this.alto-4]}
            this.traslape={nombrePerfil:'Traslape 2"', cortes:[this.alto-3,this.alto-3,this.alto-4,this.alto-4]}
            this.cabezal={nombrePerfil:'Cabezalito 2"', cortes:[(this.length-2.8-.4-27)/4,(this.length-2.8-.4-27)/4,(this.length-2.8-.4-27)/4,(this.length-2.8-.4-27)/4]}
            this.zoclo={nombrePerfil:'Zoclo 2 venas 2"', cortes:[(this.length-2.8-.4-27)/4,(this.length-2.8-.4-27)/4,(this.length-2.8-.4-27)/4,(this.length-2.8-.4-27)/4]}
        }


        
    }


}