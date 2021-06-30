const app = new Vue(
    {
        el: '#app',

        data: {

            myMessage: 'my-message',
            userMessage: 'user-message',
            counter: 0,
            selected: 'selected',
            newMessage: '',
            answer: '',
            date : dayjs().format('HH:mm'),
            search: '',
            active: false,
            indexCheck: '',
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
                            text: 'Appuntamento dal dentista -',
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

        computed : {
            filteredContacts : function (){
                return this.contacts.filter((element)=>{
                    return element.name.toLowerCase().match(this.search.toLowerCase())
                });
            }
        },

        methods: {

            show : function (index){
                this.counter = index
            },
                
            send : function(array) {

                let dateSend = dayjs().format('DD/MM/YYYY HH:mm:ss');

                if(this.newMessage != ''){
                    array.push({
                        date: dateSend,
                        text: this.newMessage,
                        status: 'sent'
                    });
                }

                this.newMessage = "";

                this.answer= setTimeout(function(){ 

                    let dateReceived = dayjs().format('DD/MM/YYYY HH:mm:ss');

                    array.push({
                        date: dateReceived,
                        text: 'OK',
                        status: 'received'
                    });
                }, 1000);

            },

            toggle: function(index){
                this.indexCheck = index
                this.active = !this.active;
            },
          
            deleteMessage : function(array, index){
                array.splice(index,1)
            }

        }

    }
);

