const app = new Vue(
    {
        el: '#app',

        data: {

            myMessage: 'my-message',
            userMessage: 'user-message',
            counter: 0,
            selected: 'selected',
            newMessage: '',
            date : dayjs().format('HH:mm'),
            search: '',
            active: false,
            indexCheck: '',
            onlyReceived:'last-message-date-onlyreceived::after',
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

                {
                    name: 'Filiberto',
                    avatar: 'img/av_7.png',
                    visible: true,
                    messages: [
                        {
                            date: '19/04/2021 18:30:25',
                            text: 'Bella la tua foto profilo!',
                            status: 'sent'
                        },
                        {
                            date: '19/04/2021 19:00:00',
                            text: 'Grazie, l\'ho scattata ad una festa',
                            status: 'received'
                        }
                    ]
                },

                {
                    name: 'Simonetta',
                    avatar: 'img/av_8.png',
                    visible: true,
                    messages: [
                        {
                            date: '04/06/2020 11:45:50',
                            text: 'Vieni alla festa di Stefania?',
                            status: 'sent'
                        },
                        {
                            date: '04/06/2020 12:05:20',
                            text: 'Si, certo! Vedrai, ci divertiremo come pazzi',
                            status: 'received'
                        }
                    ]
                }
            ],
            randomAnswers :[ 
                            'OK', 'Va bene', 'Perfetto', 'Ti richiamo', 'Non lo so!!', 'Meglio tardi che mai','Chi ben comincia è a metà dell\'opera',
                            'Una rondine non fa primavera', 'Bacco, tabacco e Venere riducon l\'uomo in cenere', 'Can che abbaia non morde', 'Aiutooo',
                            'Morto un papa se ne fa un altro', 'Chiusa una porta, si apre un portone', 'Abracadabra', 'Chi si somiglia si piglia'
            ],
            randomIcon: [
                            0x1F600, 0x1F604, 0x1F34A, 0x1F344, 0x1F37F, 0x1F363, 0x1F370, 0x1F355,
                            0x1F354, 0x1F35F, 0x1F6C0, 0x1F48E, 0x1F5FA, 0x1F579, 0x1F4DA, 0x1F4A3,		
                            0x1F431, 0x1F42A, 0x1F439, 0x1F424, 0x1F917, 0x1F92D, 0x1F92B, 0x1F914,
                            0x1F604, 0x1F606, 0x1F602, 0x1F60A, 0x1F607, 0x1F60D, 0x1F929, 0x1F911,
                            0x1F634, 0x1F635, 0x1F60E, 0x1F9D0, 0x1F62D, 0x1F631, 0x1F92C, 0x1F47E			
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

                if(this.newMessage != ''){
                    array.push({
                        date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                        text: this.newMessage,
                        status: 'sent'
                    });                    
                }

                this.newMessage = "";

                let isWriting = 3;

                let RandomText = this.randomAnswers[Math.floor(Math.random() * this.randomAnswers.length)];

                let randomEmoji = String.fromCodePoint(this.randomIcon[Math.floor(Math.random() * this.randomIcon.length)]);

                //Milestone 3 + bonus : adding is writing.../ random answer from the array "randomAnswers"
                let answer = setInterval(function(){
                    
                    if (isWriting == 0) {

                        clearInterval(answer);

                        array.push({
                            date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                            text: RandomText + ' '+ randomEmoji,
                            status: 'received'
                        });

                        document.querySelector('.last-access').innerHTML= 'Ultimo accesso oggi alle ' + dayjs().format('HH:mm');
            
                    }else{
                        document.querySelector('.last-access').innerHTML= 'Sta scrivendo...';
                    }

                    isWriting -= 1;

                },1000);

                //Milestone 3: After 1 second, received a default answer(OK)  
                // let answer = setTimeout(function(){ 
                //     array.push({
                //         date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                //         text: 'OK',
                //         status: 'received'
                //     });
                // }, this.time);
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

