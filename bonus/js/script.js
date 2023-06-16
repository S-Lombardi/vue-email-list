const {createApp} = Vue;

createApp({
    data(){
        return{
            //variabile in cui inserire il risultato della API di Boolean
            array_email: []
        }
    },
    mounted(){
        //Richiamo la funzione 
        this.generateTenRandomEmail();
    },
    methods: {
        //Creo una funzione che genera 10 email prese dall'oggetto fornito
        generateTenRandomEmail(){
            for(let i=0; i<10; i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((result) =>{
                    //Pusho il risultato in un array vuoto creato in data
                    this.array_email.push(result.data.response);
                });
            }
        }
    },

}).mount('#app');