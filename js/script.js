const { createApp } = Vue
const app = createApp({
    data() {
        return {
            mails: [],

        }
    },
    methods: {
        callMail() {
            const mailsList = [];
            for(let i = 0; i < 10; i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((res) => {
                    console.log(res.data.response);
                    mailsList.push(res.data.response);
                    if(i === 9) this.mails = [...mailsList]
                })

            }
        },
    },
    computed() {

    },
    created() {
       this.callMail();

    },


});

app.mount('#app');