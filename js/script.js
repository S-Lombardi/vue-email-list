const {createApp} = Vue;

createApp({
    data(){
        return{
            //variabile in cui inserire il risultato della API di Boolean
            random_email: '',
            array_email: []
        }
    },
    mounted(){
        //Richiamo in mounted la chiamata dell'API
        this.chiamataRandomEmail();
    },
    methods: {
        chiamataRandomEmail(){
            //Effettuo la chiamata dell'Api..
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((result) =>{
                //..assegno alla variabile creata la proprietà "response" dell'oggetto data dell'API di Boolean
                this.random_email= result.data.response;
            });
        }
    },

    //Creo una funzione che genera 10 email prese dall'oggetto fornito
    generateTenRandomEmail(){
        for(let i=0; i<10; i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((result) =>{
                //Pusho il risultato in un array vuoto creato in data
                this.array_email.push(result.data.response);
            });


        }

    }


}).mount('#app');