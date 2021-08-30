const app = new Vue({
    el:'#app',
    data:{
        titulo: 'Hola Mundo con Vue',
        frutas:[
            {nombre : 'Manzana', cantidad:5},
            {nombre : 'Peras', cantidad : 0},
            {nombre : 'Bananos', cantidad: 2}
        ],
        frutaAgregar:{nuevaFruta:'', cantidad:0},
        total: 0
    },
    methods:{
        agregarFruta (){
            this.frutas.push({nombre:this.frutaAgregar.nuevaFruta, cantidad: this.frutaAgregar.cantidad});
            this.frutaAgregar.nuevaFruta = '';
            this.frutaAgregar.cantidad = '';
        }
    },
    computed:{
        sumarFruta(){
            console.log('Se llama al total');
            this.total = 0;
            for(fruta of this.frutas){
                this.total = this.total + fruta.cantidad;
            }

            return this.total;
        }
    }
});