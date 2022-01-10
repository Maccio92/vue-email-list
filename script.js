/* Attraverso l’apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all’interno di una lista.

Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati.*/

let app = new Vue({
    el: "#app",
    data:{
        mailList : [], 
        mail: null,
    },
    created(){
        let self = this;
        for (let index = 0; index < 10; index++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(function (response) {   
                console.log(response);
                self.mail = response.data.response;
                self.mailList.push(self.mail);
            })
            .catch(function (error) {
                 console.log(error);
            })   
        }
        console.log(self.mailList);
    }
}
)