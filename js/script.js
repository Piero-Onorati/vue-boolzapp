const app = new Vue(
    {
        el: '#app',

        data: {

            myMessage: 'my-message',
            userMessage : 'user-message',
            counter :0,
            newMessage : '',
            search: '',
            contacts: [
                {
                    name: 'Michela',
                    avatar: 'img/av_2.png',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Ricordati di dargli da mangiare',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            text: 'Tutto fatto!',
                            status: 'received'
                        }
                    ]
                },

                {
                    name: 'Fabio',
                    avatar: 'img/av_3.png',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            text: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            text: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ]
                },

                {
                    name: 'Pietro',
                    avatar: 'img/av_4.png',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            text: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            text: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            text: 'Ah scusa!',
                            status: 'received'
                        }
                    ]
                },

                {
                    name: 'Paolo',
                    avatar: 'img/av_5.png',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Sei andato in palestra oggi?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Certo!!! Tu piuttosto, che fine hai fatto?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Appuntamento dal dentista',
                            status: 'sent'
                        },
                    ]
                },

                {
                    name: 'Stefania',
                    avatar: 'img/av_6.png',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ]
                },



            ]
        },

       

        methods: {

            show : function (index){
                this.counter = index
            }
                
            
            // Milestone 2 con backtick
            // show: function(element,index){

            //     document.getElementById('all-messages').innerHTML = '';

            //     console.log(element.name);

            //     document.getElementById('user-info').innerHTML =
            //         `<div class="circle-div">
            //             <img src="${element.avatar}" alt="">
            //         </div>
            //         <div class="name-last-access">
            //             <h3>${element.name}</h3>
            //             <span class="last-access">Ultimo accesso oggi alle</span>
            //         </div>`;

            //     element.messages.forEach(element => {
            //         console.log(element.text);
            //         let messageType = (element.status == 'sent')? this.myMessage : this.userMessage;
            //         document.getElementById('all-messages').innerHTML += 
            //         `<div class="message ${messageType}">
            //         <h4>${element.text}</h4>
            //         <span class="last-message-date">${element.date}</span>
            //         </div>`                    
            //     });
                   
            // },

        }

        

    }
);

